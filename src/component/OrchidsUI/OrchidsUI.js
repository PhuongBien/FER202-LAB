import React, { useContext, useEffect, useState } from 'react'
// import { ListOrchids } from '../SharedData/ListOfOrchids'
import { Card, Col, Container, Row } from 'react-materialize'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../ThemeContext'
import Swal from 'sweetalert2'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material'

export default function OrchidsUI({user}) {

  const handleDeleteAction = (id) => {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2e7d32',
      cancelButtonColor: 'error',
      confirmButtonText: 'Yes!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://66722b9ae083e62ee43e304d.mockapi.io/Orchids/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          console.log(response);
          if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`)
          }
          Swal.fire({
            title: 'Success!',
            text: `Delete Successfully`,
            icon: 'success',
          });
          setAPIData(APIData.filter(orchids => {
            return orchids.id != id;
          }));
        })
          .catch(error => {
            Swal.fire({
              title: 'Fail!',
              text: `${error.message}`,
              icon: 'error',
            });
          });
      }
    });
  }
  const { theme, toggle, dark } = useContext(ThemeContext)
  // const [orchids, setOrchids] = useState([])

  const [APIData, setAPIData] = useState([])
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
      .then(data => { setAPIData(data) })
      .catch(error => console.log(error.message));
  }, []);

// console.log(user)

  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <Container>
        <Row>
          {APIData.map((orchidsData) =>
            <Col key={orchidsData.id} className='col s4'>
              <Card>
                <img src={orchidsData.image} style={{ width: '275px', height: '200px' }}></img>
                <h3 className='card-title left-align black-text'>
                  {orchidsData.name} <i class="material-icons right">more_vert</i>
                </h3>
                <p className='detail-btgrey lighten-5 left-align'>
                  <Link to={`detail/${orchidsData.id}`}>
                    Detail
                  </Link>
                </p>
                {user.email &&
                  <div style={{ marginTop: '15px', width: '100%', display: 'flex' }}>
                    <Button
                      startIcon={<DeleteIcon />}
                      variant="contained"
                      size="small"
                      sx={{ ml: '20px', marginLeft: '180px', width: '50%' }}
                      onClick={() => handleDeleteAction(orchidsData.id)}
                    >
                      Delete
                    </Button>
                  </div>
                }

              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  )
}
