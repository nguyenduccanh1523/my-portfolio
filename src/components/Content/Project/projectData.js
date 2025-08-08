// src/components/Content/Project/projectData.js
import cssfounder from "../../../assets/html-css/css-founder.png";
import product from "../../../assets/html-css/product-review.png";
import testimonial from "../../../assets/html-css/testimonial-grid.png";
import rsp from "../../../assets/js/rock-paper-scissors.png";
import menuCard from "../../../assets/html-css/menuCard.png";
import warehouse from "../../../assets/react/warehouse.png";
import socialMedia from "../../../assets/react/socialv.png";
import todoJS from "../../../assets/js/todo-cal-weather.png";
import n8naifb from "../../../assets/n8n/n8naiagentfb.png";
import n8nvideo from "../../../assets/n8n/n8nshortvideo.png";
import n8nsocial from "../../../assets/n8n/n8nsocialpost.png";
import myappinter from "../../../assets/react/myappinter.png";
import bewarehouse from "../../../assets/node/bewarehouse.png";
import { projectTexts } from "./projectTexts";

// Hàm nhận t (i18n) để trả về mảng projectData
export const getProjectData = (lang) => [
  {
    title: projectTexts.warehouse[lang].title,
    image: warehouse,
    category: "web",
    description: projectTexts.warehouse[lang].description,
    link: "https://timely-babka-b95bf5.netlify.app",
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
    title: projectTexts.socialMedia[lang].title,
    image: socialMedia,
    category: "web",
    description: projectTexts.socialMedia[lang].description,
    link: "http://socialv-net.id.vn/",
    github: "https://github.com/nguyenduccanh1523/social-project",
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
    title: projectTexts.myappinter[lang].title,
    image: myappinter,
    category: "web",
    description: projectTexts.myappinter[lang].description,
    link: "https://endearing-mousse-9f3cad.netlify.app/",
    github: "https://github.com/nguyenduccanh1523/intermediate-react",
  },
  {
    title: projectTexts.n8nshortVideo[lang].title,
    image: n8nvideo,
    category: "n8n",
    description: projectTexts.n8nshortVideo[lang].description,
    note: projectTexts.n8nnote[lang].description,
    json: "/json/shortvideo.json",
  },
  {
    title: projectTexts.bewarehouse[lang].title,
    image: bewarehouse,
    category: "web",
    description: projectTexts.bewarehouse[lang].description,
    link: "https://be-warehouse-production.up.railway.app/api-docs/",
    github: "https://github.com/nguyenduccanh1523/be-warehouse",
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
    title: projectTexts.htmlcssfounder[lang].title,
    image: cssfounder,
    category: "html",
    description: projectTexts.htmlcssfounder[lang].description,
    link: "/projects/htmlcssfounder/index.html",
    github: "https://github.com/nguyenduccanh1523/course-fe",
  },
  {
    title: projectTexts.n8naiAgentFB[lang].title,
    image: n8naifb,
    category: "n8n",
    description: projectTexts.n8naiAgentFB[lang].description,
    note: projectTexts.n8nnote[lang].description,
    json: "/json/aiagentfb.json",
  },
  {
    title: projectTexts.n8nsocialMedia[lang].title,
    image: n8nsocial,
    category: "n8n",
    description: projectTexts.n8nsocialMedia[lang].description,
    note: projectTexts.n8nnote[lang].description,
    json: "/json/socialmedia.json",
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
    title: projectTexts.todoJS[lang].title,
    image: todoJS,
    category: "javascript",
    description: projectTexts.todoJS[lang].description,
    link: "/projects/javascripts/todoJS/index.html",
    github: "https://github.com/nguyenduccanh1523/course-fe",
  },
];
