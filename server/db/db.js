const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/UserLogs',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log("Connection Successfully Done")
}).catch((e)=>{
    console.log("No connection Done")
    console.log(e)
})
