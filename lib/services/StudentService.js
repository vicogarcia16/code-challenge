class StudentService{
    static filterStudentsAll(students) {
        const Students = students;
        return Students;
    }
    static getStudentsByEmail(students) {
        const studentsByEmail = students.filter((student) => student.haveCertification === true);
        return studentsByEmail.map((explorer) => explorer.email);
    }

    static getStudentsByCredits(students) {
        const studentsByCredits = students.filter((student) => student.credits > 500);
        return [studentsByCredits, studentsByCredits.length];
    }
}
module.exports = StudentService;