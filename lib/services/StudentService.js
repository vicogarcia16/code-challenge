class StudentService{
    static filterStudentsAll(students) {
        const Students = students;
        return Students;
    }
    static getStudentsByEmail(students) {
        const studentsByEmail = students.filter((student) => student.haveCertification === true);
        return studentsByEmail.map((explorer) => explorer.email);
    }
}
module.exports = StudentService;