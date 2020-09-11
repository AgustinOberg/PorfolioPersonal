import React from 'react'
import { Box, Avatar, Grid, Typography, Button } from '@material-ui/core'
import avatar from '../../Img/avatar.svg'
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';


const estilos = makeStyles(theme => ({
    contenedorPrincipal: {
        position: "absolute",
        transform: "translate(-50%, -50%)",
        top: "40%",
        left: "50%",
        textAlign: "center",
        width: "100vw",
        zIndex: 1
    },
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    textoPrincipal: {
        display: "block",
        color: "#01353E",
        padding: "3px 23px",
        letterSpacing: "1px",

    },
    textoSecundario: {
        display: "inline-block",
        padding: "1px 20px",
        color: "#A3A5AA"
    },
    botonesContacto: {
        position: "absolute",
        top: "80%",
        left: "30%",
        right: "30%"
    }
}))

const Index = () => {
    const classes = estilos()

    return (
        <>
            <Box component="div" className={classes.contenedorPrincipal}>
                <Grid container justify="center">
                    <Avatar src={avatar} className={classes.avatar} />
                </Grid>
                <Typography variant="h4" color="initial" className={classes.textoPrincipal}>
                    {"<"}<b>Aguilera Agustín</b>{">/"}
                </Typography>
                <Typography variant="h6" className={classes.textoSecundario} color="initial">
                    <Typed
                        strings={['PROGRAMADOR HTML', 'PROGRAMADOR CSS', 'PROGRAMADOR JAVASCRIPT', 'PROGRAMADOR REACT JS', 'PROGRAMADOR JAVA']}
                        typeSpeed={90}
                        backSpeed={70}
                        loop
                    />
                    <br />

                </Typography>
            </Box >

            <Box className={classes.botonesContacto} component="div">
                <Grid container justify="center">

                    <Button color="primary" href="https://www.linkedin.com/in/aguilera-agustin/" style={{ color: "#01353E" }}>Linkedin</Button>
                    <Button color="primary" href="https://github.com/Aguilera-Agustin" style={{ color: "#01353E", margin: "2px 2vw " }}>Github</Button>
                    <Button color="primary" href="mailto:agustin.aguilera424@gmail.com" style={{ color: "#01353E" }}>Email</Button>
                </Grid>
            </Box>


        </>
    )
}

export default Index
