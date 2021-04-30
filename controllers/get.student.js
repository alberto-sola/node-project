import {Student} from "../models/Student.js";

export default async (req, res) => {
    let student = await Student.findById(req.params.id)
    res.render('detail', {student})
}