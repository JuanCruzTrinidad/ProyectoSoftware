create schema if not exists deporteonline;
use deporteonline;

drop schema deporteonline;


select a.sku, a.color, m.unidad, m.valor from atributos a 
inner join medidaembalaje m on
a.sku= m.sku;

select prod.descripcion_corta, pre.monto, pre.monto_oferta, pre.moneda
from producto prod inner join precio pre on
prod.idprecio = pre.id_precio;