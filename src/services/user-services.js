import config from '../../db-config.js';
import sql from 'mssql';

class UserService {
    postAll = async () => {
        let returnArray = null;
        console.log('Estoy en: UserService.getAll()');
        try {
            let pool = await sql.connect(config);
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
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query(`
                    SELECT *
                    FROM [User]
                    WHERE IdUser = @pId
                `);
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    login = async (user, password) => {
        let returnEntity = null;
        console.log('Estoy en: UserService.login(user, password)');
        
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pUser', sql.NChar, user)
                .input('pPassword', sql.NChar, password)
                .query(`
                    SELECT *
                    FROM [User]
                    WHERE CONVERT(NVARCHAR(MAX), [User]) = @pUser AND CONVERT(NVARCHAR(MAX), [Password]) = @pPassword;
                `);
            if (result.recordset.length > 0) {
                returnEntity = result.recordsets[0][0];
            }
        } catch (error) {
            console.log(error);
            throw new Error('Database error');
        }
        return returnEntity;
    }
    register = async (user) => {
        let rowsAffected = 0;
        console.log('Estoy en: UserService.register(user)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pUser', sql.NChar, user?.user)
                .input('pPassword', sql.NChar, user?.password)
                .input('pDateCreation', sql.Date, new Date())
                .input('pEmail', sql.NChar, user?.email)
                .input('pMembershipNumber', sql.NChar, user?.membershipNumber ?? null)
                .input('pDni', sql.Int, user?.dni ?? null)
                .input('pDateOfBirth', sql.Date, user?.dateOfBirth ?? null)
                .input('pPhoneNumber', sql.NChar, user?.phoneNumber ?? null)
                .query(`
                    INSERT INTO [User] ([User], [Password], DateCreation, Email, MembershipNumber, Dni, DateOfBirth, PhoneNumber) 
                    VALUES (@pUser, @pPassword, @pDateCreation, @pEmail, @pMembershipNumber, @pDni, @pDateOfBirth, @pPhoneNumber)
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
                .input('pUser', sql.NChar, user?.user)
                .input('pPassword', sql.NChar, user?.password)
                .input('pDateCreation', sql.Date, user?.dateCreation)
                .input('pEmail', sql.NChar, user?.email)
                .input('pMembershipNumber', sql.Int, user?.membershipNumber)
                .input('pDni', sql.Int, user?.dni)
                .input('pDateOfBirth', sql.Date, user?.dateOfBirth)
                .input('pPhonenumber', sql.NChar, user?.phoneNumber)
                .query(`
                    UPDATE [User] SET 
                        [User] = @pUser,
                        [Password] = @pPassword,
                        DateCreation = @pDateCreation,
                        Email = @pEmail,
                        MembershipNumber = @pMembershipNumber,
                        Dni = @pDni,
                        DateOfBirth = @pDateOfBirth,
                        Phonenumber = @pPhonenumber
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
            let pool = await sql.connect(config);
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