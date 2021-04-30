import {Student} from "../models/Student.js";

export default async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, {name: req.body.name, surname: req.body.surname, media: req.body.media}, {useFindAndModify: false})
    res.redirect('/')
}