import config from '../../db-config.js';
import sql from 'mssql';

class StockService {
    getByIdProduct = async (id) => {
        let returnArray = null;
        console.log('Estoy en: StockService.getByIdProduct(id)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query(`
                    SELECT  S.IdStock, Si.size, S.quantity
                    FROM Stock AS S
                    INNER JOIN Product AS P
                    ON S.IdProduct = P.IdProduct
                    INNER JOIN Size AS Si
                    ON Si.IdSize = S.IdSize
                    WHERE P.IdProduct = @pId
                `);
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    insert = async (id, size) => {
        let rowsAffected = 0;
        console.log('Estoy en: StockService.insert(id, size)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pIdProduct', sql.Int , id)
                .input('pIdSize', sql.NChar , size?.idSize)
                .query(`
                    INSERT INTO Stock (IdProduct, IdSize, Quantity) 
                    VALUES (@pIdProduct, @pIdSize, 0)
                `);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    update = async (quantity, idStock) => {
        let rowsAffected = 0;
        console.log('Estoy en: StockService.update(quantity, id)');
        console.log(idStock, quantity)
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pQuantity', sql.Int , quantity)
                .input('pId', sql.Int , idStock)
                .query(`
                    UPDATE Stock SET 
                        Quantity += @pQuantity
                    WHERE IdStock=@pId`
                );
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    delete = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: StockService.deleteById(id)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, id)
                                .query(`
                                    DELETE FROM Stock
                                    WHERE id = @pId
                                `);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default StockService;