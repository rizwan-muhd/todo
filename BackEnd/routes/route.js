const express = require('express')
const router = express.Router()
const todoSchema = require('../models/todomodels')

router.post('/addtodo', (req, res) => {
    const todoitems = new todoSchema({
        title: req.body.title
    })
    todoitems.save().then((data) => {
        res.status(200).json(data)
    }).catch((err) => {
        res.status(401).json(err)
    })
    console.log(req.body.title);
    router.get('/gettodo', (req, res) => {

        todoSchema.find({}, (err, result) => {
            if (err) {
                res.send(err)
            }
            res.status(200).send(result)

        }).sort({ _id: -1 })
    })



}),

    router.get('/gettodo', (req, res) => {

        todoSchema.find({}, (err, result) => {
            if (err) {
                res.send(err)
            }
            res.status(200).send(result)

        }).sort({ _id: -1 })
    })

router.delete("/deleteTodo", async (req, res) => {


    console.log("outside try");

    try {
        console.log("enter in try");
        const id = req.query.id
        await todoSchema.deleteOne({ _id: id })
    }
    catch (err) {
        if (err) {
            console.log("error while deleting" + err);
        } else {
            console.log(" deleted succesfully" + err);
        }

    }
    // todoSchema.deleteOne({ _id: id }, (err) => {
    //     if (err) {
    //         console.log("error in deleting");
    //     } else {
    //         console.log("deleted successfully");
    //     }
    // })


})


router.put('/updateTodo', async (req, res) => {
    // const id = req.query.id
    // const title = req.body.newTitle
    console.log(req.body.id);
    console.log(req.body.newTitle)
    const id = req.body.id
    const title = req.body.newTitle


    try {
        await todoSchema.updateOne({ _id: id }, { title: title })




    } catch (err) {
        console.log('error');

    }
    router.get('/gettodo', (req, res) => {

        todoSchema.find({}, (err, result) => {
            if (err) {
                res.send(err)
            }
            res.status(200).send(result)

        }).sort({ _id: -1 })
    })



})







module.exports = router