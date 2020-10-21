import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { apiAxios } from '../../config/axios';
import MediaCard from './catalogue/Card';
import { useEffect } from 'react';


export const FeaturedProducts = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [productlist, setproductlist] = useState([]);
  const chevronWidth = 40;

  const getProductsAPI = () => {
    apiAxios
      .get("/product/allproduct")
      .then(({ data }) => {
        setproductlist(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProductsAPI();
  }, [])
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        leftChevron={<ChevronLeftIcon/>}
        rightChevron={<ChevronRightIcon/>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        
          {
            productlist.map((prod) => (
              <MediaCard key={prod.idProducto} prod={prod} />
            ))
          }
                    {
            productlist.map((prod) => (
              <MediaCard key={prod.idProducto} prod={prod} />
            ))
          }
        
        {/* <div style={{ height: 200, background: '#EEE' }}>First card</div>
        <div style={{ height: 200, background: '#EEE' }}>Second card</div>
        <div style={{ height: 200, background: '#EEE' }}>Third card</div>
        <div style={{ height: 200, background: '#EEE' }}>Fourth card</div> */}
      </ItemsCarousel>
    </div>
  );
};