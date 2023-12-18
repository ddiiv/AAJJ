import OrderService from "../services/order-services.js";

export const insert = async (res, req) => {
    let rowsAffected = 0;
    try {
        let { products } = req.body;
        let { order } = req.body;
        await new OrderService().insert(order, products);
        res.status(200).send("Correct Insert");
    } catch (error) {
        res.status(400).send(error)
    }
}