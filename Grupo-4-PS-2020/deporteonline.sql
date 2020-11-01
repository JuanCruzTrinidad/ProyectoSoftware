-- create schema if not exists deporteonline;
use deporteonline;

INSERT INTO `deporteonline`.`category` (`name`, `name_google`) 
		VALUES ('Deportes', '5322'), ('Urbano', '1604'), ("Clubes", "3379"), ("Accesorios", "3515");

INSERT INTO `deporteonline`.`subcategory` (`name`, `name_google`, `id_category`) 
	VALUES 	('Futbol', '3576', 1), ('Running', '499792', 1), ('Training', '990', 1),
			('Tenis', '6187', 1), ('Natacion', '1144', 1), ("Hockey", "499741", 1), 
            ("Handball", "1047", 1), ('Remeras', '212', 2), ('Pantalones', '204', 2), 
            ('Medias', '215', 2), ('Zapatillas', '187', 2), ("Boca Juniors", "3576", 3), 
            ("Real Madrid", "3576", 3), ("Juventus", "3576", 3), ("Temperley", "3576", 3), 
            ("Racing Club", "3576", 3), ("Gorras", "173", 4), ("Rodilleras", "499789", 4);

INSERT INTO `deporteonline`.`role` (`id`, `name`) 
	VALUES ('1', 'ROLE_ADMIN'), ('2', 'ROLE_USER');

INSERT INTO `deporteonline`.`discount` (`id_discount`, `code`, `percentage`) 
	VALUES 	('1', '10DESC', '10'), ('2', '20MODA', '20'), ('3', '15TENIS', '15'), ('4', '20FUT', '20'),
			('5', '10FUT', '10'), ('6', '40DESC', '40'), ('7', '20DESC', '20'), ('8', '30DESC', '30');

insert into producto 
		values (1, "Camiseta del club Boca Juniors perteneciente a la temporada 2020", "Camiseta del club Boca Juniors perteneciente a la temporada 2020 Camiseta del club Boca Juniors perteneciente a la temporada 2020", 
        "https://www.templodelfutbol.com.ar/35506-large_default/camboca-h-jsy-mn-al.jpg",
        "ARS", "Camiseta Titular Boca Jrs. 2020", 5000, 5500, "", b'1', 12),
		(2, "Camiseta de Racing Club perteneciente a la temporada 2017", "Camiseta de Racing Club perteneciente a la temporada 2017 Camiseta de Racing Club perteneciente a la temporada 2017", 
        "https://http2.mlstatic.com/D_NQ_NP_2X_927655-MLA43767762565_102020-F.webp",
        "ARS", "Camiseta Titular Racing Club 2017", 3000, 0, "", b'1', 16),
		(3, "Raqueta Tenis Wilson Grip 4 3/8 + Funda Estuche Encordado Tennis Juego", "Raqueta Tenis Wilson Grip 4 3/8 + Funda Estuche Encordado Tennis Juego Raqueta Tenis Wilson Grip 4 3/8 + Funda Estuche Encordado Tennis Juego", 
        "https://http2.mlstatic.com/D_NQ_NP_2X_745168-MLA41110054576_032020-F.webp",
        "ARS", "Raqueta Tenis Wilson Grip 4 3/8", 5050, 7214, "", b'1', 4),
		(4, "Tubo De Pelotas Tenis Atp Championship | Dunlop® X 3 Balls", "Tubo De Pelotas Tenis Atp Championship | Dunlop® X 3 Balls Tubo De Pelotas Tenis Atp Championship | Dunlop® X 3 Balls", 
        "https://http2.mlstatic.com/D_NQ_NP_2X_601022-MLA42317904417_062020-F.webp",
        "ARS", "Tubo De Pelotas Tenis Atp", 726, 0, "", b'1', 4),
		(5, "Palo Hockey Madera Simbra Reforzado Palos 28 Al 37 Stick Importado", "Palo Hockey Madera Simbra Reforzado Palos 28 Al 37 Stick Importado Palo Hockey Madera Simbra Reforzado Palos 28 Al 37 Stick Importado", 
        "https://http2.mlstatic.com/D_NQ_NP_2X_892266-MLA41083300533_032020-F.webp",
        "ARS", "Palo Hockey Madera Simbra Reforzado", 1225, 1750, "", b'1', 6),
		(6, "Remeras Básicas De Hombre Logo Bordado Lisas C/envio #rl40", "Remeras Básicas De Hombre Logo Bordado Lisas C/envio #rl40 Remeras Básicas De Hombre Logo Bordado Lisas C/envio #rl40", 
        "https://http2.mlstatic.com/D_NQ_NP_2X_913345-MLA41360249782_042020-F.webp",
        "ARS", "Remeras Básicas De Hombre", 1099, 0, "", b'1', 8),
		(7, "Remeras Camisetas Deportivas Precio Mayorista Sublimables", "Remeras Camisetas Deportivas Precio Mayorista Sublimables Remeras Camisetas Deportivas Precio Mayorista Sublimables", 
        "https://http2.mlstatic.com/D_NQ_NP_2X_820889-MLA40812356395_022020-F.webp",
        "ARS", "Remeras Camisetas Deportivas", 569, 599, "", b'1', 8),
		(8, "Zapatillas adidas Running Duramo 9 Hombre In Mn", "Zapatillas adidas Running Duramo 9 Hombre In Mn Zapatillas adidas Running Duramo 9 Hombre In Mn", 
        "https://http2.mlstatic.com/D_NQ_NP_2X_745105-MLA43724900281_102020-F.webp",
        "ARS", "Zapatillas adidas", 6699, 0, "", b'1', 11),
		(9, "Gorra Nike Jordan Pro Jumpman", "Gorra Nike Jordan Pro Jumpman Gorra Nike Jordan Pro Jumpman", 
        "https://http2.mlstatic.com/D_NQ_NP_2X_663243-MLA32949791020_112019-F.webp",
        "ARS", "Gorra Nike", 4999, 0, "", b'1', 17),
		(10, "Gorra Nike Sb Icon Pro Black Negro Cap Trucker Visera Plana", "Gorra Nike Sb Icon Pro Black Negro Cap Trucker Visera Plana Gorra Nike Sb Icon Pro Black Negro Cap Trucker Visera Plana", 
        "https://http2.mlstatic.com/D_NQ_NP_2X_786753-MLA31116089121_062019-F.webp",
        "ARS", "Gorra Nike Sb Icon Pro", 3699, 3999, "", b'1', 17);

insert into atributos 
	values 	(1, 70, 35, "Azul", 0.150, 5, "M", 1), (2, 70, 35, "Celeste", 0.150, 5, "S", 2),
			(11, 70, 35, "Celeste", 0.150, 5, "M", 2), (12, 70, 35, "Celeste", 0.150, 5, "L", 2),
			(3, 60, 30, "Negro", 0.500, 10, "M", 3), (4, 15, 15, "Amarillo", 0.200, 15, "-", 4),
            (5, 100, 15, "Negro", 0.650, 6, "M", 5), (6, 70, 35, "Verde", 0.100, 5, "S", 6),
            (7, 70, 35, "Negro", 0.100, 5, "M", 7), (8, 15, 40, "Negro", 0.300, 10, "43", 8),
            (13, 15, 35, "Negro", 0.300, 10, "40", 8), (9, 15, 20, "Negro", 0.090, 20, "M", 9), 
            (10, 70, 35, "Negro", 0.090, 20, "L", 10);