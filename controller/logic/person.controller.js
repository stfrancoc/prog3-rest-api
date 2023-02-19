/** Dto */
const personDto = require("../../model/dto/person.dto")
const userDto = require("../../model/dto/user.dto")
const config = require("config")

/** Helper */
const helper = require("../helpers/general.helper")
const notHelper = require("../helpers/notification.helper")

exports.createPerson = (req, res, next) => {
    let pers = {
        id: req.body.id,
        lastname: req.body.lastname,
        username: req.body.username,
        direction: req.body.direction,
        phone: req.body.phone,
        email: req.body.email
    }
    personDto.create(pers, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            )
        }
        let r = config.get("roles").person
        let user = {
            lastname: pers.lastname,
            username: pers.username,
            password: helper.EncryptPassword(req.body.password),
            role: r
        }
        userDto.create(user, (err, u) => {
            if (err) {
                personDto.delete({ _id: data._id }, (e, data) => {
                    return res.status(400).json(
                        {
                            error: err
                        }
                    )
                })
            }
            notHelper.sendSMS(pers.phone)
            res.status(201).json(
                {
                    info: data
                }
            )
        })
    });
}




exports.updatePerson = (req, res, next) => {
    let pers = {
        id: req.body.id,
        lastname: req.body.lastname,
        username: req.body.username,
        direction: req.body.direction,
        phone: req.body.phone,
        email: req.body.email
    }
    personDto.update({ _id: req.body.id }, pers, (err, data) => {
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

    personDto.getAll({}, (err, data) => {
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


exports.getByCode = (req, res, next) => {

    personDto.getByCode({ code: req.params.code }, pers, (err, data) => {
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


exports.deletePerson = () => {

    personDto.delete({ _id: req.body.id }, (err, data) => {
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