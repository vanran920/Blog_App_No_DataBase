const express = require("express") 
const logger = require("./middleware/logger")
const errorHandler = require("./middleware/errorMiddleware")

const app = express()

const PORT = process.env.PORT || 3000

const blogRoutes = require("./routes/blogRoutes")

app.use(express.json())

app.use(express.static("public"))

app.set("view engine", "ejs") 

app.use(express.urlencoded({ extended: true })) 



app.use(logger)


app.use(blogRoutes)



app.use(errorHandler)

app.use((req,res) => {
    res.status(404).json({
        "message" : "Wrong Route"
    })
}) 


app.listen(PORT, (req, res) => {
    console.log("Server Is Listening At ", PORT)
})
