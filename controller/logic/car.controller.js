/** Dto */
const carDto = require("../../model/dto/car.dto")
const userDto = require("../../model/dto/user.dto")
const config = require("config")

/** Helper */
const helper = require("../helpers/general.helper")
const notHelper = require("../helpers/notification.helper")

exports.createCar = (req, res, next) => {
    let car = {
        plate: req.body.plate,
        brand: req.body.brand,  
        model: req.body.model,
        year: req.body.year,
        city: req.body.city,
        color: req.body.color,
        soat: req.body.soat

    }       
    carDto.create(car, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        let r = config.get("roles").car
        let user = {
            plate: car.plate,
            model: car.model,
            role: r
        }
        userDto.create(user, (err, u) => {
            if (err) {
                carDto.delete({ _id: data._id }, (e, data) => {
                    return res.status(400).json(
                        {
                            error: err
                        }
                    )
                })
            }
            res.status(201).json(
                {
                    info: data
                }
            )
        })
    });
}




exports.updateCar = (req, res, next) => {
    let car = {
        plate: req.body.plate,
        brand: req.body.brand,  
        model: req.body.model,
        year: req.body.year,
        city: req.body.city,
        color: req.body.color,
        soat: req.body.soat
    }  
    carDto.update({ _id: req.body.id }, car, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        res.status(201).json(
            {
                info: data
            }
        )
    })
}



exports.getAll = (req, res, next) => {

    carDto.getAll({}, car, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        res.status(200).json(
            {
                info: data
            }
        )
    })
}


exports.getByPlate = (req, res, next) => {

    carDto.getByPlate({ code: req.params.plate }, car, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        res.status(200).json(
            {
                info: data
            }
        )
    })
}


exports.deleteCar = () => {

    carDto.delete({ _id: req.body.plate }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        res.status(204).json()
    })
}