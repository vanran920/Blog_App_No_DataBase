const ValidateBlog = (req,res,next) => 
{
    const { title, content } = req.body

    if(!title || !content)
    {
       return res.send("All Field Required")
    }

    next()
}


module.exports =  ValidateBlog