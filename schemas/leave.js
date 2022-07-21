const mongoose = require('mongoose')

const goodbye = mongoose.Schema({
    
    
    Guild: String,
    
    Channel: String

})

module.exports = mongoose.model('leave', goodbye)  
