import config from '../../db-config.js';
import sql from 'mssql';

class ProductxOrderService {
    getAll = async () => {
        let returnArray = null;
        console.log('Estoy en: ProductxOrderService.getAll()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query(`SELECT * FROM ProductxOrder`);
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    delete = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: ProductxOrderService.deleteById(id)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, id)
                                .query(`
                                    DELETE FROM ProductxOrder 
                                    WHERE id = @pId
                                `);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default ProductxOrderService;