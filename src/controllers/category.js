import CategoryService from "../services/category-services.js";

export const getAll = async(req,res) =>{
    res.send(JSON.stringify(await new CategoryService().getAll()))
}

export const getById = async(req,res) =>{
    res.send(JSON.stringify(await new CategoryService().getById(req.params.id)))
}