const {model, Schema} = require('mongoose')

const newsSchema = new Schema({
    writerId: {
        type: Schema.Types.ObjectId,
        required:true,
        ref: 'authors'
    },
    WriterName: {
        type: String,
        required:true
    },
    title: {
        type: String,
        select: false,
        required:true
    },
    slug: {
        type: String,
        required:true
    },
    image: {
        type: String,
        default: ""
    },
    category: {
        type: String,
        required:true
    },
    description: {
        type: String,
        default:""
    },
    date: {
        type: String,
        required:true
    },
    status: {
        type: String,
        default:'pending'
    }, 
    count: {
        type: Number,
        default:'0'
    }, 
}, {timestamps: true})

module.exports = model('news', newsSchema)