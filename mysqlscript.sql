CREATE SCHEMA `persontable` ;


CREATE TABLE `persontable`.`personinfo` (
  `personinfoid` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `phone` VARCHAR(12) NULL,
  `address` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  PRIMARY KEY (`personinfoid`),
  UNIQUE INDEX `personinfoid_UNIQUE` (`personinfoid` ASC));
  
  
INSERT INTO `persontable`.`personinfo` (`firstname`, `lastname`, `phone`, `address`, `email`) VALUES ('Barack', 'Obama', '2022021349', '1600 Pennsyvlania Ave NW', 'barackobama@whitehouse.gov');
INSERT INTO `persontable`.`personinfo` (`firstname`, `lastname`, `phone`, `address`, `email`) VALUES ('Jasmeet', 'Nat', '3013774604', '3001 Skyway Cir N', 'jasmsnat@gmail.com');
INSERT INTO `persontable`.`personinfo` (`firstname`, `lastname`, `phone`, `address`, `email`) VALUES ('Michael', 'Jordan', '1234567890', '303 Chicago Drive', 'mikejord@gmail.com');
INSERT INTO `persontable`.`personinfo` (`firstname`, `lastname`, `phone`, `address`, `email`) VALUES ('Harry', 'Potter', '9094561239', 'Hogwarts', 'hp1@gmail.com');
INSERT INTO `persontable`.`personinfo` (`firstname`, `lastname`, `phone`, `address`, `email`) VALUES ('Hilary', 'Clinton', '2022488888', '1600 Pennsylvania Ave NW', 'hrclinton@gmail.com');


CREATE TABLE `persontable`.`account` (
  `accountid` INT NOT NULL AUTO_INCREMENT,
  `personid` INT NOT NULL,
  `savingaccount` VARCHAR(45) NULL,
  `checkingaccount` VARCHAR(45) NULL,
  `accountnumber` VARCHAR(45) NULL,
  UNIQUE INDEX `accountid_UNIQUE` (`accountid` ASC),
  PRIMARY KEY (`accountid`),
  INDEX `personid_idx` (`personid` ASC),
  CONSTRAINT `personid`
    FOREIGN KEY (`personid`)
    REFERENCES `persontable`.`personinfo` (`personinfoid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


DELETE FROM `persontable`.`account` WHERE `accountid`='1';
INSERT INTO `persontable`.`account` (`personid`, `savingaccount`, `checkingaccount`, `accountnumber`) VALUES ('3', '30000', '3500', '33433433');
INSERT INTO `persontable`.`account` (`personid`, `savingaccount`, `checkingaccount`, `accountnumber`) VALUES ('4', '40000', '4500', '44444444');
INSERT INTO `persontable`.`account` (`personid`, `savingaccount`, `checkingaccount`, `accountnumber`) VALUES ('5', '50000', '5500', '55055055');
INSERT INTO `persontable`.`account` (`personid`, `savingaccount`, `checkingaccount`, `accountnumber`) VALUES ('1', '10000', '1500', '10101010');
INSERT INTO `persontable`.`account` (`personid`, `savingaccount`, `checkingaccount`, `accountnumber`) VALUES ('2', '20000', '2500', '22202020');
