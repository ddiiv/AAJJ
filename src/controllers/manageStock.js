import ManageStockService from "../services/manageStock-services.js";
import StockService from "../services/stock-services.js";

export const insert = async (res, req) => {
    let rowsAffected = 0;
    try {
        let managestock = req.body;
        await new ManageStockService().insert(managestock), StockService().update(managestock.quantity, managestock.idStock);

        res.status(200).send("Correct Insert");
    } catch (error) {
        res.status(400).send(error)
    }
}