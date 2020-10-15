create schema if not exists deporteonline;
use deporteonline;


drop schema deporteonline;

-- -- ------testeo------ 

-- select u.lastname from `user` u where u.enabled= 1;

-- insert into `user` (birthdate,email,enabled,islogged,lastname,name,password) values ('1999-05-02','sol@gmail.com',1,1,'alvarez','sol','123');
-- INSERT INTO `deporteonline`.`user` (`id`, `birthdate`, `email`, `lastname`, `name`, `password`) VALUES ('2', '1999-02-22', 'pepe@g.com', 'lopez', 'pepe', '124');
-- UPDATE `deporteonline`.`user` SET `enabled` = TRUE, `islogged` = FALSE WHERE (`id` = '2');
-- INSERT INTO `deporteonline`.`role` (`id`, `name`) VALUES ('1', 'admin');
-- INSERT INTO `deporteonline`.`role` (`id`, `name`) VALUES ('2', 'vendedor');
-- INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('2', '1');
-- INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('1', '1');
-- INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('2', '2');
-- INSERT INTO `deporteonline`.`category` (`id_category`, `name`) VALUES ('1', 'DEPORTE');
-- INSERT INTO `deporteonline`.`category` (`id_category`, `name`) VALUES ('2', 'URBANO');

-- INSERT INTO `deporteonline`.`subcategory` (`id_subcategory`, `name`, `id_category`) VALUES ('1', 'FUTBOL', '1');
-- INSERT INTO `deporteonline`.`subcategory` (`id_subcategory`, `name`, `id_category`) VALUES ('2', 'TENIS', '1');
-- INSERT INTO `deporteonline`.`subcategory` (`id_subcategory`, `name`, `id_category`) VALUES ('3', 'urba', '2');

-- INSERT INTO `deporteonline`.`producto` (`id_producto`, `descripcion_corta`, `descripcion_larga`, `nombre`, `precio`, `visible`, `id_subcategory`) VALUES ('1', 'rem', 'remera', 'rem', '200', TRUE, b'1');
-- UPDATE `deporteonline`.`producto` SET `precio_oferta` = '0' WHERE (`id_producto` = '1');
-- INSERT INTO `deporteonline`.`producto` (`id_producto`, `descripcion_corta`, `descripcion_larga`, `nombre`, `precio`, `precio_oferta`, `visible`, `id_subcategory`) VALUES ('2', 'cam', 'camiseta', 'cam', '100', '50', TRUE, '2');
-- INSERT INTO `deporteonline`.`producto` (`id_producto`, `descripcion_corta`, `descripcion_larga`, `nombre`, `precio`, `precio_oferta`, `visible`, `id_subcategory`) VALUES ('3', 'zap', 'zapatillas', 'zapa', '300', '100', TRUE, '3');
-- INSERT INTO `deporteonline`.`producto` (`id_producto`, `descripcion_corta`, `descripcion_larga`, `nombre`, `precio`, `precio_oferta`, `visible`, `id_subcategory`) VALUES ('4', 'zap', 'zapatillas', 'zapa', '300', '0', TRUE, '3');


-- INSERT INTO `deporteonline`.`atributos` (`sku`, `alto`, `ancho`, `color`, `peso`, `profundidad`, `talle`, `id_producto`) VALUES ('1', '12', '12', 'azul', '23', '12', '13', '1');
-- INSERT INTO `deporteonline`.`atributos` (`sku`, `alto`, `ancho`, `color`, `peso`, `profundidad`, `talle`, `id_producto`) VALUES ('2', '56', '42', 'rojo', '36', '14', '56', '1');
-- INSERT INTO `deporteonline`.`atributos` (`sku`, `alto`, `ancho`, `color`, `peso`, `profundidad`, `talle`, `id_producto`) VALUES ('3', '59', '36', 'verde', '46', '12', '41', '2');
-- INSERT INTO `deporteonline`.`atributos` (`sku`, `alto`, `ancho`, `color`, `peso`, `profundidad`, `talle`, `id_producto`) VALUES ('4', '39', '86', 'amarillo', '65', '26', '56', '3');

-- INSERT INTO `deporteonline`.`valoracion` (`fk_producto`, `fk_user`, `comentario`, `valoracion`) VALUES ('1', '2', ':)', '4');
-- INSERT INTO `deporteonline`.`valoracion` (`fk_producto`, `fk_user`, `comentario`, `valoracion`) VALUES ('2', '2', 'BIEN', '3');
-- INSERT INTO `deporteonline`.`valoracion` (`fk_producto`, `fk_user`, `comentario`, `valoracion`) VALUES ('3', '2', ':(', '1');
-- INSERT INTO `deporteonline`.`valoracion` (`fk_producto`, `fk_user`, `comentario`, `valoracion`) VALUES ('2', '1', 'REGULAR', '2');
-- INSERT INTO `deporteonline`.`valoracion` (`fk_producto`, `fk_user`, `comentario`, `valoracion`) VALUES ('4', '2', '-', '5');

