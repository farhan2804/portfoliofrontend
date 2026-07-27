import cable_builder_image from "../../assets/Images/Projects/cable_builder.png";
import maintenance_dashboard_image from "../../assets/Images/Projects/maintenance_dashboard.png";
// import smart_home from '../../assets/Images/Projects/smartHome.svg';
import predictive_maintenance_image from '../../assets/Images/Projects/predictive_maintenance.png';
import {
  maintenance_Dashboard,
  maintenance_Dashboard_source_code,
  cable_builder,
  cable_builder_source_code,
  predictive_maintenance,
  predictive_maintenance_source_code,
} from "../constants/urlConstants.js";

export const projectDataCore = [
  {
    id: "project_1",
    image: maintenance_dashboard_image,
    title: " Maintenance Dashboard",
    description: "JavaScript",
    Deploy_url: maintenance_Dashboard,
    SourceCode_url: maintenance_Dashboard_source_code,
  },
  {
    id: "project_2",
    image: cable_builder_image,
    title: "Engineering Utility Tools Suite",
    description: "JavaScript",
    Deploy_url: cable_builder,
    SourceCode_url: cable_builder_source_code,
  },
  {
    id: "project_3",
    image: predictive_maintenance_image,
    title: "Predictive Maintenance",
    description: "Machine Learning,Data Analysis",
    Deploy_url: predictive_maintenance,
    SourceCode_url: predictive_maintenance_source_code,
  },

];
