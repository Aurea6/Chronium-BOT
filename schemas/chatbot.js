const mongoose = require('mongoose')

const c = mongoose.Schema({
    
    
    Guild: String,
    
    Channel: String

})

module.exports = mongoose.model('chatbot', c)  
