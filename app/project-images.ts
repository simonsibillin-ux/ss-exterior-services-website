export type ProjectImage = { src: string; alt: string; caption: string };
export type ProjectVideo = { src: string; title: string; caption: string };

const project = (file: string, service: string, location: string): ProjectImage => ({
  src: `/images/projects/${file}.jpg`,
  alt: `Before and after ${service.toLowerCase()} in ${location} by SS Exterior Services`,
  caption: `${service} · ${location}`,
});

const uploaded = (folder: string, count: number, service: string): ProjectImage[] =>
  Array.from({ length: count }, (_, index) => ({
    src: `/images/uploads/${folder}/${String(index + 1).padStart(2, "0")}.jpg`,
    alt: `${service} project by SS Exterior Services in Kilmore and Mitchell Shire`,
    caption: `${service} · Kilmore & Mitchell Shire`,
  }));

export const projectImages: Record<string, ProjectImage[]> = {
  "house-washing-kilmore": [
    ...uploaded("house-washing", 3, "House washing"),
    {
      src: "/images/projects/house-washing/before-after-wallan.jpg",
      alt: "Before and after house washing around a window in Wallan by SS Exterior Services",
      caption: "House washing · Wallan",
    },
    {
      src: "/images/projects/house-washing/before-after-mitchell-shire.jpg",
      alt: "Before and after house washing weatherboards in Mitchell Shire by SS Exterior Services",
      caption: "House washing · Mitchell Shire",
    },
    project("house-washing-kilmore-2", "House washing", "Kilmore"),
    project("house-washing-kilmore-1", "House washing", "Kilmore"),
    project("soft-washing-wallan-1", "Soft washing", "Wallan"),
    project("fence-washing-1", "Fence washing", "Mitchell Shire"),
  ],
  "roof-cleaning-kilmore": [
    project("roof-cleaning-kilmore-1", "Roof cleaning", "Kilmore"),
    project("roof-cleaning-wallan-1", "Roof cleaning", "Wallan"),
    project("roof-cleaning-tile-1", "Tile roof cleaning", "Mitchell Shire"),
    project("roof-cleaning-tile-2", "Tile roof cleaning", "Kilmore region"),
  ],
  "surface-pressure-washing-kilmore": [
    project("pressure-washing-kilmore-1", "Pressure washing", "Kilmore"),
    project("pressure-washing-kilmore-2", "Pressure washing", "Kilmore"),
    project("pressure-washing-wall-1", "Pressure washing", "Mitchell Shire"),
    project("fence-washing-2", "Fence washing", "Mitchell Shire"),
  ],
  "gutter-cleaning-kilmore": [
    project("gutter-cleaning-kilmore-1", "Gutter cleaning", "Kilmore"),
    project("gutter-cleaning-wallan-1", "Gutter cleaning", "Wallan"),
    project("gutter-cleaning-seymour-1", "Gutter cleaning", "Seymour"),
    project("gutter-cleaning-broadford-1", "Gutter cleaning", "Broadford"),
    project("gutter-cleaning-doreen-1", "Gutter cleaning", "Doreen"),
    project("gutter-cleaning-wallan-2", "Gutter cleaning", "Wallan"),
  ],
  "solar-panel-cleaning-kilmore": [
    ...uploaded("solar-panel-cleaning", 6, "Solar panel cleaning"),
    project("solar-panel-cleaning-kilmore-1", "Solar panel cleaning", "Kilmore"),
    project("solar-panel-cleaning-diamond-creek-1", "Solar panel cleaning", "Diamond Creek"),
    project("solar-panel-cleaning-craigieburn-1", "Solar panel cleaning", "Craigieburn"),
    project("solar-panel-cleaning-tallarook-1", "Solar panel cleaning", "Tallarook"),
    project("solar-panel-cleaning-kilmore-2", "Solar panel cleaning", "Kilmore"),
    project("solar-panel-cleaning-1", "Solar panel cleaning", "Mitchell Shire"),
  ],
  "basic-window-cleaning-kilmore": [
    ...uploaded("basic-window-cleaning", 3, "Basic window cleaning"),
    project("house-washing-kilmore-1", "Exterior and window cleaning", "Kilmore"),
    project("soft-washing-wallan-2", "Exterior and fascia cleaning", "Wallan"),
    project("fence-washing-1", "Exterior detail cleaning", "Mitchell Shire"),
  ],
  "commercial-exterior-cleaning-mitchell-shire": [
    project("pressure-washing-kilmore-2", "Commercial surface cleaning", "Kilmore"),
    project("pressure-washing-wall-1", "Commercial exterior cleaning", "Mitchell Shire"),
    project("solar-panel-cleaning-craigieburn-1", "Commercial solar panel cleaning", "Craigieburn"),
    project("gutter-cleaning-broadford-1", "Commercial gutter cleaning", "Broadford"),
  ],
  "delicate-surface-softwashing-kilmore": uploaded("delicate-surface-softwashing", 5, "Delicate surface softwashing"),
  "exterior-gutter-washing-kilmore": uploaded("exterior-gutter-washing", 6, "Exterior gutter, fascia and eave washing"),
  "fence-washing-kilmore": uploaded("fence-washing", 2, "Fence washing"),
  "roof-softwashing-kilmore": uploaded("roof-softwashing", 5, "Roof softwashing"),
  "roof-treatment-kilmore": uploaded("roof-treatment", 3, "Roof treatment"),
  "driveway-concrete-path-cleaning-kilmore": uploaded("driveway-concrete-path-cleaning", 6, "Driveway, concrete and path cleaning"),
  "paver-pool-surround-cleaning-kilmore": uploaded("paver-pool-surround-cleaning", 1, "Paver and pool surround cleaning"),
  "retaining-wall-cleaning-kilmore": uploaded("retaining-wall-cleaning", 3, "Retaining wall cleaning"),
};

export const projectVideos: Record<string, ProjectVideo[]> = {
  "paver-pool-surround-cleaning-kilmore": [
    { src: "/videos/paver-pool-surround-cleaning.m4v", title: "Paver and pool surround cleaning", caption: "See the cleaning process and finished surface." },
  ],
  "surface-sealing-kilmore": [
    { src: "/videos/surface-sealing-1.m4v", title: "Surface sealing project", caption: "A recent surface sealing project by SS Exterior Services." },
    { src: "/videos/surface-sealing-2.m4v", title: "Sealing application and result", caption: "See the application process and finished result." },
  ],
};

export const featuredProjects: ProjectImage[] = [
  projectImages["house-washing-kilmore"][0],
  projectImages["roof-cleaning-kilmore"][0],
  projectImages["surface-pressure-washing-kilmore"][0],
  projectImages["gutter-cleaning-kilmore"][0],
  projectImages["solar-panel-cleaning-kilmore"][1],
  projectImages["house-washing-kilmore"][2],
];
