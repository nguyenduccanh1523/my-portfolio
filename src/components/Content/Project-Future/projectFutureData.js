// src/components/Content/Project-Future/projectFutureData.js
import petshop from "../../../assets/react/petshop.png";
import gara from "../../../assets/react/gara.jpg";
import zuntie from "../../../assets/react/zuntie.jpg";
import { projectFutureTexts } from "./projectFutureTexts";

export const getProjectFutureData = (lang) => [
  {
    title: projectFutureTexts.petshop[lang].title,
    image: petshop,
    description: projectFutureTexts.petshop[lang].description,
    link: "https://example.com/design-project-1",
    github: "https://github.com/nguyenduccanh1523/pet-shop",
  },
  {
    title: projectFutureTexts.zuntie[lang].title,
    image: zuntie,
    description: projectFutureTexts.zuntie[lang].description,
    link: "https://example.com/marketing-campaign",
    github: "https://github.com/nguyenduccanh1523/auto-garage",
  },
  {
    title: projectFutureTexts.garaoto[lang].title,
    image: gara,
    description: projectFutureTexts.garaoto[lang].description,
    link: "https://example.com/marketing-campaign",
    github: "https://github.com/nguyenduccanh1523/auto-garage",
  }
  // Add more items if needed
];
