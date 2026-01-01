import Image1 from "../../assets/Images/Projects/text1.svg";
import Image2 from "../../assets/Images/Projects/quiz1.svg";
import Image3 from "../../assets/Images/Projects/list1.svg";
import Image4 from "../../assets/Images/Projects/diary1.svg";
import Image5 from "../../assets/Images/Projects/qr.svg";
import Image6 from "../../assets/Images/Projects/infinity.svg";
// import Image7 from "../../assets/Images/Projects/darkMode.svg";
import Image8 from "../../assets/Images/Projects/calculator1.svg";
import Image9 from "../../assets/Images/Projects/weather1.svg";
import Image10 from '../../assets/Images/Projects/pagination.svg';
// import Image11 from '../../assets/Images/Projects/core.svg';
import {
  TEXTTRACT,
  TEXTTRACT_Source_Code,
  // LIGHT_DARK_MODE,
  // LIGHT_DARK_MODE_Source_Code,
  CALCULATOR,
  Calculator_Source_Code,
  WRITERSDIARY,
  WRITERS_DIARY_Source_Code,
  QR_CODE_GENERATOR,
  QR_CODE_GENERATOR_Source_Code,
  INFINITY_SCROLL,
  INFINITY_SCROLL_Source_Code,
  Quiz_App,
  Quiz_App_Source_Code,
  Todo_List,
  Todo_List_Source_Code,
  Weather_App,
  Weather_App_Source_Code,
  // Pagination,
  // Pagination_Source_Code,
} from "../constants/urlConstants.js";

export const projectData = [
  {
    id: "project_1",
    image: Image1,
    title: "Text Utility App",
    description: "React.js, JavaScript",
    Deploy_url: TEXTTRACT,
    SourceCode_url: TEXTTRACT_Source_Code,
  },
  {
    id: "project_2",
    image: Image2,
    title: "Quiz App",
    description: "React.js, JavaScript",
    Deploy_url: Quiz_App,
    SourceCode_url: Quiz_App_Source_Code,
  },
  {
    id: "project_6",
    image: Image4,
    title: "The Writer's Diary",
    description: "React.js, JavaScript",
    Deploy_url: WRITERSDIARY,
    SourceCode_url: WRITERS_DIARY_Source_Code,
  },
  {
    id: "project_4",
    image: Image9,
    title: "Weather App",
    description: "Node.js, Express.js",
    Deploy_url: Weather_App,
    SourceCode_url: Weather_App_Source_Code,
  },
  // {
  //   id: "project_11",
  //   image: Image10,
  //   title: "Pagination",
  //   description: "React.js, JavaScript",
  //   Deploy_url: Pagination,
  //   SourceCode_url: Pagination_Source_Code,
  // },
  {
    id: "project_5",
    image: Image5,
    title: "QR Code Generator",
    description: "React.js, JavaScript",
    Deploy_url: QR_CODE_GENERATOR,
    SourceCode_url: QR_CODE_GENERATOR_Source_Code,
  },
  {
    id: "project_3",
    image: Image3,
    title: "ToDo List",
    description: "React.js, JavaScript",
    Deploy_url: Todo_List,
    SourceCode_url: Todo_List_Source_Code,
  },

  {
    id: "project_8",
    image: Image8,
    title: "Calculator",
    description: "HTML, CSS and JavaScript",
    Deploy_url: CALCULATOR,
    SourceCode_url: Calculator_Source_Code,
  },

  {
    id: "project_9",
    image: Image6,
    title: "Infinity scroll",
    description: "HTML, CSS and JavaScript",
    Deploy_url: INFINITY_SCROLL,
    SourceCode_url: INFINITY_SCROLL_Source_Code,
  },
  
];
