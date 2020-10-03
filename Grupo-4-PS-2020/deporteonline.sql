create schema if not exists deporteonline;
use deporteonline;

drop schema deporteonline;

-- ------testeo------ 

select u.lastname from `user` u where u.enabled= 1;

insert into `user` (birthdate,email,enabled,islogged,lastname,name,password) values ('1999-05-02','sol@gmail.com',1,1,'alvarez','sol','123');
INSERT INTO `deporteonline`.`user` (`id`, `birthdate`, `email`, `lastname`, `name`, `password`) VALUES ('2', '1999-02-22', 'pepe@g.com', 'lopez', 'pepe', '124');
UPDATE `deporteonline`.`user` SET `enabled` = TRUE, `islogged` = FALSE WHERE (`id` = '2');
INSERT INTO `deporteonline`.`role` (`id`, `name`) VALUES ('1', 'admin');
INSERT INTO `deporteonline`.`role` (`id`, `name`) VALUES ('2', 'vendedor');
INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('2', '1');
INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('1', '1');
INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('2', '2');
INSERT INTO `deporteonline`.`category` (`id_category`, `name`) VALUES ('1', 'DEPORTE');
INSERT INTO `deporteonline`.`category` (`id_category`, `name`) VALUES ('2', 'URBANO');

INSERT INTO `deporteonline`.`subcategory` (`id_subcategory`, `name`, `id_category`) VALUES ('1', 'FUTBOL', '1');
INSERT INTO `deporteonline`.`subcategory` (`id_subcategory`, `name`, `id_category`) VALUES ('2', 'TENIS', '1');
INSERT INTO `deporteonline`.`subcategory` (`id_subcategory`, `name`, `id_category`) VALUES ('3', 'urba', '2');

INSERT INTO `deporteonline`.`producto` (`id_producto`, `descripcion_corta`, `descripcion_larga`, `nombre`, `precio`, `visible`, `id_subcategory`) VALUES ('1', 'rem', 'remera', 'rem', '200', TRUE, b'1');
UPDATE `deporteonline`.`producto` SET `precio_oferta` = '0' WHERE (`id_producto` = '1');
INSERT INTO `deporteonline`.`producto` (`id_producto`, `descripcion_corta`, `descripcion_larga`, `nombre`, `precio`, `precio_oferta`, `visible`, `id_subcategory`) VALUES ('2', 'cam', 'camiseta', 'cam', '100', '50', TRUE, '2');
INSERT INTO `deporteonline`.`producto` (`id_producto`, `descripcion_corta`, `descripcion_larga`, `nombre`, `precio`, `precio_oferta`, `visible`, `id_subcategory`) VALUES ('3', 'zap', 'zapatillas', 'zapa', '300', '100', TRUE, '3');
INSERT INTO `deporteonline`.`producto` (`id_producto`, `descripcion_corta`, `descripcion_larga`, `nombre`, `precio`, `precio_oferta`, `visible`, `id_subcategory`) VALUES ('4', 'zap', 'zapatillas', 'zapa', '300', '0', TRUE, '3');


INSERT INTO `deporteonline`.`atributos` (`sku`, `alto`, `ancho`, `color`, `peso`, `profundidad`, `talle`, `id_producto`) VALUES ('1', '12', '12', 'azul', '23', '12', '13', '1');
INSERT INTO `deporteonline`.`atributos` (`sku`, `alto`, `ancho`, `color`, `peso`, `profundidad`, `talle`, `id_producto`) VALUES ('2', '56', '42', 'rojo', '36', '14', '56', '1');
INSERT INTO `deporteonline`.`atributos` (`sku`, `alto`, `ancho`, `color`, `peso`, `profundidad`, `talle`, `id_producto`) VALUES ('3', '59', '36', 'verde', '46', '12', '41', '2');
INSERT INTO `deporteonline`.`atributos` (`sku`, `alto`, `ancho`, `color`, `peso`, `profundidad`, `talle`, `id_producto`) VALUES ('4', '39', '86', 'amarillo', '65', '26', '56', '3');

INSERT INTO `deporteonline`.`valoracion` (`fk_producto`, `fk_user`, `comentario`, `valoracion`) VALUES ('1', '2', ':)', '4');
INSERT INTO `deporteonline`.`valoracion` (`fk_producto`, `fk_user`, `comentario`, `valoracion`) VALUES ('2', '2', 'BIEN', '3');
INSERT INTO `deporteonline`.`valoracion` (`fk_producto`, `fk_user`, `comentario`, `valoracion`) VALUES ('3', '2', ':(', '1');
INSERT INTO `deporteonline`.`valoracion` (`fk_producto`, `fk_user`, `comentario`, `valoracion`) VALUES ('2', '1', 'REGULAR', '2');
INSERT INTO `deporteonline`.`valoracion` (`fk_producto`, `fk_user`, `comentario`, `valoracion`) VALUES ('4', '2', '-', '5');

