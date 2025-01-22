import express from "express";
import { category, getSortedData } from "../controllers/dataControllers.js";

const router = express.Router();

// All products based on the filtered category
router.get("/category/:categoryName", category); // "/product/cateory/[men]"

//Here sortField="title/price" sortOrder="asc/desc"
router.get("/category/:categoryName/sort/:sortField/:sortOrder", getSortedData);
//  "/product/cateory/[women]/sort/[title]/[desc]"

{
  /* 
    SORTING PROCESS BASED ON THE PARAMETERS RECEIVED FROM THE URL
 when the user clicks on the A-Z then sortField:title , sortOrder:"asc"
 when the user clicks on the Z-A then sortField:title , sortOrder:"desc"
 when the user clicks on the low-high then sortField:price , sortOrder:"asc"
 when the user clicks on the high-low then sortField:price , sortOrder:"desc" 
 */
}


router.post("/wishlist", )
export default router;
