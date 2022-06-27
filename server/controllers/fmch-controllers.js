const mongoose = require('mongoose');
const Fmch = require('../models/fmchSchema.js');

const getAwwWorkers = async (req, res, next) => {
    let workers;
    try {
        workers = await Fmch.find();
    } catch (err) {
        console.log(err.message)
        next();
    }
    res.json({
        workers: workers.map(worker => worker.toObject({
            getters: true
        }))
    })
}

exports.getAwwWorkers = getAwwWorkers;