// src/components/Content/Project/projectData.js
import cssfounder from "../../../assets/html-css/css-founder.png";
import product from "../../../assets/html-css/product-review.png";
import testimonial from "../../../assets/html-css/testimonial-grid.png";
import rsp from "../../../assets/js/rock-paper-scissors.png";
import menuCard from "../../../assets/html-css/menuCard.png";
import warehouse from "../../../assets/react/warehouse.png";
import socialMedia from "../../../assets/react/socialv.png";
import todoJS from "../../../assets/js/todo-cal-weather.png";
import { projectTexts } from "./projectTexts";

// Hàm nhận t (i18n) để trả về mảng projectData
export const getProjectData = (lang) => [
  {
    title: projectTexts.htmlcssfounder[lang].title,
    image: cssfounder,
    category: "html",
    description: projectTexts.htmlcssfounder[lang].description,
    link: "/projects/htmlcssfounder/index.html",
    github: "https://github.com/nguyenduccanh1523/course-fe",
  },
  {
    title: projectTexts.productReview[lang].title,
    image: product,
    category: "html",
    description: projectTexts.productReview[lang].description,
    link: "/projects/productreview/index.html",
    github: "https://github.com/nguyenduccanh1523/course-fe",
  },
  {
    title: projectTexts.socialMedia[lang].title,
    image: socialMedia,
    category: "web",
    description: projectTexts.socialMedia[lang].description,
    link: "http://socialv-net.id.vn/",
    github: "https://github.com/nguyenduccanh1523/course-fe",
  },
  {
    title: projectTexts.rsp[lang].title,
    image: rsp,
    category: "javascript",
    description: projectTexts.rsp[lang].description,
    link: "/projects/javascripts/rock-paper-scissors/index.html",
    github: "https://github.com/nguyenduccanh1523/course-fe",
  },
  {
    title: projectTexts.testimonial[lang].title,
    image: testimonial,
    category: "html",
    description: projectTexts.testimonial[lang].description,
    link: "/projects/testimonial/index.html",
    github: "https://github.com/nguyenduccanh1523/course-fe",
  },
  {
    title: projectTexts.warehouse[lang].title,
    image: warehouse,
    category: "web",
    description: projectTexts.warehouse[lang].description,
    link: "/projects/warehouse/index.html",
    github: "https://github.com/nguyenduccanh1523/warehouse",
  },
  {
    title: projectTexts.menuCard[lang].title,
    image: menuCard,
    category: "html",
    description: projectTexts.menuCard[lang].description,
    link: "/projects/menuCard/index.html",
    github: "https://github.com/nguyenduccanh1523/course-fe",
  },
  {
    title: projectTexts.todoJS[lang].title,
    image: todoJS,
    category: "javascript",
    description: projectTexts.todoJS[lang].description,
    link: "/projects/javascripts/todoJS/index.html",
    github: "https://github.com/nguyenduccanh1523/course-fe",
  },
  
];
