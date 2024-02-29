const express = require ("express");
const {createTodo , upadateTodo} = require("./types")
const { todo } = require("./db"); 
const cors = require("cors")
 const app = express();

app.use(express.json());
app.use(cors({}));


app.post("/todos", async function(req, res)  {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    
    if(!parsePayload) {
        res.status(411).json({
            msg: "You send the wrong input"
        });
        return;
    }
    //put in MongoDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json ({
        msg : "Todo Created"
    });
});

app.get("/todos", async function (req, res) {
    const todos = await todo.find({});
    res.json({
        todos
    })

    
});

app.put("/completed", async function(req, res) {
    const upadatePaylod = req.body;
    const parsePayload = upadateTodo.safeParse(upadatePaylod);
    if(!parsePayload) {
        res.status(411).json({
          msg: "You sent the wrong input"

        });
        return;
    }

    await todo.update({
        _id : req.body.id
    }, {
        completed: true
    })

});

app.listen(3000 , () => console.log("Server Started...."))