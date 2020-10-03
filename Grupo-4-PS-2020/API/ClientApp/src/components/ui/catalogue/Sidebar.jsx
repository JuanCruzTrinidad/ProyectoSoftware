import React, {Fragment} from "react";
import { Button, Card, CardContent } from "@material-ui/core";
import "./catalogue.css";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import Dropdown from "react-bootstrap/Dropdown";
import {Button as ButtonRB} from 'react-bootstrap';

const Sidebar = (props) => {
  const { visual, setvisual, listacategorias } = props;

  return (
    <Card className="sidecat">
      <CardContent>
        <Button onClick={(e) => setvisual("tiles")}>
          <ViewHeadlineIcon />
        </Button>
        <Button onClick={(e) => setvisual("cards")}>
          <ViewModuleIcon />
        </Button>
      </CardContent>
      <CardContent>
        {listacategorias.map((cat) => (
          <Fragment>
            <Dropdown
              style={{textAlign: "center"}}
              bsPrefix="p-2"
            >
              <ButtonRB 
                href="#/action-0"
              >{cat.name}</ButtonRB>
              <Dropdown.Toggle
                split
                id="dropdown-split-basic"
              />
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Subcategoria1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Subcategoria2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Subcategoria3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Fragment>
        ))}
      </CardContent>
    </Card>
  );
};

export default Sidebar;
