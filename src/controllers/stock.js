import StockService from "../services/stock-services.js"

export const getAll = async(req,res) =>{
    res.send(JSON.stringify(await new StockService().getAll()))
}

export const getById = async(req,res) =>{
    res.send(JSON.stringify(await new StockService().getById(req.params.id)))
}