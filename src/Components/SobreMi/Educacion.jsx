import React from 'react'
import { Divider, Typography, Grid, Card, CardContent } from '@material-ui/core'
import { generate as generarKey } from 'shortid'

const Educacion = () => {
    const educacion = [{
        anio: "2018 - Actual",
        titulo: "Ingeniería en Computación",
        donde: "Universidad Nacional de Tres de Febrero"
    },
    {
        anio: "2020",
        titulo: "Firebase",
        donde: "Documentación Oficial"
    },
    {
        anio: "2020",
        titulo: "React JS + Router + Hooks",
        donde: "Udemy"
    },
    {
        anio: "2020",
        titulo: "Bootstrap + Material UI",
        donde: "Documentación oficial"
    },
    {
        anio: "2019",
        titulo: "Javascript",
        donde: "Udemy"
    },
    {
        anio: "2018",
        titulo: "HTML 5",
        donde: "Udemy"
    },

    ]
    return (
        <div>
            <Divider style={{ marginTop: "30px" }} />
            <Typography variant="h4" color="textPrimary" align="center" style={{ margin: "0.7rem" }}>
                Educación
            </Typography>
            <Divider style={{ marginBottom: "30px" }} />

            <Grid container>
                {educacion.map(item => (

                    <Grid item md={4} lg={4} sm={6} xs={12} key={generarKey()}>
                        <Card raised={true} style={{ margin: "6px 20px " }} >
                            <CardContent >
                                <Typography color="textSecondary" gutterBottom>
                                    {item.anio}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {item.titulo}
                                </Typography>
                                <Typography color="textSecondary">
                                    {item.donde}
                                </Typography>

                            </CardContent>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Educacion
