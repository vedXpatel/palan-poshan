const mongoose = require('mongoose');
const Aww = require('../models/awwSchema.js');
const AwwUser = require('../models/signupSchema.js');

const getMothers = async (req, res, next) => {
    let mothers;
    try {
        mothers = await Aww.find();
    } catch (err) {
        console.log(err.message)
        next();
    }
    res.json({
        mothers: mothers.map(mother => mother.toObject({
            getters: true
        }))
    })
}

const addMother = async (req, res, next) => {
    const {
        mothers_name,
        due_date,
        trimester,
        number_of_checkups,
        appoinment_date
    } = req.body;
    const addMother = new Aww({
        mothers_name,
        due_date,
        trimester,
        number_of_checkups,
        appoinment_date
    });

    try {
        await addMother.save();
    } catch (err) {
        console.log(err.message);
        next();
    }
    res.status(201).json({
        mother: addMother.toObject({
            getters: true
        })
    });
}

const addAwwUser = async (req, res, next) => {
    const {
        aww_name,
        aww_email,
        password,
    } = req.body;
    const addAwwUser = new AwwUser({
        aww_name,
        aww_email,
        password,
    });

    try {
        await addAwwUser.save();
    } catch (err) {
        console.log(err.message);
        next();
    }
    res.status(201).json({
        user: user.toObject({
            getters: true
        })
    });
}

exports.addAwwUser = addAwwUser;
exports.getMothers = getMothers;
exports.addMother = addMother;