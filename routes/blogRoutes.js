const express = require("express")

const router = express.Router() 

const ValidateBlog = require("../middleware/validateBlog") 

const {
    getHomePage,
    createBlogs,
    editBlog, 
    updateBlog,
    deleteBlog 
} = require("../controllers/blogControllers")


//Home Page 
router.get("/", getHomePage )


//Form Page will call 
router.get("/create", (req,res) => {

    res.render("create")
}) 

//When Data Come From Create then store in array, move back to Home Page
router.post("/create", ValidateBlog, createBlogs) 

//When CLick on Edit Button in home page, then then i come here send to edit webpage
router.get("/edit/:id", editBlog  ) 

//When Click on Update Button of Edit Form, then this route update it details
router.post("/edit/:id", updateBlog ) 

//When Click on Delete Button of home Page, then this route delete the data
router.get("/delete/:id", deleteBlog )


module.exports = router