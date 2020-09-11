import React, { useState } from 'react'
import { Box, AppBar, Toolbar, IconButton, Typography, Avatar, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../../Img/avatar.svg'
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AppsIcon from '@material-ui/icons/Apps';
import ContactsIcon from '@material-ui/icons/Contacts';
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import { Link } from 'react-router-dom'

const estilos = makeStyles(theme => ({
    bloqueLateralContenedor: {
        width: 250,
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    }
}))

const listaMenu = [
    {
        icono: <HomeIcon />,
        texto: "Inicio",
        direccion: "/"
    },
    {
        icono: <AssignmentIndIcon />,
        texto: "Sobre mi",
        direccion: "sobre-mi"
    },
    {
        icono: <AppsIcon />,
        texto: "Proyectos",
        direccion: "proyectos"
    },
    {
        icono: <ContactsIcon />,
        texto: "Contacto",
        direccion: "contacto"
    },
]


const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, abierto) => () => {
        setState({ ...state, [slider]: abierto })
    }

    const classes = estilos()





    const sideList = slider => (
        <Box component="div" className={classes.bloqueLateralContenedor} onClick={toggleSlider("right", false)}>
            < Avatar alt="Agustin Aguilera" src={avatar} className={classes.avatar} />


            <Divider />
            <List>
                {listaMenu.map((item, key) => (

                    <ListItem button key={key} component={Link} to={item.direccion}>
                        <ListItemIcon> {item.icono} </ListItemIcon>
                        <ListItemText> {item.texto} </ListItemText>
                    </ListItem>

                ))}
            </List>
        </Box>
    )




    return (
        <>                                           {/*Barra de nav*/}

            <Box component="nav">
                <AppBar style={{ background: "white" }} position="sticky">
                    <Toolbar>

                        <IconButton edge="start" color="default" aria-label="menu" onClick={toggleSlider("right", true)}>
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="h5" style={{ color: "#5f6368" }}>
                            Portfolio
                         </Typography>
                        <MobilRightMenuSlider
                            open={state.right}
                            onClose={toggleSlider("right", false)}
                        >
                            {sideList("right")}
                        </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>

        </>

    )
}

export default Navbar
