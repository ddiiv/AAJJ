import { __dirname } from "../../index.js";

export const getImg = async(req, res) => {
    console.log("estoy en images", __dirname);
    res.sendFile(`${__dirname}/public/images/${req.params.img}`, (err) => {
         res.sendFile(`${__dirname}/public/error.jpg`);
         console.error(err);
    })

}