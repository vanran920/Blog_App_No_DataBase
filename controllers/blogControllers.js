//Empty Array For Storing Blog object
let blogs = []

const getHomePage = (req,res) => {

    res.render("home", {blogs})

} 

const createBlogs = (req,res) => {

    const post = {
        id : Date.now(),
        title: req.body.title,
        content: req.body.content
    }

    console.log(post)
    blogs.push(post) 

    res.redirect("/")
} 


const editBlog = (req,res) => {

    const Id = Number(req.params.id)

    const blog = blogs.find( (b) => b.id === Id )

    console.log(blog)

    res.render("edit", { blog } ) 
}


const updateBlog = (req,res) => {

    const Id = Number(req.params.id)

    const blog = blogs.find((b) => b.id === Id )

    if(!blog)
    {
        return res.send("Not Found The Blog")
    }

    blog.title = req.body.title
    blog.content = req.body.content 

    res.redirect("/")
} 


const deleteBlog = (req,res) => {

    const ID = Number(req.params.id)

    blogs = blogs.filter((b) => b.id != ID) 

    res.render("home", {blogs})
}

module.exports = {
    getHomePage,
    createBlogs,
    editBlog,
    updateBlog,
    deleteBlog
}