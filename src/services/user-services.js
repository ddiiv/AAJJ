import config from '../../db-config.js';
import sql from 'mssql';

class UserService {
    postAll = async () => {
        let returnArray = null;
        console.log('Estoy en: UserService.getAll()');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request().query(`SELECT * FROM User`);
            returnArray = result.recordsets[0];
        }
        catch (error) {
            console.log(error);
        }
        return returnArray;
    }
    postById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: UserService.postById(id)');
        console.log(id)
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query(`
                    SELECT *
                    FROM User
                    WHERE IdUser = @pId
                `);
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    insert = async (user) => {
        let rowsAffected = 0;
        console.log('Estoy en: UserService.insert(user)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pUser', sql.NChar , user?.user)
                .input('pImage', sql.NChar , user?.image)
                .query(`
                    INSERT INTO User (User, Image) 
                    VALUES (@pUser, @pImage)
                `);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
    update = async (user) => {
        let rowsAffected = 0;
        console.log('Estoy en: UserService.update(user)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pUser', sql.NChar , user?.user)
                .input('pImage', sql.NChar , user?.image)
                .query(`
                    UPDATE User SET 
                        User = @pUser, 
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
        console.log('Estoy en: UserService.deleteById(id)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                .input('pId', sql.Int, id)
                                .query(`
                                    DELETE FROM User 
                                    WHERE id = @pId
                                `);
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}

export default UserService;