import {Student} from "../modules/Student.js";

export default async (req, res) => {
    let min = req.query.min
    let max = req.query.max
    let sub = req.query.sub
    let data
    let searched = false

    if (min === undefined) {
        min = ""
    }

    if (max === undefined) {
        max = ""
    }

    if (sub === undefined) {
        sub = ""
    }

    if (min === "" && max === "" && sub === "") {
        data = await Student.find({})
    } else {
        searched = true
        if (min === "") min = 0
        if (max === "") max = 10
        data = await Student.find({
            $or: [
                {name: {$regex: sub}},
                {surname: {$regex: sub}}
            ],
            $and: [
                {media: {$gte: min}},
                {media: {$lte: max}}
            ]
        })
    }

    res.render('index', {data, min, max, sub, searched})
}