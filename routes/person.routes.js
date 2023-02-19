const controller = require('../controller/logic/person.controller')


module.exports = (app) => {

    app.get("/person", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/person/byId/:id", (req, res, next) => {
        controller.getById(req, res, next);
        console.log('getting person by id')
    });

    app.post("/person", (req, res, next) => {
        controller.createPerson(req, res, next);
    });

    app.put("/person", (req, res, next) => {
        controller.updatePerson(req, res, next);
    });

    app.delete("/person", (req, res, next) => {
        controller.deletePerson(req, res, next);
    });
}