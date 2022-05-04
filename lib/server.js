const StudentsController = require("./controllers/StudentsController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Thinking API welcome!"});
});

app.get("/v1/students",(request, response) => {
    const students = StudentsController.getStudentsAll();
    response.json(students);
});

app.listen(port, () => {
    console.log(`Visual Thinking API in localhost:${port}`);
});