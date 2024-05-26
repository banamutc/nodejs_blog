// const mongoose = require('mongoose')
// async function connect() {
//     mongoose
//         .connect('mongodb://127.0.0.1:27017/f8_education_dev')
//         .then(() => console.log('Connected! '))
// }
// module.exports = { connect }

const mongoose = require('mongoose')

async function connect() {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        })
        console.log('Connect successfully!!!')
    } catch (error) {
        console.log('Connect failure!!!')
    }
}

module.exports = { connect }
