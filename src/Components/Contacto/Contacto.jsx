import React from 'react'
import { TableContainer, Table, Grid, Typography, TableRow, TableCell, Paper, TableBody, Divider } from '@material-ui/core'
import { generate as generarKey } from 'shortid'

const Contacto = () => {
    const tiposDeContacto = [{
        tipo: "GITHUB",
        enlace: "github.com/Aguilera-Agustin"
    },
    {
        tipo: "MAIL",
        enlace: "agustin.aguilera424@gmail.com"
    },
    {
        tipo: "LINKEDIN",
        enlace: "linkedin.com/in/aguilera-agustin/"
    },
    {
        tipo: "CELULAR",
        enlace: "11-2389-0018"
    }
    ]
    return (<>
        <Typography variant="h4" color="textPrimary" align="center" style={{ margin: "0.7rem" }}>
            Contacto
            </Typography>
        <Divider style={{ marginBottom: "30px" }} />
        <Grid container justify="center" >
            <Grid item xl={6} lg={7} md={7} sm={10} xs={12} >

                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableBody>
                            {tiposDeContacto.map(item => (

                                <TableRow key={generarKey()}>
                                    <TableCell component="th" scope="row">
                                        {item.tipo}
                                    </TableCell>
                                    <TableCell align="right">{item.enlace}</TableCell>
                                </TableRow>
                            ))}


                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    </>
    )
}

export default Contacto