INSERT INTO `deporteonline`.`user` (`id`, `birthdate`, `email`, `enabled`, `islogged`, `lastname`, `name`, `password`) VALUES ('1', '1991-02-01', 'santi.fiorda04@gmail.com', TRUE, FALSE, 'Fiordalisi', 'Santiago', '1234');
INSERT INTO `deporteonline`.`user` (`id`, `birthdate`, `email`, `enabled`, `islogged`, `lastname`, `name`, `password`) VALUES ('2', '1991-01-01', 'san@gmail.com', TRUE, FALSE, 'Fiorda', 'Santi', '1234');

INSERT INTO `deporteonline`.`role` (`id`, `name`) VALUES ('1', 'admin');
INSERT INTO `deporteonline`.`role` (`id`, `name`) VALUES ('2', 'comprador');

INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('1', '1');
INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('1', '2');
INSERT INTO `deporteonline`.`role_user` (`user_id`, `role_id`) VALUES ('2', '1');

INSERT INTO `deporteonline`.`category` (`id_category`, `name`) VALUES ('1', 'Deporte');
INSERT INTO `deporteonline`.`category` (`id_category`, `name`) VALUES ('2', 'Urbano');

INSERT INTO `deporteonline`.`subcategory` (`id_subcategory`, `name`, `id_category`) VALUES ('1', 'futbol', '1');
INSERT INTO `deporteonline`.`subcategory` (`id_subcategory`, `name`, `id_category`) VALUES ('2', 'tenis', '1');
INSERT INTO `deporteonline`.`subcategory` (`id_subcategory`, `name`, `id_category`) VALUES ('3', 'urban', '2');

INSERT INTO `deporteonline`.`producto` (`id_producto`, `descripcion_corta`, `descripcion_larga`, `imagen`, `nombre`, `precio`, `precio_oferta`, `video`, `visible`, `id_subcategory`) VALUES ('1', 'cami', 'camiseta', 'http://', 'camiseta', '200', '0', 'http://', TRUE, '1');
INSERT INTO `deporteonline`.`producto` (`id_producto`, `descripcion_corta`, `descripcion_larga`, `imagen`, `nombre`, `precio`, `precio_oferta`, `video`, `visible`, `id_subcategory`) VALUES ('2', 'short', 'short', 'http://', 'short', '150', '120', 'http://', TRUE, '1');
INSERT INTO `deporteonline`.`producto` (`id_producto`, `descripcion_corta`, `descripcion_larga`, `imagen`, `nombre`, `precio`, `precio_oferta`, `video`, `visible`, `id_subcategory`) VALUES ('3', 'cami', 'camiseta', 'http://', 'camiseta', '210', '0', 'http://', TRUE, '2');
INSERT INTO `deporteonline`.`producto` (`id_producto`, `descripcion_corta`, `descripcion_larga`, `imagen`, `nombre`, `precio`, `precio_oferta`, `video`, `visible`, `id_subcategory`) VALUES ('4', 'zapa', 'zapatilla', 'http://', 'zapatilla', '300', '200', 'http://', TRUE, '3');

INSERT INTO `deporteonline`.`valoracion` (`fk_producto`, `fk_user`, `comentario`, `valoracion`) VALUES ('1', '1', 'muy bueno', '5');
INSERT INTO `deporteonline`.`valoracion` (`fk_producto`, `fk_user`, `comentario`, `valoracion`) VALUES ('2', '1', 'bueno', '4');
INSERT INTO `deporteonline`.`valoracion` (`fk_producto`, `fk_user`, `comentario`, `valoracion`) VALUES ('3', '1', 'malo', '1');
INSERT INTO `deporteonline`.`valoracion` (`fk_producto`, `fk_user`, `comentario`, `valoracion`) VALUES ('2', '2', 'bueno', '3');
INSERT INTO `deporteonline`.`valoracion` (`fk_producto`, `fk_user`, `comentario`, `valoracion`) VALUES ('4', '2', 'regular', '2');

