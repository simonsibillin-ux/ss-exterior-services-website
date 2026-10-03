export type ProjectImage = { src: string; alt: string; caption: string };
export type ProjectVideo = { src: string; title: string; caption: string };

const media = (folder: string, indexes: number[], service: string): ProjectImage[] =>
  indexes.map(index => ({
    src: `/images/uploads/${folder}/${String(index).padStart(2, "0")}.jpg`,
    alt: `${service} by SS Exterior Services in Kilmore and Mitchell Shire`,
    caption: `${service} · Kilmore & Mitchell Shire`,
  }));

const example = (src: string, service: string): ProjectImage => ({
  src,
  alt: `${service} example by SS Exterior Services in Kilmore and Mitchell Shire`,
  caption: `${service} example · Kilmore & Mitchell Shire`,
});

const uploadedExample = (folder: string, index: number, service: string): ProjectImage => ({
  src: `/images/uploads/${folder}/${String(index).padStart(2, "0")}.jpg`,
  alt: `${service} example by SS Exterior Services in Kilmore and Mitchell Shire`,
  caption: `${service} example · Kilmore & Mitchell Shire`,
});

const legacyProject = (src: string, service: string, location: string): ProjectImage => ({
  src,
  alt: `${service} before and after by SS Exterior Services in ${location}`,
  caption: `${service} · ${location}`,
});

// Only the selected before-and-after artwork from each matching service folder.
export const projectImages: Record<string, ProjectImage[]> = {
  "house-washing-kilmore": media("house-washing", [1, 2, 3], "House washing"),
  "delicate-surface-softwashing-kilmore": media("delicate-surface-softwashing", [1, 3, 2, 4], "Delicate surface softwashing"),
  "exterior-gutter-washing-kilmore": media("exterior-gutter-washing", [1, 2, 6], "Exterior gutter, fascia and eave washing"),
  "fence-washing-kilmore": media("fence-washing", [2], "Fence washing"),
  "basic-window-cleaning-kilmore": media("basic-window-cleaning", [1, 3], "Basic window cleaning"),
  "roof-softwashing-kilmore": media("roof-softwashing", [1, 2, 3], "Roof softwashing"),
  "roof-treatment-kilmore": [
    example("/images/service-signs/roof-organic-growth.jpg", "Colorbond roof treatment"),
    ...media("roof-treatment", [2], "Roof treatment"),
  ],
  "gutter-cleaning-kilmore": [
    legacyProject("/images/projects/gutter-cleaning-broadford-1.jpg", "Gutter cleaning", "Broadford"),
    legacyProject("/images/projects/gutter-cleaning-doreen-1.jpg", "Gutter cleaning", "Doreen"),
    legacyProject("/images/projects/gutter-cleaning-kilmore-1.jpg", "Gutter cleaning", "Kilmore"),
    legacyProject("/images/projects/gutter-cleaning-seymour-1.jpg", "Gutter cleaning", "Seymour"),
    legacyProject("/images/projects/gutter-cleaning-wallan-1.jpg", "Gutter cleaning", "Wallan"),
    legacyProject("/images/projects/gutter-cleaning-wallan-2.jpg", "Gutter cleaning", "Wallan"),
  ],
  "solar-panel-cleaning-kilmore": media("solar-panel-cleaning", [4, 5, 6], "Solar panel cleaning"),
  "driveway-concrete-path-cleaning-kilmore": media("driveway-concrete-path-cleaning", [1, 2, 6], "Driveway, concrete and path cleaning"),
  "retaining-wall-cleaning-kilmore": media("retaining-wall-cleaning", [1], "Retaining wall cleaning"),
};

// Raw still photographs are examples only and never appear in project galleries.
export const serviceExampleImages: Record<string, Array<ProjectImage | undefined>> = {
  "house-washing-kilmore": [
    example("/images/projects/house-washing/organic-growth-kilmore.jpg", "House washing organic growth"),
    example("/images/projects/house-washing/cobweb-buildup-kilmore-east.jpg", "House washing cobweb and surface buildup"),
    example("/images/projects/house-washing/weather-staining-seymour.jpg", "Tired house exterior"),
  ],
  "delicate-surface-softwashing-kilmore": [
    undefined,
    undefined,
    uploadedExample("delicate-surface-softwashing", 5, "Render or painted finish cleaning"),
  ],
  "exterior-gutter-washing-kilmore": media("exterior-gutter-washing", [3, 5, 4], "Exterior gutter, fascia and eave washing example"),
  "fence-washing-kilmore": [uploadedExample("fence-washing", 1, "Organic growth on a fence")],
  "basic-window-cleaning-kilmore": media("basic-window-cleaning", [2], "Basic window cleaning example"),
  "roof-softwashing-kilmore": [
    example("/images/service-signs/roof-organic-growth.jpg", "Moss, lichen or algae on a roof"),
    uploadedExample("roof-softwashing", 5, "Dark or uneven roof areas"),
  ],
  "roof-treatment-kilmore": [
    uploadedExample("roof-treatment", 1, "Moss, lichen or algae on a roof"),
    uploadedExample("roof-treatment", 3, "Delicate roof material"),
  ],
  "gutter-cleaning-kilmore": [
    example("/images/service-signs/gutter-blockage.jpg", "Blocked gutter"),
    example("/images/service-signs/gutter-leaf-buildup.jpg", "Leaf buildup in a gutter"),
    example("/images/service-signs/gutter-organic-buildup.jpg", "Organic buildup in a gutter"),
  ],
  "solar-panel-cleaning-kilmore": media("solar-panel-cleaning", [1, 2, 3], "Solar panel cleaning example"),
  "driveway-concrete-path-cleaning-kilmore": media("driveway-concrete-path-cleaning", [4, 5, 3], "Driveway, concrete and path cleaning example"),
  "paver-pool-surround-cleaning-kilmore": media("paver-pool-surround-cleaning", [1], "Paver and pool surround cleaning example"),
  "retaining-wall-cleaning-kilmore": media("retaining-wall-cleaning", [3, 2], "Retaining wall cleaning example"),
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
