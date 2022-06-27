const mongoose = require('mongoose');
const AwwDelivered = require('../models/awwDeliveredSchema.js');

const getMothersDelivered = async (req, res, next) => {
    let mothers;
    try {
        mothers = await AwwDelivered.find();
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

const addMotherDelivered = async (req, res, next) => {
    const {
        mothers_name,
        birth_date,
        stage,
        number_of_checkups,
        appoinment_date
    } = req.body;
    const addMotherDelivered = new AwwDelivered({
        mothers_name,
        birth_date,
        stage,
        number_of_checkups,
        appoinment_date
    });

    try {
        await addMotherDelivered.save();
    } catch (err) {
        console.log(err.message);
        next();
    }
    res.status(201).json({
        mother: addMotherDelivered.toObject({
            getters: true
        })
    });
}

exports.getMothersDelivered = getMothersDelivered;
exports.addMotherDelivered = addMotherDelivered;