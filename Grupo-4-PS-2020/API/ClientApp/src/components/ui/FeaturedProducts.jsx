import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { apiAxios } from '../../config/axios';
import MediaCard from './catalogue/Card';
import { useEffect } from 'react';
import { CategoryCards } from './CategoryCards';


export const FeaturedProducts = ({ products = [], custom = false }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [productlist, setproductlist] = useState([]);

  const getProductsOfertAPI = () => {
    apiAxios
      .get("/product/allPromotion")
      .then(({ data }) => {
        setproductlist(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProductsOfertAPI();
  }, [])
  return (
    <>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={<ChevronLeftIcon />}
        rightChevron={<ChevronRightIcon />}
        outsideChevron
        chevronWidth={40}
      >
        {custom ? (
          products.map((prod) => (
            <MediaCard key={prod.idProducto} prod={prod} />
          ))
        ) : (
            productlist.map((prod) => (
              <MediaCard key={prod.idProducto} prod={prod} />
            ))
          )
        }

      </ItemsCarousel>
    </>
  );
};