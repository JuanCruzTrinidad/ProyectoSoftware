import React, { Fragment, useState } from "react";
import { Button, Card, CardContent, Grid } from "@material-ui/core";
import "./catalogue.css";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import Dropdown from "react-bootstrap/Dropdown";
import { Button as ButtonRB } from "react-bootstrap";
import SplitButton from "react-bootstrap/SplitButton";

const Sidebar = (props) => {
  const { visual, setvisual, listacategorias, order, setorder } = props;

  return (
    <Card className="sidecat">
      <CardContent>
        <div className="pb-2">
          <Button onClick={(e) => setvisual("tiles")}>
            <ViewHeadlineIcon />
          </Button>
          <Button onClick={(e) => setvisual("cards")}>
            <ViewModuleIcon />
          </Button>
        </div>

        <h4 className="pb-2">Ordenar productos</h4>
        <div style={{ textAlign: "center" }}>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {order}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={(e) => setorder("Nombre ascendente")}
              >
                Nombre ascendente
              </Dropdown.Item>
              <Dropdown.Item
                onClick={(e) => setorder("Nombre descendente")}
              >
                Nombre descendente
              </Dropdown.Item>
              <Dropdown.Item
                onClick={(e) => setorder("Mayor precio")}
              >
                Mayor precio
              </Dropdown.Item>
              <Dropdown.Item
                onClick={(e) => setorder("Menor precio")}
              >
                Menor precio
              </Dropdown.Item>
              <Dropdown.Item
                onClick={(e) => setorder("Default")}
              >
                Default
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <h4 className="pt-4 pb-2">Categorias</h4>

        {listacategorias.map((cat) => (
          <Fragment key={cat.id}>
            <Grid container>
              <SplitButton
                variant="secondary"
                title={cat.name}
                style={{
                  padding: "3px",
                  paddingLeft: "20px",
                }}
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </SplitButton>
            </Grid>
          </Fragment>
        ))}
      </CardContent>
    </Card>
  );
};

export default Sidebar;
