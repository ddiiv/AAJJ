import config from '../../db-config.js';
import sql from 'mssql';

class EmployeeService{

    getAll = async () => {
        let returnArray = null;
        console.log('Estoy en: EmployeeService.getAll()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query(`SELECT * FROM Employee`);
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    getById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: EmployeeService.getById(id)');
        try{
            let pool = await sql.Connect(config);
            let result = await pool.request()
            .input('pId', sql.Int, id)
            .query('SELECT * FROM Employee WHERE id = @pId')
            returnEntity = result.recordsets[0][0];
        }catch(error){
            console.log(error)
        }
        return returnEntity;
    }
    deleteById = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: EmployeeService.deleteById(id)');
        try{
            let pool = await sql.Connect(config);
            let result = await pool.request()
            .input('pId', sql.Int, id)
            .query('DELETE FROM Employee WHERE id = @pId')
            rowsAffected = result.rowsAffected
        }catch(error){
            console.log(error)
        }
        return rowsAffected;
    }
    
}
export default EmployeeService;