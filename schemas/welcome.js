const mongoose = require('mongoose')

const welcome = mongoose.Schema({
    
    
    Guild: String,
    
    Channel: String

})

module.exports = mongoose.model('welcm', welcome)  
