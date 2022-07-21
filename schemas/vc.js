const mongoose = require('mongoose')

const vc = mongoose.Schema({
    
    
    Guild: String,
    
    Channel: String

})

module.exports = mongoose.model('vcmodel', vc)  
