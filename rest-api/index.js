const { error } = require('console');
const { resolveSoa } = require('dns');
let express =require('express'),
path = require('path'),
mongoose = require('mongoose'),
cors = require('cors'),
bodyParser = require('body-parser')
mongoDb=require("./database/db");


mongoose.Promise=global.Promise;
mongoose.connect(mongoDb.db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("database connect successfully !!");
}),
error=>{
    console.log("database base error :"+error);
}


const petRoute=require("./routes/pet.route"); 
const app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(cors());
app.use(express.static(path.join(__dirname,'dist/petsanctuary')));
app.use('/api', petRoute);
const port=process.env.port || 8000;
app.listen(port,()=>{
    console.log('Listening port on:'+port);
})


app.use((req,res,next)=>{
    next((createderror(404)));
})
app.get('*',(req,res)=>{
    res.send('invalid endpoint'); 

})
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/petsanctuary/index.html'))  
})
app.use(function(err,req,res,next){
    console.log(error.message); 
    if(!err.statusCode) err.statusCode=500;
    res.status(err.statusCode).send(err.message);
})