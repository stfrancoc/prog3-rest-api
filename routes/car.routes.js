const controller = require('../controller/logic/car.controller')


module.exports = (app) => {

    app.get("/car", (req, res, next) => {
        controller.getAll(req,res,next);
    });

    app.get("/car/byId/:id", (req, res, next) => {
        controller.getById(req, res, next);
        console.log('getting car by id')
    });

    app.post("/car", (req, res, next) => {
        controller.createCar(req, res, next);
    });

    app.put("/car", (req, res, next) => {
        controller.updateCar(req, res, next);
    });

    app.delete("/car", (req, res, next) => {
        controller.deleteCar(req, res, next);
    });
}