import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Divider } from '@material-ui/core'
import trz1 from '../../Img/trz1.jpg'
import trz2 from '../../Img/trz2.jpg'
import baldosa from '../../Img/baldosa.jpg'
import { generate as generarKey } from 'shortid'

const cadaProyecto = [
    {
        titulo: "Cajero Automático TRZ",
        descripcion: "Proyecto dictado por la Universidad Nacional de Tres de febrero. Consiste en simular un cajero automático usando JAVA, sin base de datos SQL. En el mismo se puede realizar transacciones, depositos y extracciones",
        imagen: trz1,
        git: "https://github.com/Aguilera-Agustin/CajeroAutomaticoTRZ"
    },
    {
        titulo: "Banco TRZ",
        descripcion: "Proyecto realizado de forma autónoma, en formato web.  La pagina web BancoTRZ tiene la intención de simular un banco real, en donde un usuario puede consultar su HomeBanking y realizar operaciones.",
        imagen: trz2,
        git: "https://github.com/Aguilera-Agustin/CajeroAutomaticoTRZ-2",
        vivo: "https://cajeroautomaticotrz.web.app/"
    },
    {
        titulo: "Minima baldosa posible",
        descripcion: "Programa recursivo que calcula la mínima cantidad de baldosas posibles (de 2^i x 2^i) en un espacio de NxM, utilizando el lenguaje JAVA.",
        git: "https://github.com/Aguilera-Agustin/MinimaBaldosaPosible",
        imagen: baldosa
    }
]


const Proyectos = () => {

    return (
        <>
            <Typography variant="h4" color="textPrimary" align="center" style={{ margin: "0.7rem" }}>
                Proyectos
            </Typography>
            <Divider style={{ marginBottom: "30px" }} />
            <Grid container justify="center" >

                {cadaProyecto.map(item => (
                    <Grid item xl={3} lg={3} md={3} sm={6} xs={12} style={{ margin: "0 25px" }} key={generarKey()}>
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={item.imagen}
                                    title={item.titulo}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.titulo}
                                    </Typography>

                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.descripcion}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" href={item.git} >
                                    GIT
                            </Button>
                                {item.vivo && (<Button size="small" color="primary" href={item.vivo}>
                                    DEMO
                                </Button>)}

                            </CardActions>
                        </Card>
                    </Grid>

                ))}
            </Grid>
        </>
    )
}

export default Proyectos
