const controller=require("./../lib/controllers/StudentsController");

describe("Pruebas de unidad", function() {
    test("controllers students amount", function() {
        const out = 51;
        expect(controller.getStudentsAll()[0].length).toEqual(out);
    });
   
    test("controllers students email", function() {
        const out="Todd@visualpartnership.xyz";
        expect(controller.getStudentsByEmail()[0]).toContain(out);
    });

});