import config from '../../db-config.js';
import sql from 'mssql';

class ProductService {
    getAll = async () => {
        let returnArray = null;
        console.log('Estoy en: ProductService.getAll()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query(`
                SELECT P.idProduct, C.Category, S.SubCategory, I.Image, P.Title, P.Price, P.Description, P.Enabled, P.Material
                FROM Product AS P
                INNER JOIN Category AS C
                ON C.IdCategory = P.IdCategory
                INNER JOIN SubCategory AS S
                ON S.IdSubCategory = P.IdSubCategory
                INNER JOIN ImageProduct AS I 
                ON I.idProduct = P.idProduct
            `);
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }

    getHighlights = async () => {
        let returnArray = null;
        
        console.log('Estoy en: ProductService.getHighlights()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query(`
            SELECT TOP 12 P.idProduct, C.Category, S.SubCategory, I.Image, P.Title, P.Price, P.Description, P.Enabled, P.Material
            FROM Product P
            INNER JOIN Category AS C
                ON C.IdCategory = P.IdCategory
            INNER JOIN SubCategory AS S
                ON S.IdSubCategory = P.IdSubCategory
            INNER JOIN ImageProduct AS I 
                ON I.idProduct = P.idProduct
            ORDER BY idProduct DESC;
            `);
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
            console.log(returnArray);

        }
        return returnArray;
    }

    getById = async (id) => {
        let returnEntity = null;
        
        console.log('Estoy en: ProductService.getById(id)');
        console.log(id)
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query(`
                    SELECT P.IdProduct, C.Category, S.SubCategory, I.Image P.Title, P.Price, P.Description, P.Enabled, P.Material
                    FROM Product AS P
                    INNER JOIN Category AS C
                    ON C.IdCategory = P.IdCategory
                    INNER JOIN SubCategory AS S
                    ON S.IdSubCategory = P.IdSubCategory
                    INNER JOIN ImageProduct AS I 
                    ON I.idProduct = P.idProduct
                    WHERE P.IdProduct = @pId
                `);
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    getByIdCategory = async (id) => {
        let returnArray = null;
        console.log('Estoy en: ProductService.getByCategory(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query(`
                    SELECT P.idProduct, C.Category, S.SubCategory, I.Image, P.Title, P.Price, P.Description, P.Enabled, P.Material
                    FROM Product AS P
                    INNER JOIN Category AS C
                    ON C.IdCategory = P.IdCategory
                    INNER JOIN SubCategory AS S
                    ON S.IdSubCategory = P.IdSubCategory
                    INNER JOIN ImageProduct AS I 
                    ON I.idProduct = P.idProduct
                    WHERE C.IdCategory = @pId
                `);
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }

    insert = async (product) => {
        let rowsAffected = 0;
        console.log('Estoy en: ProductServices.insert(product)');
        
        try {
            
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pIdCategory', sql.Int, product?.idCategory)
                .input('pIdSubCategory', sql.Int, product?.idSubCategory)
                .input('pTitle', sql.NChar, product?.title)
                .input('pPrice', sql.Int, product?.price)
                .input('pDescription', sql.NChar , product?.description)
                .input('pEnabled', sql.Bit, product?.enabled)
                .input('pMaterial', sql.NChar , product?.material)
                .query(`
                    INSERT INTO Product
                    (IdCategory, IdSubCategory, Title, Price, Description, Enabled, Material) 
                    VALUES 
                    (@pIdCategory, @pIdSubCategory, @pTitle, @pPrice, @pDescription, @pEnabled, @pMaterial)
                `);
                console.log(product)
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
            throw new Error("")
        }
        
        return rowsAffected;
    }

    update = async (product) => {
        let rowsAffected = 0;
        console.log('Estoy en: ProductServices.update(product)');

        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, product?.idProduct)
                .input('pIdCategory', sql.Int, category?.idCategory)
                .input('pIdSubCategory', sql.Int, subCategory?.idSubCategory)
                .input('pTitle', sql.NChar, product?.title)
                .input('pPrice', sql.Int, product?.price)
                .input('pDescripcion', sql.NChar , product?.descripcion)
                .input('pEnabled', sql.Bit, product?.enabled)
                .input('pMaterial', sql.NChar , product?.material)
                .query(`
                    UPDATE Product SET 
                    IdCategory = @pIdCategory, 
                    IdSubCategory = @pIdSubCategory, 
                    Title = @pTitle, 
                    Price = @pPrice, 
                    Description = @pDescription, 
                    Enabled = @pEnabled, 
                    Material = @pMaterial
                    WHERE Id=@pId`);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    
    deleteById = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: ProductService.deleteById(id)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query(`
                    DELETE FROM Product WHERE id = @pId
                    DELETE FROM Stock WHERE id = @pId
                `);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default ProductService;

