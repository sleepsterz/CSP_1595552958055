--
-- Database: `csp_db`
--

CREATE DATABASE IF NOT EXISTS `csp_db`;
USE `csp_db`;


-- ENTITIES

--
-- Struttura della tabella `customeraddress`
--

CREATE TABLE IF NOT EXISTS `customeraddress` (
	`city` varchar(130)  NOT NULL,
	`state` varchar(130)  NOT NULL,
	`street1` varchar(130)  NOT NULL,
	`street2` varchar(130) ,
	`zip` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `customergroup`
--

CREATE TABLE IF NOT EXISTS `customergroup` (
	`GroupName` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `customers`
--

CREATE TABLE IF NOT EXISTS `customers` (
	`active` bool ,
	`cellPhone` varchar(130) ,
	`email` varchar(130) ,
	`fax` varchar(130) ,
	`name` varchar(130)  NOT NULL,
	`phone` varchar(130) ,
	`taxable` bool ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`mail` varchar(130) ,
	`name` varchar(130) ,
	`password` varchar(130)  NOT NULL,
	`roles` varchar(130) ,
	`surname` varchar(130) ,
	`username` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

ALTER TABLE `user` MODIFY COLUMN `password` varchar(128)  NOT NULL;

INSERT INTO `csp_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `csp_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);


--
-- Struttura della tabella `lu_addresstype`
--

CREATE TABLE IF NOT EXISTS `lu_addresstype` (
	`type` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `lu_employees`
--

CREATE TABLE IF NOT EXISTS `lu_employees` (
	`name` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





-- relation 1:m addresstypeID CustomerAddress - lu_AddressType
ALTER TABLE `customeraddress` ADD COLUMN `addresstypeID` int(11)  REFERENCES lu_addresstype(_id);

-- relation 1:m customerGroupID Customers - CustomerGroup
ALTER TABLE `customers` ADD COLUMN `customerGroupID` int(11)  REFERENCES customergroup(_id);

-- relation 1:m employeeID Customers - lu_Employees
ALTER TABLE `customers` ADD COLUMN `employeeID` int(11)  REFERENCES lu_employees(_id);