INSERT INTO `deporteonline`.`atributos` (`sku`, `alto`, `ancho`, `color`, `peso`, `profundidad`, `talle`, `id_producto`) VALUES ('1', '20', '10', 'rojo', '20', '12', '40', '1');
INSERT INTO `deporteonline`.`atributos` (`sku`, `alto`, `ancho`, `color`, `peso`, `profundidad`, `talle`, `id_producto`) VALUES ('2', '15', '15', 'azul', '15', '15', '30', '1');
INSERT INTO `deporteonline`.`atributos` (`sku`, `alto`, `ancho`, `color`, `peso`, `profundidad`, `talle`, `id_producto`) VALUES ('3', '10', '10', 'verde', '10', '10', '33', '2');
INSERT INTO `deporteonline`.`atributos` (`sku`, `alto`, `ancho`, `color`, `peso`, `profundidad`, `talle`, `id_producto`) VALUES ('4', '14', '14', 'amarillo', '14', '14', '34', '3');
INSERT INTO `deporteonline`.`atributos` (`sku`, `alto`, `ancho`, `color`, `peso`, `profundidad`, `talle`, `id_producto`) VALUES ('5', '12', '12', 'naranja', '12', '12', '36', '4');

INSERT INTO `deporteonline`.`payment` (`id_payment`, `name`) VALUES ('1', 'efectivo');
INSERT INTO `deporteonline`.`payment` (`id_payment`, `name`) VALUES ('2', 'tarjeta');
INSERT INTO `deporteonline`.`payment` (`id_payment`, `name`) VALUES ('3', 'mercadopago');

INSERT INTO `deporteonline`.`discount` (`id_discount`, `code`, `percentage`) VALUES ('1', '20porcentaje', '20');
INSERT INTO `deporteonline`.`discount` (`id_discount`, `code`, `percentage`) VALUES ('2', '15porcentaje', '15');
INSERT INTO `deporteonline`.`discount` (`id_discount`, `code`, `percentage`) VALUES ('3', '10porcentaje', '10');

INSERT INTO `deporteonline`.`direction` (`id_direction`, `apartment`, `flat`, `location`, `number`, `postal_code`, `province`, `street`) VALUES ('1', 'A', '11', 'CABA', '123', '1564', 'Buenos Aires', 'Corrientes');
INSERT INTO `deporteonline`.`direction` (`id_direction`, `location`, `number`, `postal_code`, `province`, `street`) VALUES ('2', 'Burzaco', '456', '1852', 'Buenos Aires', 'Alsina');
INSERT INTO `deporteonline`.`direction` (`id_direction`, `location`, `number`, `postal_code`, `province`, `street`) VALUES ('3', 'Lomas de Zamora', '362', '1832', 'Buenos Aires', 'Belgrano');

INSERT INTO `deporteonline`.`pedido` (`id_pedido`, `descuento`, `shipping_cost`, `subtotal`, `total`, `id_direction`, `id_discount`, `id_payment`, `id_user`) VALUES ('1', '200', '100', '1200', '1000', '1', '1', '1', '1');
INSERT INTO `deporteonline`.`pedido` (`id_pedido`, `descuento`, `shipping_cost`, `subtotal`, `total`, `id_direction`, `id_discount`, `id_payment`, `id_user`) VALUES ('2', '100', '150', '2430', '2330', '2', '2', '2', '1');
INSERT INTO `deporteonline`.`pedido` (`id_pedido`, `coment`, `descuento`, `shipping_cost`, `subtotal`, `total`, `id_direction`, `id_discount`, `id_payment`, `id_user`) VALUES ('3', ':)', '250', '130', '2453', '2329', '3', '1', '3', '2');

INSERT INTO `deporteonline`.`detalle_pedido` (`fk_atributos`, `fk_pedido`, `cantidad`) VALUES ('1', '1', '2');
INSERT INTO `deporteonline`.`detalle_pedido` (`fk_atributos`, `fk_pedido`, `cantidad`) VALUES ('2', '1', '1');
INSERT INTO `deporteonline`.`detalle_pedido` (`fk_atributos`, `fk_pedido`, `cantidad`) VALUES ('3', '1', '2');
INSERT INTO `deporteonline`.`detalle_pedido` (`fk_atributos`, `fk_pedido`, `cantidad`) VALUES ('4', '2', '1');
INSERT INTO `deporteonline`.`detalle_pedido` (`fk_atributos`, `fk_pedido`, `cantidad`) VALUES ('5', '2', '4');
INSERT INTO `deporteonline`.`detalle_pedido` (`fk_atributos`, `fk_pedido`, `cantidad`) VALUES ('2', '3', '1');


INSERT INTO `deporteonline`.`pedido` (`id_pedido`, `shipping_cost`, `subtotal`, `total`, `id_direction`, `id_payment`, `id_user`) VALUES ('4', '123', '4521', '4500', '4', '2', '2');
