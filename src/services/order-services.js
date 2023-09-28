import config from '../../db-config.js';
import sql from 'mssql';

class CategoryService {
    getAll = async () => {
        let returnArray = null;
        console.log('Estoy en: CategoryService.getAll()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query(`SELECT * FROM Category`);
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    insert = async (category) => {
        let rowsAffected = 0;
        console.log('Estoy en: CategoryService.insert(category)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pCategory', sql.NChar , category?.category)
                .input('pImage', sql.NChar , category?.image)
                .query(`
                    INSERT INTO Category (Category, Image) 
                    VALUES (@pCategory, @pImage)
                `);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    update = async (category) => {
        let rowsAffected = 0;
        console.log('Estoy en: CategoryService.update(category)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pCategory', sql.NChar , category?.category)
                .input('pImage', sql.NChar , category?.image)
                .query(`
                    UPDATE Category SET 
                        Category = @pCategory, 
                        Image = @pImage
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
        console.log('Estoy en: CategoryService.deleteById(id)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, id)
                                .query(`
                                    DELETE FROM Category 
                                    WHERE id = @pId
                                `);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default CategoryService;