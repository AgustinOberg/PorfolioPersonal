import React from 'react'
import { Divider, Typography, Grid, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { generate as generarKey } from 'shortid'

const Habilidades = () => {
    const habilidadesProgramacion = ["JAVA", "HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "REACT JS", "MATERIAL UI", "GIT", "FIREBASE"]
    const habilidadesPersonales = ["Trabajo en equipo", "Facilidad para expresarme", "Coordialidad", "Respeto", "Gran capacidad de aprendizaje"]
    return (
        <>
            <Divider style={{ marginTop: "30px" }} />
            <Typography variant="h4" color="textPrimary" align="center" style={{ margin: "0.7rem" }}>
                Habilidades
            </Typography>
            <Divider style={{ marginBottom: "30px" }} />

            <Grid container justify="center">
                <Grid item md={5} lg={5} sm={5} xs={12} >
                    <Accordion style={{ margin: "2px 15px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>Programación</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                {habilidadesProgramacion.map((item) => (

                                    <ListItem key={generarKey()}>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item md={5} lg={5} sm={5} xs={12} >
                    <Accordion style={{ margin: "2px 15px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>Personal</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                {habilidadesPersonales.map((item) => (

                                    <ListItem key={generarKey()}>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </>
    )
}

export default Habilidades
