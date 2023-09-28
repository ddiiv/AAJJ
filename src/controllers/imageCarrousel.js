import ImageCarrouselService from "../services/imageCarrousel-services.js";

export const getAll = async(req,res) =>{
    res.send(JSON.stringify(await new ImageCarrouselService().getAll()))
}

//export const update = async(req,res) =>{
//    res.send(JSON.stringify(await new ImageCarrouselService().getById(req.params.id)))
//}