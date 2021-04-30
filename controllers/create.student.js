import {Student} from "../models/Student.js";

export default async (req, res) => {
    await Student.create({name: req.body.name, surname: req.body.surname, media: req.body.media})
    res.redirect('/')
}