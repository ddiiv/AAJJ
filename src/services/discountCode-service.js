import config from '../../db-config.js';
import sql from 'mssql';

class DiscountCodeService {
    getAll = async () => {
        let returnArray = null;
        console.log('Estoy en: DiscountCodeService.getAll()');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request().query(`SELECT * FROM DiscountCode`);
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    getById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: DiscountCodeService.getById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query(`
                    SELECT * 
                    FROM DiscountCode
                    WHERE IdDiscountCode = @pId
                `);
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    insert = async (discountCode) => {
        let rowsAffected = 0;
        console.log('Estoy en: DiscountCodeService.insert(code)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pIdEmployee', sql.Int, discountCode?.idEmployee)
                .input('pCode', sql.NChar, discountCode?.code)
                .input('pDateCreaton', sql.Date, new Date().now)
                .input('pDateExpiration', sql.Date, discountCode?.dateExpiration)
                .query(`
                    INSERT INTO DiscountCode (IdEmployee, Code, DateCreaton, DateExpiration) 
                    VALUES (@pIdEmployee, @pCode, @pDateCreaton, @pDateExpiration)
                `);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    update = async (discountCode) => {
        let rowsAffected = 0;
        console.log('Estoy en: DiscountCodeService.update(discountCode)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pIdEmployee', sql.Int, discountCode?.idEmployee)
                .input('pCode', sql.NChar, discountCode?.code)
                .input('pDateExpiration', sql.Date, discountCode?.dateExpiration)
                .query(`
                    UPDATE DiscountCode SET 
                        IdEmployee = @pIdEmployee
                        Code = @pCode, 
                        DateExpiration = @pDateExpiration
                    WHERE Id=@pId
                `);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    delete = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: DiscountCodeService.deleteById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query(`
                    DELETE FROM DiscountCode 
                    WHERE id = @pId
                `);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default DiscountCodeService;