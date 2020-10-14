package com.unla.deporteonline.services;

import com.unla.deporteonline.entities.Valoracion;
import java.util.List;

public interface IValueService {
    
    public Object saveValue(Valoracion value);

    public List<Valoracion> findByProduct(final int fk_producto);
   
}
