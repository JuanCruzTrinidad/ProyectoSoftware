import React, { Fragment } from "react";
import { Button, Card, CardContent, Grid } from "@material-ui/core";
import "./catalogue.css";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import Dropdown from "react-bootstrap/Dropdown";
import SplitButton from "react-bootstrap/SplitButton";

const Sidebar = (props) => {
  const { setvisual, categorieslist, order, setorder, getProductsByCategoryAPI, getProductsBySubcategoryAPI } = props;

  return (
    <Card className="sidecat">
      <CardContent>
        <div className="pb-2 text-center">
          <Button onClick={(e) => setvisual("tiles")}>
            <ViewHeadlineIcon />
          </Button>
          <Button onClick={(e) => setvisual("cards")}>
            <ViewModuleIcon />
          </Button>
        </div>

        <h4 className="pb-2 text-center">Ordenar productos</h4>
        <div style={{ textAlign: "center" }}>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              style={{
                color: "black",
                backgroundColor: "#C8EFE3",
                border: "none",
              }}
            >
              {order}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={(e) => setorder("Nombre ascendente")}>
                Nombre ascendente
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => setorder("Nombre descendente")}>
                Nombre descendente
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => setorder("Mayor precio")}>
                Mayor precio
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => setorder("Menor precio")}>
                Menor precio
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <h4 className="pt-4 pb-2 text-center">Categorias</h4>

        {categorieslist.map((cat) => (
          <Fragment key={cat.idCategory}>
            <Grid container>
              <SplitButton
                bsPrefix="btn btn-block"
                title={cat.name}
                style={{
                  marginBottom: "10px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  backgroundColor: "#C8EFE3",
                  borderRadius: "5px"
                }}
                onClick={(e) => getProductsByCategoryAPI(cat.idCategory)}
              >
                {cat.subcategorys.map((subcat) => (
                  <Dropdown.Item 
                    key={subcat.idSubcategory}
                    onClick={(e) => getProductsBySubcategoryAPI(subcat.idSubcategory)}
                  >{subcat.name}</Dropdown.Item>
                ))}
              </SplitButton>
            </Grid>
          </Fragment>
        ))}
      </CardContent>
    </Card>
  );
};

export default Sidebar;
