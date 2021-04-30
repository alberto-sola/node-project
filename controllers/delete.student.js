import {Student} from "../modules/Student.js";

export default async (req, res) => {
    await Student.findByIdAndDelete(req.params.id)
    res.redirect('/')
}