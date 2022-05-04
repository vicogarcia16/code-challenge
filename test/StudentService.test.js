const Reader = require("../lib/utils/Reader");
const StudentService = require("../lib/services/StudentService");
const students = Reader.readJsonFile("./app/students.json");
describe("Unit test for Explorer Service class", () => {
    test("1) Filtro por mision", () => {
        expect(StudentService.filterStudentsAll(students).length).toBeGreaterThanOrEqual(0);

    });
    test('2) getStudentsByEmail function', () => {
        expect(StudentService.getStudentsByEmail(students)[0].length).toEqual(29);

    })

    test('3) getStudentsByCredits function', () => {
        expect(StudentService.getStudentsByCredits(students)[0].length).toEqual(27);

    })
   
});