import ReasonService from "../services/reason-services.js";

export const getAll = async(req, res) =>{
    res.send(JSON.stringify(await new ReasonService().getAll()))
}