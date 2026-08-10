create table if not exists public.website_content (
  id uuid primary key default gen_random_uuid(),
  content_type text not null check (content_type in ('page','service','area','post','project','testimonial','setting')),
  slug text not null,
  title text not null default '',
  excerpt text not null default '',
  body jsonb not null default '{}'::jsonb,
  seo_title text not null default '',
  seo_description text not null default '',
  status text not null default 'draft' check (status in ('draft','published','archived')),
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(content_type,slug)
);
alter table public.website_content enable row level security;
create policy "Published website content is public" on public.website_content for select using (status='published' or auth.jwt()->>'email'='ssexteriorservices@outlook.com');
create policy "Website owner can insert content" on public.website_content for insert to authenticated with check (auth.jwt()->>'email'='ssexteriorservices@outlook.com');
create policy "Website owner can update content" on public.website_content for update to authenticated using (auth.jwt()->>'email'='ssexteriorservices@outlook.com') with check (auth.jwt()->>'email'='ssexteriorservices@outlook.com');
create policy "Website owner can delete content" on public.website_content for delete to authenticated using (auth.jwt()->>'email'='ssexteriorservices@outlook.com');
create index if not exists website_content_public_idx on public.website_content(content_type,status,sort_order);
create or replace function public.set_website_content_updated_at() returns trigger language plpgsql as $$ begin new.updated_at=now();return new;end;$$;
drop trigger if exists website_content_updated_at on public.website_content;
create trigger website_content_updated_at before update on public.website_content for each row execute function public.set_website_content_updated_at();
