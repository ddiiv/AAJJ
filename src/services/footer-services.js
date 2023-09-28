import config from '../../db-config.js';
import sql from 'mssql';

class FooterService {
    getAll = async () => {
        let returnArray = null;
        console.log('Estoy en: FooterService.getAll()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query(`SELECT * FROM Footer`);
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    update = async (footer) => {
        let rowsAffected = 0;
        console.log('Estoy en: FooterService.update(footer)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pFooter', sql.NChar , footer?.footer)
                .input('pImage', sql.NChar , footer?.image)
                .query(`
                    UPDATE Footer SET 
                        Footer = @pFooter, 
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

export default FooterService;