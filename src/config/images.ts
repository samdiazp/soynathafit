const IMAGE_BASE_URL = "";

function imagePath(path: string) {
  return `${IMAGE_BASE_URL}${path}`;
}

export const IMAGES = {
  hero: imagePath("/images/hero-prototype.jpg"),
  medicines: {
    tirzepatide: imagePath("/images/prototype/med-tirzepatide.jpg"),
    semaglutide: imagePath("/images/prototype/med-semaglutide.jpg"),
    nad: imagePath("/images/prototype/med-nad.jpg"),
    sermorelin: imagePath("/images/prototype/med-sermorelin.jpg"),
    glutathione: imagePath("/images/prototype/med-glutathione.png"),
    vitaminD3: imagePath("/images/prototype/med-vitamin-d3.png"),
    vitaminB12: imagePath("/images/prototype/med-vitamin-b12.png"),
  },
  results: {
    nathalyBefore: imagePath("/images/prototype/ad-nathaly-before.jpg"),
    nathalyAfter: imagePath("/images/prototype/ad-nathaly-after.jpg"),
    secondBefore: imagePath("/images/prototype/ad-2-before.jpg"),
    secondAfter: imagePath("/images/prototype/ad-2-after.jpg"),
    thirdBefore: imagePath("/images/prototype/ad-3-before.jpg"),
    thirdAfter: imagePath("/images/prototype/ad-3-after.jpg"),
  },
  founder: imagePath("/images/prototype/founder-nathaly.jpg"),
  og: imagePath("/images/hero-prototype.jpg"),
} as const;
