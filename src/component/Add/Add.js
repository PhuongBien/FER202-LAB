import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { Alert, AlertTitle, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material';

export default function Add() {
    const baseURL = `https://66722b9ae083e62ee43e304d.mockapi.io/Orchids`;
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false);
    };


    const formik = useFormik({
        initialValues: {
            image: "",
            name: "",
            rating: 0,
            origin: "",
            description: "",
            video: "",
        },
        onSubmit: (values) => {
            fetch(baseURL, {
                method: 'POST',
                body: JSON.stringify(values), headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'same-origin'
            }).then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP Status: ${response.status}`)
                }
                return response.json()
            })
                .then(data => setOpen(true))
                .catch(error => console.log(error.message));
        },

        validationSchema: Yup.object({
            image: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
            name: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            rating: Yup.number().integer().required("Required.").max(5, "Must be one digit from 0 to 5"),
            origin: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            description: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            video: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),   
        }),
    });

    return (
        <div style={{margin: '20px'}}>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    margin="dense"
                    name="image"
                    label="URL of image"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.image}
                    onChange={formik.handleChange}
                />
                {formik.errors.image && (<Typography variant="caption" color="red">{formik.errors.image}</Typography>)}
                <TextField
                    autoFocus
                    margin="dense"
                    name="name"
                    label="name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}
                <TextField
                    margin="dense"
                    name="rating"
                    label="rating"
                    type="number"
                    fullWidth
                    variant="standard"
                    value={formik.values.rating}
                    onChange={formik.handleChange}
                />
                {formik.errors.rating && (<Typography variant="caption" color="red">{formik.errors.rating}</Typography>)}
                <TextField
                    margin="dense"
                    name="origin"
                    label="origin"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.origin}
                    onChange={formik.handleChange}
                />
                {formik.errors.origin && (<Typography variant="caption" color="red">{formik.errors.origin}</Typography>)}
                <TextField
                    margin="dense"
                    name="description"
                    label="Information about Orchids"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                />
                {formik.errors.description && (<Typography variant="caption" color="red">{formik.errors.description}</Typography>)}
                <TextField
                    margin="dense"
                    name="video"
                    label="Intro video"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.video}
                    onChange={formik.handleChange}
                />
                {formik.errors.video && (<Typography variant="caption" color="red">{formik.errors.video}</Typography>)}
                <br />
                <Button variant="contained" size="small" type='submit'>Add</Button>
            </form>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-name"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Congraturation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Alert severity="success">
                        <AlertTitle>Adding successful!</AlertTitle>
                        </Alert>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {/* <Button><Link onClick={handleClose} to='/' style={{ textDecoration: "none" }}>Home</Link></Button> */}
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
