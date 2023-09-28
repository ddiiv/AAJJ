import SubCategoryService from "../services/subCategory-services.js"

export const getAll = async(req,res) =>{
    res.send(JSON.stringify(await new SubCategoryService().getAll()))
}

export const getById = async(req,res) =>{
    res.send(JSON.stringify(await new SubCategoryService().getById(req.params.id)))
}