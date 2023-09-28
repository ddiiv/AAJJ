import config from '../../db-config.js';
import sql from 'mssql';

class ManageStockService {
    getAll = async () => {
        let returnArray = null;
        console.log('Estoy en: ReasonService.getAll()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query(`SELECT * FROM Reason`);
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    insert = async (manage) => {
        let rowsAffected = 0;
        console.log('Estoy en: ManageStockService.insert(manage)');
        try { 
            console.log(manage);
            let pool = await sql.connect(config);
            let result = await pool.request()
        
                .input('pIdEmployee', sql.Int , manage?.idEmployee)
                .input('pIdStock', sql.Int , manage?.idStock)
                .input('pIdReason', sql.Int , manage?.idReason)
                .input('pDate', sql.Date , manage?.date)
                .input('pQuantity', sql.Int , manage?.quantity)
                .input('pDescription', sql.NChar , manage?.description)
                .query(`
                    INSERT INTO ManageStock (IdEmployee, IdStock, IdReason, Date, Quantity, Description) 
                    VALUES (@pIdEmployee, @pIdStock, @pIdReason, @pDate, @pQuantity, @pDescription)
                `);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default ManageStockService;