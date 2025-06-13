const mongoose = require('mongoose');
 function connectToDatabase() {
    mongoose.connect('mongodb+srv://admin:Nopassword@cluster0.ngm1qn5.mongodb.net/form')
        .then(() => {
            console.log('Connected to MongoDB successfully');
        })
    }
module.exports = connectToDatabase;