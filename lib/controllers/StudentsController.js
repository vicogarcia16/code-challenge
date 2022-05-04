const StudentService = require("../services/StudentService");
const Reader = require("./../utils/Reader");
const students=Reader.readJsonFile(process.cwd()+"/app/students.json");
class StudentsController{
    static getStudentsAll(){
        return StudentService.filterStudentsAll(students);
    }
    static getStudentsByEmail(){
        return StudentService.getStudentsByEmail(students);
    }
}
module.exports = StudentsController;