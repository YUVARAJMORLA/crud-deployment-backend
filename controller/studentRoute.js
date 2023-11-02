

const express = require("express");
const studentSchema = require("../model/studentSchema");
const studentRoute = express.Router();

const mongoose = require("mongoose");

studentRoute.post("/create-student",(req,res)=>{
    studentSchema.create(req.body,(err,data) =>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


studentRoute.get("/",(req,res)=>{
    studentSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

studentRoute.route("/update-student/:id")
.get((req,res)=>{
    studentSchema.find(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req,res)=>{
    studentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

studentRoute.delete("/delete-student/:id",(req,res)=>{
    studentSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
// studentRoute.route().get().put()
// studentRoute.delete()
//_id -> 6540941272c9bcb3e7bfe98f  -> ObjectID of revi
// Axios.put("http://localhost:4000/studentRoute/update-student/6540941272c9bcb3e7bfe98f")
module.exports = studentRoute; 