import config from '../../db-config.js';
import sql from 'mssql';

class DiscountProductService {
    getAll = async () => {
        let returnArray = null;
        console.log('Estoy en: DiscountProductService.getAll()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query(`SELECT * FROM DiscountProduct`);
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    getByIdProduct = async (id) => {
        let returnArray = null;
        console.log('Estoy en: DiscountCodeService.getByIdProduct(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query(`
                    SELECT  Si.size, S.quantity
                    FROM DiscountCode AS D
                    INNER JOIN Product AS P
                    ON S.IdProduct = P.IdProduct
                    WHERE P.IdProduct = @Id
                `);
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
                .input('pId', sql.Int , category?.idCategory)
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
