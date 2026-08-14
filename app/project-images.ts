export type ProjectImage = { src: string; alt: string; caption: string };

const project = (file: string, service: string, location: string): ProjectImage => ({
  src: `/images/projects/${file}.jpg`,
  alt: `Before and after ${service.toLowerCase()} in ${location} by SS Exterior Services`,
  caption: `${service} · ${location}`,
});

export const projectImages: Record<string, ProjectImage[]> = {
  "house-washing-kilmore": [
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
    project("solar-panel-cleaning-kilmore-1", "Solar panel cleaning", "Kilmore"),
    project("solar-panel-cleaning-diamond-creek-1", "Solar panel cleaning", "Diamond Creek"),
    project("solar-panel-cleaning-craigieburn-1", "Solar panel cleaning", "Craigieburn"),
    project("solar-panel-cleaning-tallarook-1", "Solar panel cleaning", "Tallarook"),
    project("solar-panel-cleaning-kilmore-2", "Solar panel cleaning", "Kilmore"),
    project("solar-panel-cleaning-1", "Solar panel cleaning", "Mitchell Shire"),
  ],
  "basic-window-cleaning-kilmore": [
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
};

export const featuredProjects: ProjectImage[] = [
  projectImages["house-washing-kilmore"][0],
  projectImages["roof-cleaning-kilmore"][0],
  projectImages["surface-pressure-washing-kilmore"][0],
  projectImages["gutter-cleaning-kilmore"][0],
  projectImages["solar-panel-cleaning-kilmore"][1],
  projectImages["house-washing-kilmore"][2],
];
