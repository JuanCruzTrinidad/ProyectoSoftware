import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, TextField, Tooltip, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import React, { useState } from 'react'
import { apiAxios } from '../../../config/axios';
import AddCommentIcon from "@material-ui/icons/AddComment";

export const Comments = ({listComments, open, handleClickOpen, handleClose, idproduct}) => {

    const [comment, setComment] = useState({
        title: "",
        comment: "",
        rating: 0,
      });
     
     // const [listComments, setListComments] = useState([]);

    const createCommentAPI = (comment) => {
        apiAxios
        .post("/value/createValue", comment, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
            "Access-Control-Allow-Headers":
              "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
            "Content-Type": "application/json"
          },
        })
        .then(({ data }) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
      };
    
      const handleSubmit = () => {
        var createComment = {
          fk_user : 1,
          fk_producto: idproduct,
          valoracion: comment.rating,
          comentario: comment.comment
        }
        createCommentAPI(createComment);
        handleClose();
        setComment({});
      };

    console.log(listComments)
    return (
        <>
            <Grid container spacing={5} justify="center">
                {listComments?.map((c) => {
                    return (
                        <Paper
                            elevation={3}
                            style={{
                                height: 150,
                                width: "78%",
                                marginTop: "2%",
                                padding: "2%",
                            }}
                        >
                            <Grid container justify="flex-start">
                                <Box component="fieldset" borderColor="transparent">
                                    <Rating
                                        name="simple-controlled"
                                        value={c.valoracion}
                                        readOnly
                                        size="small"
                                    />
                                </Box>
                                <Tooltip title={"Añadir comentario"}>
                                    <AddCommentIcon
                                        style={{ cursor: "pointer", marginLeft: "82%" }}
                                        onClick={handleClickOpen}
                                    />
                                </Tooltip>
                            </Grid>
                            <Typography variant="h5" style={{ fontStyle: "oblique" }}>
                                {c.title}
                            </Typography>
                            <Typography variant="body2">{c.comentario}</Typography>
                        </Paper>
                    );
                })}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Valoración</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Si gusta pueda añadir una valoración sobre este producto.
              </DialogContentText>
                        <Grid container justify="center">
                            <Box component="fieldset" borderColor="transparent">
                                <Rating
                                    name="simple-controlled"
                                    value={comment.rating}
                                    onChange={(event, newValue) => {
                                        console.log(newValue, event);
                                        setComment({ ...comment, rating: newValue });
                                    }}
                                />
                            </Box>
                        </Grid>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Título del comentario"
                            value={comment.title}
                            onChange={(e) =>
                                setComment({ ...comment, title: e.target.value })
                            }
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Comentario"
                            value={comment.comment}
                            onChange={(e) =>
                                setComment({ ...comment, comment: e.target.value })
                            }
                            multiline
                            rows={2}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
              </Button>
                        <Button onClick={handleSubmit} color="primary">
                            Valorar
              </Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        </>
    )
}
