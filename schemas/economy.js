const mongoose = require('mongoose')

const economy = mongoose.Schema({
    
    
    userID: { type: String, required: true },

    coins: { type: Number, default: 1000 },
    bank: { type: Number, default: 0 },
    maxBank: { type: Number, default: 1000000000 },

})

module.exports = mongoose.model('Economy', economy)  
