USE [master]
GO

IF NOT EXISTS (SELECT * FROM sys.server_principals WHERE [name] = N'ArgentinosJuniors')
BEGIN
	PRINT 'Creando Login'
	CREATE LOGIN [ArgentinosJuniors] WITH 
		PASSWORD = N'El_Semillero_Del_Mundo', 
		DEFAULT_DATABASE = [db_aajj], 
		CHECK_EXPIRATION = OFF, 
		CHECK_POLICY = OFF
END
GO

USE [db_aajj]
IF NOT EXISTS (SELECT * FROM sys.database_principals WHERE [name] = N'ArgentinosJuniors')
BEGIN
	PRINT 'Creando User'
	CREATE USER [ArgentinosJuniors] FOR LOGIN [ArgentinosJuniors]
	ALTER ROLE [db_owner] ADD MEMBER [ArgentinosJuniors]
END 
GO