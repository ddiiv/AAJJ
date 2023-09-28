import SizeService from "../services/size-services.js"

export const getAll = async(req,res) =>{
    res.send(JSON.stringify(await new SizeService().getAll()))
}

export const getById = async(req,res) =>{
    res.send(JSON.stringify(await new SizeService().getById(req.params.id)))
}
export const getByIdProduct = async(req,res) =>{
    res.send(JSON.stringify(await new SizeService().getByIdProduct(req.params.id)))
}