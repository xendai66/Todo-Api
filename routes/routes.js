const router = require('express').Router()
const Todo = require("../models/Todo")

//routes
router.get("/add/Todo", (req,res) => {
    const {todo} = req.body;
    const newTodo= new Todo({todo})

})
//save 
newTodo.save()
.then(() => {console.log("Sucessfully added todo")
 res.redirect("/")
}
)
.catch(err => console.log(err));


module.exports = router;