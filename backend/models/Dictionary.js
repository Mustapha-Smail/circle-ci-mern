import mongoose from 'mongoose'

const lsfSchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, 
})

const dictionarySchema = mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    lsf: lsfSchema,
    
}, {
    timestamps: true, 
})

const Dictionary = mongoose.model('Dictionary', dictionarySchema)

export default Dictionary