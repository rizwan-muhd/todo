const express = require("express");
const { addTodo, getTodo } = require("../controller/todoController");
const router = express.Router({ mergeParams: true });
const todoSchema = require("../models/todomodels");

router.route("/addtodo").post(addTodo);
router.route("/gettodo").get(getTodo);

router.delete("/deleteTodo", async (req, res) => {
  console.log("outside try");

  try {
    console.log("enter in try");
    const id = req.query.id;
    await todoSchema.deleteOne({ _id: id });
    const todos = await todoSchema.find({});

    res.json(todos);
    //     if (err) {
    //         res.send(err)
    //     }
    //     res.status(200).send(result)

    // }).sort({ _id: -1 })
  } catch (err) {
    if (err) {
      console.log("error while deleting" + err);
    } else {
      console.log(" deleted succesfully" + err);
    }
  }
});

router.put("/updateTodo", async (req, res) => {
  // const id = req.query.id
  // const title = req.body.newTitle
  console.log(req.body.id);
  console.log(req.body.newTitle);
  const id = req.body.id;
  const title = req.body.newTitle;

  try {
    await todoSchema.updateOne({ _id: id }, { title: title });

    await todoSchema
      .find({}, (err, result) => {
        if (err) {
          res.send(err);
        }
        res.status(200).send(result);
      })
      .sort({ _id: -1 });
  } catch (err) {
    console.log("error");
  }
});

module.exports = router;
