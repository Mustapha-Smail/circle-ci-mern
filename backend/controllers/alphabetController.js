import asyncHandler from 'express-async-handler'

import Alphabet from '../models/Alphabet.js'

// @desc    Fetch all alphabet 
// @route   GET /api/alphabet
// @access  Public 
const getAlphabet = asyncHandler(async (req, res) => {
    const alphabet = await Alphabet.find({})

    res.json(alphabet)
})

// @desc    Get a letter by id  
// @route   GET /api/alphabet/:id
// @access  Public 
const getAlphabetById = asyncHandler(async (req, res) => {
    const letter = await Alphabet.findById(req.params.id)

    if (letter) res.json(letter)
    else {
        res.status(404)
        throw new Error('Letter not found')
    } 
})

//@desc     Get a random letter
//@route    GET /api/alphabet/random
//@access   Public
const getRandomLetter = asyncHandler (async (req, res) => {

    const randomLetters = await Alphabet.aggregate([{ $sample: { size:1 }}])

    const randomLetter = randomLetters[0]

    if (randomLetter) {
        res.json({
            id: randomLetter._id
        })
    } else {
        res.status(500)
        throw new Error('Internal Server Error')
    }
})

export { getAlphabet, getAlphabetById, getRandomLetter }