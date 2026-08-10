import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createSupabaseServerClient(){const store=await cookies();const url=process.env.VITE_SUPABASE_URL;const key=process.env.VITE_SUPABASE_ANON_KEY;if(!url||!key)return null;return createServerClient(url,key,{cookies:{getAll(){return store.getAll()},setAll(values){try{values.forEach(({name,value,options})=>store.set(name,value,options))}catch{}}}})}
export const ADMIN_EMAIL="ssexteriorservices@outlook.com";
export async function getAdminUser(){const client=await createSupabaseServerClient();if(!client)return null;const{data}=await client.auth.getUser();return data.user?.email?.toLowerCase()===ADMIN_EMAIL?data.user:null}
