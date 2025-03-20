/*modules anad what they do
      1 uses js to dynamically create the welcome page which has all the features listed
      2 a module to create a new todo item
      3 a module to delete a todo item
      4 a module to edit a todo item
      5 a module to mark a todo item as complete 

      
*/
import "/src/modules/style.css";
import {homePage} from "./modules/welcomePage.js";
import {resetPage} from "./modules/resetPage.js";
import {featuresPage} from "./modules/featuresPage.js";
import {supportPage} from "./modules/supportPage.js";
import {header} from "./modules/header.js";


resetPage();
header(homePage, supportPage, resetPage, featuresPage);
homePage();




