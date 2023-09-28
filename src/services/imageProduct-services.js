import config from '../../db-config.js';
import sql from 'mssql';

class ImageProductService {
    getByIdProduct = async (id) => {
        let returnArray = null;
        console.log('Estoy en: getByIdProduct.getAll(id)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query(`
                    SELECT * FROM IdProduct
                    WHERE 
                `);
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    insert = async (idProduct, image) => {
        let rowsAffected = 0;
        console.log('Estoy en: ImageProductService.insert(idProduct, image)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pCategory', sql.NChar , idProduct)
                .input('pImage', sql.NChar , image)
                .query(`
                    INSERT INTO ImageProduct (IdProduct, image) 
                    VALUES (@pIdProduct, @pImage)
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
                .input('pCategory', sql.NChar , category?.category ?? '')
                .input('pImage', sql.NChar , category?.image ?? '')
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

export default ImageProductService;