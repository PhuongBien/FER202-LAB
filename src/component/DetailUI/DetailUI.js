import { useParams } from 'react-router-dom';

import React, { useContext, useEffect, useState } from 'react'
// import { ListOrchids } from '../SharedData/ListOfOrchids.js';
import { Container, Icon } from 'react-materialize';
import ModalCase from '../Modal/ModalCase.js';
import { ThemeContext } from '../ThemeContext';

import { useFormik } from 'formik'
import * as Yup from 'yup';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { Button, TextField, Typography } from '@mui/material';

export default function Detail({ user }) {
    const [isOpen, setIsOpen] = useState(false)
    const [orchids, setOrchids] = useState(null)
    const [popUp, setPopUp] = useState(false)
    const [changed, setChanged] = useState(false)

    const userName = useParams();
    const { theme, toggle, dark } = useContext(ThemeContext)
    const baseURL = `https://66722b9ae083e62ee43e304d.mockapi.io/Orchids`;
    useEffect(() => {
        fetch(baseURL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP Status: ${response.status}`)
                }
                return response.json()
            })
            .then(data => {
                const orchidsData = data.find(obj => {
                    return obj.id == userName.id;
                })
                setOrchids(orchidsData)
                formik.setValues({
                    id: orchidsData.id,
                    img: orchidsData.img,
                    title: orchidsData.title,
                    year: orchidsData.year,
                    nation: orchidsData.nation,
                    info: orchidsData.info,
                    clip: orchidsData.clip,
                })
                setChanged(true)
            })
            .catch(error => console.log(error.message));
    }, [changed]);

    // const orchids = ListOrchids.find(obj => {
    //     return obj.id == userName.id;
    // }); 
    const handleOpenPopupUpdateAction = () => {
        setPopUp(true)
    }

    const handleClose = () => {
        setPopUp(false)
    }

    const formik = useFormik({
        onSubmit: (values) => {
            fetch(`https://66722b9ae083e62ee43e304d.mockapi.io/Orchids/${values.id}`, {
                method: 'PUT',
                body: JSON.stringify(values), headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP Status: ${response.status}`)
                }
                return response.json()
            })
                .then(data => {
                    setPopUp(false)
                    setChanged(false)
                })
                .catch(error => console.log(error.message));
        },

        validationSchema: Yup.object({
            image: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
            name: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            rating: Yup.number().integer().required("Required.").max(5, "Must be one digit from 1 to 5"),
            origin: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            description: Yup.string().required("Required.").min(2, "Must be 2 characters or more"),
            video: Yup.string().required("Required.").min(10, "Must be 10 characters or more"),
        }),
    });
    return (
        <div style={{ backgroundColor: theme.backgroundColor, color: theme.color, marginTop: '0px', display: 'flex', justifyContent: 'center' }}>
            {orchids ?
                <div>
                    <Dialog open={popUp} onClose={handleClose} >
                        <DialogTitle>Update Orchids</DialogTitle>
                        <DialogContent>
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
                                    label="Information about orchids"
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
                                <Button onClick={handleClose} color="primary">
                                    Close
                                </Button>
                                <Button variant="contained" size="small" type='submit'>Save</Button>
                            </form>
                        </DialogContent>
                    </Dialog>

                    <Container style={{ display: "flex", justifyContent: "center" }}>
                        <div className='card' style={{ padding: '10px', marginBottom: '50px', width: "fit-content" }}>
                            <div className='product2-top'>
                                <div className='card-image' style={{ paddingBottom: '5px' }}>
                                    <img src={orchids.image} alt='' style={{ width: '600px', height: '400px' }} />
                                    <div className='card-title'>{orchids.title}</div>
                                    <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                                        <Icon>ondemand_video</Icon>
                                    </a>
                                    {isOpen && <ModalCase setIsOpen={setIsOpen} orchids={orchids} />}
                                </div>
                            </div>
                            <div className='grey darken-4 white-text card-content left-align' style={{ width: '600px' }}>
                                <h6>Name:  {orchids.name}</h6>
                                <h6>Color:  {orchids.color}</h6>
                                <h6>Nation:  {orchids.origin}</h6>
                                <h6 style={{ color: 'pink' }}>Description:  {orchids.description}</h6>
                                <p style={{ padding: '10px' }}>{orchids.info}</p>
                                <div className='product2-bottom-details'></div>
                            </div>
                            {user.email &&
                                <Button variant='contained' onClick={handleOpenPopupUpdateAction} color="primary" fullWidth>
                                    Update
                                </Button>
                            }
                        </div>
                    </Container>
                </div> : null}
        </div>
    )
}
