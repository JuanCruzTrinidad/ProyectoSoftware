import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { apiAxios } from "../../config/axios";
import { useEffect } from "react";
import { CategoryCards } from "./CategoryCards";

export const CarruoselCategorys = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [categoryList, setcategoryList] = useState([]);

  const getCategoriesAPI = () => {
    apiAxios
      .get("/category/allcategories")
      .then(({ data }) => {
        setcategoryList(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCategoriesAPI();
  }, []);
  return (
    <>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
        gutter={20}
        leftChevron={<ChevronLeftIcon />}
        rightChevron={<ChevronRightIcon />}
        outsideChevron
        chevronWidth={40}
      >
        {categoryList.map((c) => (
          <CategoryCards categoryName={c.name} />
        ))}
      </ItemsCarousel>
    </>
  );
};
