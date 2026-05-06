import type { StaticImageData } from "next/image";

import img1 from "./1.JPG";
import img2 from "./2.JPG";
import img3 from "./3.JPG";
import img4 from "./4.JPG";
import img5 from "./5.JPG";
import img6 from "./6.JPG";
import img7 from "./7.JPG";

import img1a from "./1a.jpg";
import img2a from "./2a.jpg";
import img3a from "./3a.jpg";
import img4a from "./4a.jpg";
import img5a from "./5a.jpg";
import img6a from "./6a.jpg";

import img1c from "./1c.jpg";
import img2c from "./2c.jpg";
import img3c from "./3c.jpg";
import img4c from "./4c.jpg";
import img5c from "./5c.jpg";
import img6c from "./6c.jpg";
import img7c from "./7c.jpg";
import img8c from "./8c.jpg";

export interface LocalImageItem {
  src: StaticImageData;
  alt: string;
}

export const FULL_WIDTH_IMAGES: LocalImageItem[] = [
  { src: img1, alt: "Photo 1" },
  { src: img2, alt: "Photo 2" },
  { src: img3, alt: "Photo 3" },
  { src: img4, alt: "Photo 4" },
  { src: img5, alt: "Photo 5" },
  { src: img6, alt: "Photo 6" },
  { src: img7, alt: "Photo 7" },
];

export const GRID_3X3_IMAGES: LocalImageItem[] = [
  { src: img1a, alt: "Photo 1" },
  { src: img2a, alt: "Photo 2" },
  { src: img3a, alt: "Photo 3" },
  { src: img4a, alt: "Photo 4" },
  { src: img5a, alt: "Photo 5" },
  { src: img6a, alt: "Photo 6" },
];

export const GRID_2X4_IMAGES: LocalImageItem[] = [
  { src: img1c, alt: "Photo 1" },
  { src: img2c, alt: "Photo 2" },
  { src: img3c, alt: "Photo 3" },
  { src: img4c, alt: "Photo 4" },
  { src: img5c, alt: "Photo 5" },
  { src: img6c, alt: "Photo 6" },
  { src: img7c, alt: "Photo 7" },
  { src: img8c, alt: "Photo 8" },
];
