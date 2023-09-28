import config from '../../db-config.js';
import sql from 'mssql';

class SizeServices {
    getAll = async () => {
        let returnArray = null;
        console.log('Estoy en: SizeServices.getAll()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query(`SELECT * FROM Size`);
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    getByIdProduct = async (id) => {
        let returnArray = null;

        console.log('Estoy en: SizeServices.getByIdProduct(id)' , id);
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int , id)
                .query(`
                    SELECT Si.size, St.Quantity, Si.IdSize, St.IdStock
                    FROM Stock St
                    INNER JOIN Size Si
                    ON Si.IdSize = St.IdSize
                    WHERE St.IdProduct = @pId
                `);
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    insert = async (size) => {
        let rowsAffected = 0;
        console.log('Estoy en: SizeServices.insert(size)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pSize', sql.NChar , size?.size ?? '')
                .query(`
                    INSERT INTO Size (Size) 
                    VALUES (@pSize)
                `);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    update = async (size) => {
        let rowsAffected = 0;
        console.log('Estoy en: SizeServices.update(size)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pSize', sql.NChar , size?.size ?? '')
                .query(`
                    UPDATE Size SET 
                        Size = @pSize
                    WHERE Id=@pId`
                );
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    delete = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: SizeServices.deleteById(id)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query(`
                    DELETE FROM Size
                    WHERE id = @pId
                `);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default SizeServices;