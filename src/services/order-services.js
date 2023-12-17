import { now } from 'moment';
import config from '../../db-config.js';
import sql from 'mssql';

class OrderService {
    /*getAll = async () => {
        let returnArray = null;
        console.log('Estoy en: OrderService.getAll()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query(`SELECT * FROM Order`);
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }*/
    insert = async (order, products, quantity) => {
        let rowsAffected = 0;
        console.log('Estoy en: OrderService.insert(order)');
        try {
            let pool = await sql.connect(config);
            let result1 = await pool.request()
                .input('pIdUser', sql.Int , order?.idUser)
                .input('pStatus', sql.NChar , order?.status)
                .input('pDateOrdered', sql.Date , new Date())
                .input('pComments', sql.NChar , order?.comments ?? null)
                .input('pPaymentMethod', sql.NChar , order?.paymentMethod)
                .query(`
                    INSERT INTO Order (IdUser, Status, DateOrdered, Comments, PaymentMethod) 
                    VALUES (@pIdUser, @pStatus, @pDateOrdered, @pComments, @pPaymentMethod)
                    SELECT TOP(1) IdOrder
                    FROM ORDER
                    ORDER BY IdProduct DESC
                    `);
            let idOrder = result1.recordsets[0][0].IdOrder;
            rowsAffected = result1.rowsAffected;

            products.forEach(element = async() => {
                let result2 = await pool.request()
                .input('pIdOrder', sql.Int , idOrder)
                .input('pIdProduct', sql.Int , element?.idProduct)
                .input('pQuantity', sql.Int , element?.quantity)
                .query(`
                    INSERT INTO ProductxOrder Order (IdOrder, IdProduct, Quantity) 
                    VALUES (@pIdOrder, @pIdProduct, @pQuantity)
                `);
                rowsAffected += result2.rowsAffected;
            });
            
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    /*update = async (order) => {
        let rowsAffected = 0;
        console.log('Estoy en: OrderService.update(order)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pOrder', sql.NChar , order?.order)
                .input('pImage', sql.NChar , order?.image)
                .query(`
                    UPDATE Order SET 
                        Order = @pOrder, 
                        Image = @pImage
                    WHERE Id=@pId`
                );
            rowsAffected = result.rowsAffected; 
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }*/
    /*delete = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: OrderService.deleteById(id)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, id)
                                .query(`
                                    DELETE FROM Order 
                                    WHERE id = @pId
                                `);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }*/
}

export default OrderService;