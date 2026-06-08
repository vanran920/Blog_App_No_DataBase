const errorHandler = (err,req,res, next) => {

    console.log(err.message)

    res.status(500).send("Something Went Wrong")

    next()
}

module.exports = errorHandler 