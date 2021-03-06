import React from 'react'
import { Box, Avatar, Grid, Typography, Button } from '@material-ui/core'
import avatar from '../../Img/avatar.svg'
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';
import {Socialmedia} from '../Inicio/Socialmedia'
import { Navbar } from '../Navbar';
import { Info } from './Info';

const estilos = makeStyles(theme => ({
    mainContainer: {
        height:'90vh',
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
    },
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    mainText: {
        color: "#01353E",
        marginBottom: '3px',
        letterSpacing: "1px",

    },
    secText: {
       textAlign:'center',
        padding: "1px 20px",
        color: "#A3A5AA",
        fontSize:'0.9rem'
    },
    social: {

    },
}))

const Index = () => {
    const classes = estilos()

    return (
        <>
            <div  className={classes.mainContainer}>
                <div>
                    <Grid container justify="center">
                        <Avatar src={avatar} className={classes.avatar} />
                    </Grid>
                    <Typography variant="h4" color="initial" className={classes.mainText}>
                        <b>{"<Aguilera Agustin/>"}</b>
                    </Typography>
                    <Typography variant="h6" className={classes.secText} color="initial">
                        <Typed
                            strings={['PROGRAMADOR HTML', 'PROGRAMADOR CSS', 'PROGRAMADOR JAVASCRIPT', 'PROGRAMADOR REACT JS', 'PROGRAMADOR JAVA']}
                            typeSpeed={90}
                            backSpeed={70}
                            loop
                            />
                    </Typography>

                </div>
            </div >
            <div className={classes.social} >
                <Socialmedia />
            </div>

            <Info/>


        </>
    )
}

export default Index
