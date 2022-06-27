const consultation = (req, res) => {
    const status = req.body.status;
    let consultation = [];
    let isAllergy = false;
    let isAbusive = false;
    if (status === 1) {
        const trimester = req.body.trimester;
        const height = req.body.height; //in meters
        const weight = req.body.weight;
        const vaccine1 = req.body.vaccine1;
        const vaccine2 = req.body.vaccine2;
        const medication1 = req.body.medication1;
        const medication2 = req.body.medication2;
        const allergy = req.body.allergy;
        const abusive = req.body.abusive;
        const bmi = weight / (height * height);
        if (trimester === 1) {
            if (bmi < 20.0) {
                // less fat
                if (!vaccine1) {
                    consultation.push('Please take Abc vaccine.');
                }
                if (!vaccine2) {
                    consultation.push('Please take Xyz vaccine.');
                }
                if (!medication1) {
                    consultation.push('Please take def medication.');
                }
                if (!medication2) {
                    consultation.push('Please take pqr medication.');
                }
                if (allergy) {
                    //show in form to check medications accordingly
                    consultation.push("Please check with the doctors for your allergies.")
                }
                if (abusive) {
                    //visit date sooner
                    consultation.push("Please visit often. Make sure you visit more than once a trimester.")
                }
                consultation.push("Bmi is below optimal value. Please meet with abc department they will tell you about the right nutrients you need.");
            } else if (bmi >= 20.0 && bmi < 25.0) {
                // normal //
                if (!vaccine1) {
                    consultation.push('Please take Abc vaccine.');
                }
                if (!vaccine2) {
                    consultation.push('Please take Xyz vaccine.');
                }
                if (!medication1) {
                    consultation.push('Please take def medication.');
                }
                if (!medication2) {
                    consultation.push('Please take pqr medication.');
                }
                if (allergy) {
                    //show in form to check medications accordingly
                    consultation.push("Please check with the doctors for your allergies.")
                }
                if (abusive) {
                    //visit date sooner
                    consultation.push("Please visit often. Make sure you visit more than once a trimester.")
                }
                consultation.push("Your BMI is normal. Continue taking care of yourself");
            } else {
                if (!vaccine1) {
                    consultation.push('Please take Abc vaccine.');
                }
                if (!vaccine2) {
                    consultation.push('Please take Xyz vaccine.');
                }
                if (!medication1) {
                    consultation.push('Please take def medication.');
                }
                if (!medication2) {
                    consultation.push('Please take pqr medication.');
                }
                if (allergy) {
                    //show in form to check medications accordingly
                    consultation.push("Please check with the doctors for your allergies.")
                }
                if (abusive) {
                    //visit date sooner
                    consultation.push("Please visit often. Make sure you visit more than once a trimester.")
                }
                consultation.push("Your BMI is above optimal level.Please meet with abc department they will tell you about the right nutrients you need.");
            }
        } else if (trimester === 2) {
            if (bmi < 25.0) {
                // less fat
                if (!vaccine1) {
                    consultation.push('Please take Abc vaccine.');
                }
                if (!vaccine2) {
                    consultation.push('Please take Xyz vaccine.');
                }
                if (!medication1) {
                    consultation.push('Please take def medication.');
                }
                if (!medication2) {
                    consultation.push('Please take pqr medication.');
                }
                if (allergy) {
                    //show in form to check medications accordingly
                    consultation.push("Please check with the doctors for your allergies.")
                }
                if (abusive) {
                    //visit date sooner
                    consultation.push("Please visit often. Make sure you visit more than once a trimester.")
                }
                consultation.push("Bmi is below optimal value. Please meet with abc department they will tell you about the right nutrients you need.");
            } else if (bmi >= 25.0 && bmi < 28.0) {
                //normal
                if (!vaccine1) {
                    consultation.push('Please take Abc vaccine.');
                }
                if (!vaccine2) {
                    consultation.push('Please take Xyz vaccine.');
                }
                if (!medication1) {
                    consultation.push('Please take def medication.');
                }
                if (!medication2) {
                    consultation.push('Please take pqr medication.');
                }
                if (allergy) {
                    //show in form to check medications accordingly
                    consultation.push("Please check with the doctors for your allergies.")
                }
                if (abusive) {
                    //visit date sooner
                    consultation.push("Please visit often. Make sure you visit more than once a trimester.")
                }
                consultation.push("Your BMI is normal. Continue taking care of yourself");
            } else {
                // more fat
                if (!vaccine1) {
                    consultation.push('Please take Abc vaccine.');
                }
                if (!vaccine2) {
                    consultation.push('Please take Xyz vaccine.');
                }
                if (!medication1) {
                    consultation.push('Please take def medication.');
                }
                if (!medication2) {
                    consultation.push('Please take pqr medication.');
                }
                if (allergy) {
                    //show in form to check medications accordingly
                    consultation.push("Please check with the doctors for your allergies.")
                }
                if (abusive) {
                    //visit date sooner
                    consultation.push("Please visit often. Make sure you visit more than once a trimester.")
                }
                consultation.push("Your BMI is above optimal level.Please meet with abc department they will tell you about the right nutrients you need.");
            }
        } else {
            if (bmi < 28.0) {
                // less fat
                if (!vaccine1) {
                    consultation.push('Please take Abc vaccine.');
                }
                if (!vaccine2) {
                    consultation.push('Please take Xyz vaccine.');
                }
                if (!medication1) {
                    consultation.push('Please take def medication.');
                }
                if (!medication2) {
                    consultation.push('Please take pqr medication.');
                }
                if (allergy) {
                    //show in form to check medications accordingly
                    consultation.push("Please check with the doctors for your allergies.")
                }
                if (abusive) {
                    //visit date sooner
                    consultation.push("Please visit often. Make sure you visit more than once a trimester.")
                }
                consultation.push("Bmi is below optimal value. Please meet with abc department they will tell you about the right nutrients you need.");
            } else if (bmi >= 28.0 && bmi < 30.0) {
                //normal
                if (!vaccine1) {
                    consultation.push('Please take Abc vaccine.');
                }
                if (!vaccine2) {
                    consultation.push('Please take Xyz vaccine.');
                }
                if (!medication1) {
                    consultation.push('Please take def medication.');
                }
                if (!medication2) {
                    consultation.push('Please take pqr medication.');
                }
                if (allergy) {
                    //show in form to check medications accordingly
                    consultation.push("Please check with the doctors for your allergies.")
                }
                if (abusive) {
                    //visit date sooner
                    consultation.push("Please visit often. Make sure you visit more than once a trimester.")
                }
            } else {
                // more fat
                if (!vaccine1) {
                    consultation.push('Please take Abc vaccine.');
                }
                if (!vaccine2) {
                    consultation.push('Please take Xyz vaccine.');
                }
                if (!medication1) {
                    consultation.push('Please take def medication.');
                }
                if (!medication2) {
                    consultation.push('Please take pqr medication.');
                }
                if (allergy) {
                    //show in form to check medications accordingly
                    consultation.push("Please check with the doctors for your allergies.")
                }
                if (abusive) {
                    //visit date sooner
                    consultation.push("Please visit often. Make sure you visit more than once a trimester.")
                }
                consultation.push("Your BMI is above optimal level.Please meet with abc department they will tell you about the right nutrients you need.");
            }
        }
    } else {
        const age = req.body.age;
        const sickPerson = req.body.sickPerson;
        const symptoms = req.body.symptoms;
        if (age === "newborn") {
            if (sickPerson === "child") {
                if (!vaccine1) {
                    consultation.push('Please take Abc vaccine.');
                }
                if (!vaccine2) {
                    consultation.push('Please take Xyz vaccine.');
                }
                if (!medication1) {
                    consultation.push('Please take def medication.');
                }
                if (!medication2) {
                    consultation.push('Please take pqr medication.');
                }
                if (allergy) {
                    //show in form to check medications accordingly
                    consultation.push("Please check with the doctors for your allergies.")
                }
                if (abusive) {
                    //visit date sooner
                    consultation.push("Please visit often. Make sure you visit more than once a trimester.")
                }
            } else if (sickPerson === "mother") {
                if (!vaccine1) {
                    consultation.push('Please take Abc vaccine.');
                }
                if (!vaccine2) {
                    consultation.push('Please take Xyz vaccine.');
                }
                if (!medication1) {
                    consultation.push('Please take def medication.');
                }
                if (!medication2) {
                    consultation.push('Please take pqr medication.');
                }
                if (allergy) {
                    //show in form to check medications accordingly
                    consultation.push("Please check with the doctors for your allergies.")
                }
                if (abusive) {
                    //visit date sooner
                    consultation.push("Please visit often. Make sure you visit more than once a trimester.")
                }
            }
        } else if (age === "infant") {
            if (sickPerson === "child") {
                if (!vaccine1) {
                    consultation.push('Please take Abc vaccine.');
                }
                if (!vaccine2) {
                    consultation.push('Please take Xyz vaccine.');
                }
                if (!medication1) {
                    consultation.push('Please take def medication.');
                }
                if (!medication2) {
                    consultation.push('Please take pqr medication.');
                }
                if (allergy) {
                    //show in form to check medications accordingly
                    consultation.push("Please check with the doctors for your allergies.")
                }
                if (abusive) {
                    //visit date sooner
                    consultation.push("Please visit often. Make sure you visit more than once a trimester.")
                }
            } else if (sickPerson === "mother") {
                if (!vaccine1) {
                    consultation.push('Please take Abc vaccine.');
                }
                if (!vaccine2) {
                    consultation.push('Please take Xyz vaccine.');
                }
                if (!medication1) {
                    consultation.push('Please take def medication.');
                }
                if (!medication2) {
                    consultation.push('Please take pqr medication.');
                }
                if (allergy) {
                    //show in form to check medications accordingly
                    consultation.push("Please check with the doctors for your allergies.")
                }
                if (abusive) {
                    //visit date sooner
                    consultation.push("Please visit often. Make sure you visit more than once a trimester.")
                }
            }
        } else {
            if (sickPerson === "child") {
                if (!vaccine1) {
                    consultation.push('Please take Abc vaccine.');
                }
                if (!vaccine2) {
                    consultation.push('Please take Xyz vaccine.');
                }
                if (!medication1) {
                    consultation.push('Please take def medication.');
                }
                if (!medication2) {
                    consultation.push('Please take pqr medication.');
                }
                if (allergy) {
                    //show in form to check medications accordingly
                    consultation.push("Please check with the doctors for your allergies.")
                }
                if (abusive) {
                    //visit date sooner
                    consultation.push("Please visit often. Make sure you visit more than once a trimester.")
                }
            } else if (sickPerson === "mother") {
                if (!vaccine1) {
                    consultation.push('Please take Abc vaccine.');
                }
                if (!vaccine2) {
                    consultation.push('Please take Xyz vaccine.');
                }
                if (!medication1) {
                    consultation.push('Please take def medication.');
                }
                if (!medication2) {
                    consultation.push('Please take pqr medication.');
                }
                if (allergy) {
                    //show in form to check medications accordingly
                    consultation.push("Please check with the doctors for your allergies.")
                }
                if (abusive) {
                    //visit date sooner
                    consultation.push("Please visit often. Make sure you visit more than once a trimester.")
                }
            }
        }
    };

    res.json({"consultation":consultation})
        .catch((err) => {
            console.log(err);
            res.json({"error":"Internal Server Error"})
        })

}

module.exports = consultation;