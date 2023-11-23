import config from '../../db-config.js';
import sql from 'mssql';

class CartItemService {
    getCartByIdUser = async (id) => {
        let returnArray = null;
        console.log('Estoy en: CartItemService.getAll()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query(`
                    SELECT C.IdCartItem, C.IdStock, C.Quantity AS QuantityCart, Title, Image, Price, St.Quantity AS QuantityStock, Size, Enabled
                    FROM CartItem C
                    INNER JOIN Stock St
                    ON St.IdStock = C.IdStock
                    INNER JOIN Size Si
                    ON St.IdSize = Si.IdSize
                    INNER JOIN Product P
                    ON St.IdProduct = P.IdProduct
                    INNER JOIN ImageProduct I
                    ON P.IdProduct = I.IdProduct
                    WHERE C.IdUser = @pId
                `);
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }

    insert = async (cartItem) => {
        let rowsAffected = 0;
        console.log('Estoy en: CartItemService.insert(cartItem)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pIdUser', sql.Int , cartItem?.IdUser)
                .input('pIdStock', sql.Int , cartItem?.IdStock)
                .input('pQuantity', sql.Int , cartItem?.Quantity)
                .query(`
                    INSERT INTO CartItem (IdUser, IdStock, Quantity)
                    VALUES (@pIdUser, @pIdStock, @pQuantity)
                `);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    update = async (cartItem) => {
        let rowsAffected = 0;
        console.log('Estoy en: CartItemService.update(cartItem)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pQuantity', sql.Int , cartItem.Quantity)
                .input('pId', sql.Int , cartItem.IdCartItem)
                .query(`
                    UPDATE CartItem SET
                        Quantity = @pQuantity
                    WHERE IdCartItem = @pId
                `);
            rowsAffected = result.rowsAffected; 
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    deleteById = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: CartItemService.deleteById(id)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, id)
                                .query(`
                                    DELETE FROM CartItem
                                    WHERE IdCartItem = @pId
                                `);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default CartItemService;