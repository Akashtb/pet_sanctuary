//now here i am going to create routes

const express = require("express");
const app = express();
const petRoute =express.Router();//this is very important

let Pet = require("../node-backend/model/Pet");

//add books for store

petRoute.route('/add-pet').post((req,res,next)=>{
    Pet.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }
        else{
            res.json(data)
        }
    });
});

//get all Book from store
petRoute.route('/').get((req,res)=>{
    Pet.find((error,data)=>{
        if(error){
            return next (error)
        }
        else{
            res.json(data)
        }
    });
});


//same as this all
//Get Book by ID
petRoute.route('/read-pet/:id').get((req,res)=>{
    Pet.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        }
        else{
            res.json(data)
        }
    });
});

//Update Book store
petRoute.route('/update-pet/:id').put((req,res,next)=>{
    Pet.findByIdAndUpdate(req.params.id,{
      $set: req.body  
    },(error,data)=>{
        if(error){
            return next(error);
            console.log(error);
        }
        else{
            res.json(data)
            console.log('Pet updated successfully');
        }
    })
})

//Delete Book store
petRoute.route('/delete-pet/:id').delete((req,res,next)=>{
    Pet.findByIdAndRemove(req.params.id,(error,data)=>{
        if(error){
            return next(error);
        }
        else{
            res.status(200).json(data)({
                msg: data
            })
            
        }
    })
})

module.exports = petRoute;