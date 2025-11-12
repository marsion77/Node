const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Marison:Marison@cluster0.5f3ypg5.mongodb.net/')
.then(()=>{
    console.log('DB Connected');
    
})

.catch(()=>{
    console.log('Error Detected');
    
})

module.exports = mongoose.connection