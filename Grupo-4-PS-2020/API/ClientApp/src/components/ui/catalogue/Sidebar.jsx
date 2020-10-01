import React from "react";
import { Button, Card, CardContent } from "@material-ui/core";
import "./catalogue.css";
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

const Sidebar = (props) => {

  const {visual, setvisual} = props;

  return (
    <Card className="sidecat">
      <CardContent>
        <Button
          onClick={e => setvisual("tiles")}
        >
          <ViewHeadlineIcon />
        </Button>
        <Button
          onClick={e => setvisual("cards")}
        >
          <ViewModuleIcon />
        </Button>
      </CardContent>
      <CardContent>Categorias</CardContent>
    </Card>
  );
};

export default Sidebar;
