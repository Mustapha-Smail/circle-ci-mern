// import asyncHandler from 'express-async-handler'

// @desc    Fetch home message 
// @route   GET /api
// @access  Public 
const getHome = (req, res) => {
    
    res.json("Hello world!")
}

export { getHome }