import Image2 from "../../assets/Images/Projects/cable.svg";
import Image1 from "../../assets/Images/Projects/dashboard.svg";
import Image3 from '../../assets/Images/Projects/smartHome.svg';
import {
  maintenance_Dashboard,
  maintenance_Dashboard_source_code,
  cable_builder,
  cable_builder_source_code
} from "../constants/urlConstants.js";

export const projectDataCore = [
  {
    id: "project_1",
    image: Image1,
    title: " Maintenance Dashboard",
    description: "JavaScript",
    Deploy_url: maintenance_Dashboard,
    SourceCode_url: maintenance_Dashboard_source_code,
  },
  {
    id: "project_2",
    image: Image2,
    title: "Engineering Utility Tools Suite",
    description: "JavaScript",
    Deploy_url: cable_builder,
    SourceCode_url: cable_builder_source_code,
  },
  {
    id: "project_3",
    image: Image3,
    title: "Smart Home Automation",
    description: "IOT,Blynk Platform,Cloud",
    // Deploy_url: cable_builder,
    // SourceCode_url: cable_builder_source_code,
  },

];
