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
    response.json({estudiantes: students[0], cantidad: students[1]});
});

app.get("/v1/students/emails",(request, response) => {
    const students = StudentsController.getStudentsByEmail();
    response.json({emails: students[0], cantidad: students[1]});
});

app.get("/v1/students/credits",(request, response) => {
    const students = StudentsController.getStudentsByCredits();
    response.json({estudiantes: students[0], cantidad: students[1]});
});

app.listen(port, () => {
    console.log(`Visual Thinking API in localhost:${port}`);
});