import config from '../../db-config.js';
import sql from 'mssql';

class SubCategoryService {
    getAll = async () => {
        let returnArray = null;
        console.log('Estoy en: SubCategoryService.getAll()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query(`SELECT * FROM SubCategory`);
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }

    insert = async (subCategory) => {
        let rowsAffected = 0;
        console.log('Estoy en: CategoryService.insert(subCategory)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pCategory', sql.NChar , subCategory?.subCategory ?? '')
                .query(`
                    INSERT INTO SubCategory (SubCategory) 
                    VALUES (@pCategory)
                `);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    update = async (subCategory, id) => {
        let rowsAffected = 0;
        console.log('Estoy en: CategoryService.update(category)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pCategory', sql.NChar , subCcategory?.subCategory)
                .input('pId', sql.Int , id)
                .query(`
                    UPDATE SubCategory SET 
                        SubCategory = @pSubCategory, 
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

export default SubCategoryService;