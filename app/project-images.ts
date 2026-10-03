export type ProjectImage = { src: string; alt: string; caption: string };
export type ProjectVideo = { src: string; title: string; caption: string };

const media = (folder: string, indexes: number[], service: string): ProjectImage[] =>
  indexes.map(index => ({
    src: `/images/uploads/${folder}/${String(index).padStart(2, "0")}.jpg`,
    alt: `${service} by SS Exterior Services in Kilmore and Mitchell Shire`,
    caption: `${service} · Kilmore & Mitchell Shire`,
  }));

// Only the selected before-and-after artwork from each matching service folder.
export const projectImages: Record<string, ProjectImage[]> = {
  "house-washing-kilmore": media("house-washing", [1, 2, 3], "House washing"),
  "delicate-surface-softwashing-kilmore": media("delicate-surface-softwashing", [1, 2, 3, 4, 5], "Delicate surface softwashing"),
  "exterior-gutter-washing-kilmore": media("exterior-gutter-washing", [1, 2, 6], "Exterior gutter, fascia and eave washing"),
  "fence-washing-kilmore": media("fence-washing", [1, 2], "Fence washing"),
  "basic-window-cleaning-kilmore": media("basic-window-cleaning", [1, 3], "Basic window cleaning"),
  "roof-softwashing-kilmore": media("roof-softwashing", [1, 2, 3, 4], "Roof softwashing"),
  "roof-treatment-kilmore": media("roof-treatment", [1, 2], "Roof treatment"),
  "solar-panel-cleaning-kilmore": media("solar-panel-cleaning", [4, 5, 6], "Solar panel cleaning"),
  "driveway-concrete-path-cleaning-kilmore": media("driveway-concrete-path-cleaning", [1, 2, 6], "Driveway, concrete and path cleaning"),
  "retaining-wall-cleaning-kilmore": media("retaining-wall-cleaning", [1], "Retaining wall cleaning"),
};

// Raw still photographs are examples only and never appear in project galleries.
export const serviceExampleImages: Record<string, ProjectImage[]> = {
  "exterior-gutter-washing-kilmore": media("exterior-gutter-washing", [3, 4, 5], "Exterior gutter, fascia and eave washing example"),
  "basic-window-cleaning-kilmore": media("basic-window-cleaning", [2], "Basic window cleaning example"),
  "roof-softwashing-kilmore": media("roof-softwashing", [5], "Roof softwashing example"),
  "roof-treatment-kilmore": media("roof-treatment", [3], "Roof treatment example"),
  "solar-panel-cleaning-kilmore": media("solar-panel-cleaning", [1, 2, 3], "Solar panel cleaning example"),
  "driveway-concrete-path-cleaning-kilmore": media("driveway-concrete-path-cleaning", [3, 4, 5], "Driveway, concrete and path cleaning example"),
  "paver-pool-surround-cleaning-kilmore": media("paver-pool-surround-cleaning", [1], "Paver and pool surround cleaning example"),
  "retaining-wall-cleaning-kilmore": media("retaining-wall-cleaning", [2, 3], "Retaining wall cleaning example"),
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
