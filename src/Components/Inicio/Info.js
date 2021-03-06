import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Button, Paper } from '@material-ui/core'

export const Info = () => {
    return (
        <Paper square={true} elevation={7} style={{marginTop:'50px', backgroundColor: '#63fadc', padding:'60px', display:'flex', flexDirection:'column', alignItems:'center'}}>
          
            <Typography variant="h3" align="center" >¡Hola!</Typography>
            <Typography variant="subtitle1" align="center" style={{marginTop:'2rem'}} >Proveniente de <b>Buenos Aires, Argentina </b>comencé con mi carrera como programador en el 2018. Tengo un fuerte interés en el desarrollo de aplicaciones tanto para WEB como para móvil. Me encanta proponerme retos y proyectos y <b>cumplirlos</b> de forma individual así como también con un equipo de trabajo aprendiendo nuevas tecnologías y mejorando mis prácticas gracias a mis compañeros. </Typography>
            <Button variant="contained" style={{width:'20em',height:'4em', marginTop:'3rem'}}>¡Descarga mi CV!</Button>
        </Paper>
    )
}
