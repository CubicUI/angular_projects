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
