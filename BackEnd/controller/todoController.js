// import todoschema
const todoSchema = require("../models/todomodels");

// todo add to DB
module.exports.addTodo = (req, res) => {
  const todoitems = new todoSchema({
    title: req.body.title,
  });
  todoitems
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};
// get all todos
module.exports.getTodo = (req, res) => {
  todoSchema
    .find({}, (err, result) => {
      if (err) {
        res.send(err);
      }
      res.status(200).send(result);
    })
    .sort({ _id: -1 });
};
