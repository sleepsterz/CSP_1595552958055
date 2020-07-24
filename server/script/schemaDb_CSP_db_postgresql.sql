--
-- Database: csp_db
--

CREATE DATABASE csp_db;

-- ENTITIES

--
-- Schema entity customeraddress
--

CREATE TABLE IF NOT EXISTS "customeraddress" (
	city varchar(130)  NOT NULL,
	state varchar(130)  NOT NULL,
	street1 varchar(130)  NOT NULL,
	street2 varchar(130) ,
	zip varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity customergroup
--

CREATE TABLE IF NOT EXISTS "customergroup" (
	GroupName varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity customers
--

CREATE TABLE IF NOT EXISTS "customers" (
	active bool ,
	cellPhone varchar(130) ,
	email varchar(130) ,
	fax varchar(130) ,
	name varchar(130)  NOT NULL,
	phone varchar(130) ,
	taxable bool ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity user
--

CREATE TABLE IF NOT EXISTS "user" (
	mail varchar(130) ,
	name varchar(130) ,
	password varchar(130)  NOT NULL,
	roles varchar(130) ,
	surname varchar(130) ,
	username varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);


-- Security

ALTER TABLE "user" ALTER COLUMN "password" TYPE varchar(128);

INSERT INTO "user" (username, password, _id) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS "roles" (
	role varchar(30) ,
	
	-- RELAZIONI

	_user INTEGER  NOT NULL REFERENCES "user"(_id),
	_id SERIAL PRIMARY KEY 

);
INSERT INTO "roles" (role, _user, _id) VALUES ('ADMIN', '1', 1);

--
-- Schema entity lu_addresstype
--

CREATE TABLE IF NOT EXISTS "lu_addresstype" (
	type varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity lu_employees
--

CREATE TABLE IF NOT EXISTS "lu_employees" (
	name varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);




-- relation 1:m addresstypeID CustomerAddress - lu_AddressType
ALTER TABLE customeraddress ADD COLUMN addresstypeID INTEGER  REFERENCES "lu_addresstype"(_id);

-- relation 1:m customerGroupID Customers - CustomerGroup
ALTER TABLE customers ADD COLUMN customerGroupID INTEGER  REFERENCES "customergroup"(_id);

-- relation 1:m employeeID Customers - lu_Employees
ALTER TABLE customers ADD COLUMN employeeID INTEGER  REFERENCES "lu_employees"(_id);
