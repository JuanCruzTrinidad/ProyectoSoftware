INSERT INTO `deporteonline`.`category` (`id_category`, `name`, `name_google`) VALUES ('1', 'Sport', 'sport');
INSERT INTO `deporteonline`.`category` (`id_category`, `name`, `name_google`) VALUES ('2', 'Urbano', 'urbano');

INSERT INTO `deporteonline`.`subcategory` (`id_subcategory`, `name`, `name_google`, `id_category`) VALUES ('1', 'Futbol', 'futbol', '1');
INSERT INTO `deporteonline`.`subcategory` (`id_subcategory`, `name`, `name_google`, `id_category`) VALUES ('2', 'Running', 'running', '1');
INSERT INTO `deporteonline`.`subcategory` (`id_subcategory`, `name`, `name_google`, `id_category`) VALUES ('3', 'Training', 'training', '1');
INSERT INTO `deporteonline`.`subcategory` (`id_subcategory`, `name`, `name_google`, `id_category`) VALUES ('4', 'Tennis', 'tennis', '1');
INSERT INTO `deporteonline`.`subcategory` (`id_subcategory`, `name`, `name_google`, `id_category`) VALUES ('5', 'Natacion', 'natacion', '1');
INSERT INTO `deporteonline`.`subcategory` (`id_subcategory`, `name`, `name_google`, `id_category`) VALUES ('6', 'Moda', 'moda', '2');
INSERT INTO `deporteonline`.`subcategory` (`id_subcategory`, `name`, `name_google`, `id_category`) VALUES ('7', 'Accesorios', 'accesorios', '2');

INSERT INTO `deporteonline`.`role` (`id`, `name`) VALUES ('1', 'Administrador');
INSERT INTO `deporteonline`.`role` (`id`, `name`) VALUES ('2', 'Comprador');

INSERT INTO `deporteonline`.`user` (`id`, `birthdate`, `email`, `enabled`, `islogged`, `lastname`, `name`, `password`) VALUES ('1', '1987-12-03', 'alba75@gmail.com', TRUE, FALSE, 'Gonzales', 'Alba', 'alba1');
INSERT INTO `deporteonline`.`user` (`id`, `birthdate`, `email`, `enabled`, `islogged`, `lastname`, `name`, `password`) VALUES ('2', '1998-05-26', 'ale765@hotmail.com', TRUE, FALSE, 'Rodriguez', 'Alejandro', 'ale2');
INSERT INTO `deporteonline`.`user` (`id`, `birthdate`, `email`, `enabled`, `islogged`, `lastname`, `name`, `password`) VALUES ('3', '1978-07-25', 'ana123@yahoo.com', TRUE, FALSE, 'Gomez', 'Ana', 'ana3');
INSERT INTO `deporteonline`.`user` (`id`, `birthdate`, `email`, `enabled`, `islogged`, `lastname`, `name`, `password`) VALUES ('4', '1968-02-12', 'emma678@gmail.com', TRUE, FALSE, 'Fernandez', 'Emma', 'emma4');
INSERT INTO `deporteonline`.`user` (`id`, `birthdate`, `email`, `enabled`, `islogged`, `lastname`, `name`, `password`) VALUES ('5', '1993-07-17', 'lucas546@gmail.com', TRUE, FALSE, 'Lopez', 'Lucas', 'lucas5');
INSERT INTO `deporteonline`.`user` (`id`, `birthdate`, `email`, `enabled`, `islogged`, `lastname`, `name`, `password`) VALUES ('6', '1976-08-15', 'lucia7643@hotmail.com', TRUE, FALSE, 'Lopez', 'Lucia', 'lucia6');
INSERT INTO `deporteonline`.`user` (`id`, `birthdate`, `email`, `enabled`, `islogged`, `lastname`, `name`, `password`) VALUES ('7', '2001-11-09', 'manuel575@hotmail.com', TRUE, FALSE, 'Diaz', 'Manuel', 'manuel7');
INSERT INTO `deporteonline`.`user` (`id`, `birthdate`, `email`, `enabled`, `islogged`, `lastname`, `name`, `password`) VALUES ('8', '1997-12-05', 'mariana45764@hotmail.com', TRUE, FALSE, 'Garcia', 'Mariana', 'mariana8');
INSERT INTO `deporteonline`.`user` (`id`, `birthdate`, `email`, `enabled`, `islogged`, `lastname`, `name`, `password`) VALUES ('9', '1996-10-25', 'jorge213@yahoo.com.ar', TRUE, FALSE, 'Romero', 'Jorge', 'jorge9');
INSERT INTO `deporteonline`.`user` (`id`, `birthdate`, `email`, `enabled`, `islogged`, `lastname`, `name`, `password`) VALUES ('10', '1994-05-07','marta789@yahoo.com.ar', TRUE, FALSE, 'Torres', 'Marta', 'marta10');
INSERT INTO `deporteonline`.`user` (`id`, `birthdate`, `email`, `enabled`, `islogged`, `lastname`, `name`, `password`) VALUES ('11', '1967-11-08', 'enrique123@gmail.com', TRUE, FALSE, 'Ruiz', 'Enrique', 'enrique11');

INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('1', '1');
INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('1', '2');
INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('2', '2');
INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('3', '2');
INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('4', '2');
INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('5', '1');
INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('5', '2');
INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('6', '2');
INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('7', '2');
INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('8', '2');
INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('9', '2');
INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('10', '2');
INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('10', '1');
INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('11', '2');


INSERT INTO `deporteonline`.`direction` (`id_direction`, `apartment`, `flat`, `location`, `number`, `postal_code`, `province`, `street`) VALUES ('1', 'a', '11', 'Avellaneda', '123', '1870', 'Buenos Aires', 'Acoyte');
INSERT INTO `deporteonline`.`direction` (`id_direction`, `apartment`, `flat`, `location`, `number`, `postal_code`, `province`, `street`) VALUES ('2', 'b', '3', 'Villa Lugano', '4564', '1012', 'CABA', 'Alem');
INSERT INTO `deporteonline`.`direction` (`id_direction`, `apartment`, `flat`, `location`, `number`, `postal_code`, `province`, `street`) VALUES ('3', 'f', '8', 'Berazategui', '747', '1884', 'Buenos Aires', 'Almafuerte');
INSERT INTO `deporteonline`.`direction` (`id_direction`, `apartment`, `flat`, `location`, `number`, `postal_code`, `province`, `street`) VALUES ('4', 'c', '4', 'Lomas de Zamora', '1124', '1832', 'Buenos Aires', 'Congreso');
INSERT INTO `deporteonline`.`direction` (`id_direction`, `apartment`, `flat`, `location`, `number`, `postal_code`, `province`, `street`) VALUES ('5', 'd', '2', 'Lanús', '897', '1824', 'Buenos Aires', 'Avenida de Mayo');
INSERT INTO `deporteonline`.`direction` (`id_direction`, `flat`, `location`, `number`, `postal_code`, `province`, `street`) VALUES ('6', '0', 'Caballito', '321', '1023', 'CABA', 'Derqui');
INSERT INTO `deporteonline`.`direction` (`id_direction`, `flat`, `location`, `number`, `postal_code`, `province`, `street`) VALUES ('7', '0', 'Luis Guillon', '3573', '1838', 'Buenos Aires', 'Independencia');
INSERT INTO `deporteonline`.`direction` (`id_direction`, `flat`, `location`, `number`, `postal_code`, `province`, `street`) VALUES ('8', '0', 'La Plata', '135', '1900', 'Buenos Aires', 'Medrano');
INSERT INTO `deporteonline`.`direction` (`id_direction`, `flat`, `location`, `number`, `postal_code`, `province`, `street`) VALUES ('9', '0', 'Belgrano', '865', '1011', 'CABA', 'Monroe');
INSERT INTO `deporteonline`.`direction` (`id_direction`, `flat`, `location`, `number`, `postal_code`, `province`, `street`) VALUES ('10', '0', 'Flores', '23', '1010', 'CABA', 'Nazca');

INSERT INTO `deporteonline`.`discount` (`id_discount`, `code`, `percentage`) VALUES ('1', '10DESC', '10');
INSERT INTO `deporteonline`.`discount` (`id_discount`, `code`, `percentage`) VALUES ('2', '20MODA', '20');
INSERT INTO `deporteonline`.`discount` (`id_discount`, `code`, `percentage`) VALUES ('3', '15TENNIS', '15');
INSERT INTO `deporteonline`.`discount` (`id_discount`, `code`, `percentage`) VALUES ('4', '20FUT', '20');
INSERT INTO `deporteonline`.`discount` (`id_discount`, `code`, `percentage`) VALUES ('5', '10FUT', '10');
INSERT INTO `deporteonline`.`discount` (`id_discount`, `code`, `percentage`) VALUES ('6', '40DESC', '40');
INSERT INTO `deporteonline`.`discount` (`id_discount`, `code`, `percentage`) VALUES ('7', '20DESC', '20');
INSERT INTO `deporteonline`.`discount` (`id_discount`, `code`, `percentage`) VALUES ('8', '30DESC', '30');
