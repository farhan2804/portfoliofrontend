import PronounceAI from "../../assets/Images/Projects/pronounce_AI.png";
import SQLAssistant from "../../assets/Images/Projects/AI_SQL_Assistant.png";
import quiz_App from "../../assets/Images/Projects/quiz_app.png";
import text_tract from "../../assets/Images/Projects/text_tract.png";
import writer_diary from "../../assets/Images/Projects/writer_diary.png";
import weather_app from "../../assets/Images/Projects/weather_app.png";
import qr_code from "../../assets/Images/Projects/qr_code.png";
import infinite_scroll from "../../assets/Images/Projects/infinite_scroll.png";
import calculator from "../../assets/Images/Projects/calculator.png";
import todo_list from "../../assets/Images/Projects/todo_list.png";







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
  Pronounce_AI,
  Pronounce_AI_Source_Code,
  AI_SQL_Assistant,
  AI_SQL_Assistant_Source_Code,
  // Pagination,
  // Pagination_Source_Code,
} from "../constants/urlConstants.js";

export const projectData = [
  {
    id: "project_1",
    image: PronounceAI,
    title: "PronounceAI",
    description: "React • Spring Boot • Azure AI",
    Deploy_url: Pronounce_AI,
    SourceCode_url: Pronounce_AI_Source_Code,
  },

  {
    id: "project_2",
    image: SQLAssistant,
    title: "AI SQL Assistant",
    description: "React • Spring Boot • PostgreSQL",
    Deploy_url: AI_SQL_Assistant,
    SourceCode_url: AI_SQL_Assistant_Source_Code,
  },
  {
    id: "project_3",
    image: quiz_App,
    title: "QuizGenius AI",
    description: "React • Spring Boot • GroqAI",
    Deploy_url: Quiz_App,
    SourceCode_url: Quiz_App_Source_Code,
  },
  {
    id: "project_4",
    image: text_tract,
    title: "Text Utility App",
    description: "React • JavaScript",
    Deploy_url: TEXTTRACT,
    SourceCode_url: TEXTTRACT_Source_Code,
  },

  {
    id: "project_5",
    image: writer_diary,
    title: "The Writer's Diary",
    description: "React • JavaScript",
    Deploy_url: WRITERSDIARY,
    SourceCode_url: WRITERS_DIARY_Source_Code,
  },
  {
    id: "project_6",
    image: weather_app,
    title: "Weather App",
    description: "Node.js • Express.js",
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
    id: "project_7",
    image: qr_code,
    title: "QR Code Generator",
    description: "React • JavaScript",
    Deploy_url: QR_CODE_GENERATOR,
    SourceCode_url: QR_CODE_GENERATOR_Source_Code,
  },
  {
    id: "project_8",
    image: infinite_scroll,
    title: "Infinity scroll",
    description: "HTML • CSS • JavaScript",
    Deploy_url: INFINITY_SCROLL,
    SourceCode_url: INFINITY_SCROLL_Source_Code,
  },
  {
    id: "project_9",
    image: calculator,
    title: "Calculator",
    description: "HTML • CSS • JavaScript",
    Deploy_url: CALCULATOR,
    SourceCode_url: Calculator_Source_Code,
  },
  {
    id: "project_10",
    image: todo_list,
    title: "ToDo List",
    description: "React • JavaScript",
    Deploy_url: Todo_List,
    SourceCode_url: Todo_List_Source_Code,
  },
];
