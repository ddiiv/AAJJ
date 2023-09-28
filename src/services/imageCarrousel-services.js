import config from '../../db-config.js';
import sql from 'mssql';

class ImageCarrouselService {
    getAll = async () => {
        let returnArray = null;
        console.log('Estoy en: ImageCarrouselService.getAll()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query(`SELECT * FROM ImageCarrousel`);
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    update = async (imageCarrousel) => {
        let rowsAffected = 0;
        console.log('Estoy en: ImageCarrouselService.update(imageCarrousel)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pImageCarrousel', sql.NChar , imageCarrousel?.imageCarrousel)
                .input('pImage', sql.NChar , imageCarrousel?.image)
                .query(`
                    UPDATE ImageCarrousel SET 
                        ImageCarrousel = @pImageCarrousel, 
                        Image = @pImage
                    WHERE Id=@pId`
                );
            rowsAffected = result.rowsAffected; 
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default ImageCarrouselService;