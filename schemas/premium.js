const mongoose = require('mongoose')

const premium = mongoose.Schema({
    
    
    Guild: String,
    Expire: Number,
    Permanent: Boolean

})

module.exports = mongoose.model('Premium', premium)  
