import FooterService from "../services/footer-services.js";

export const getAll = async(req, res) =>{
    res.send(await new FooterService().getAll())
}

//export const update = async(req,res) =>{
//    res.send(JSON.stringify(await new ImageCarrouselService().getById(req.params.id)))
//}