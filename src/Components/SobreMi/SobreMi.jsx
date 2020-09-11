import React from 'react'
import { Divider, Typography } from '@material-ui/core'
import Habilidades from './Habilidades';
import Educacion from './Educacion';


const SobreMi = () => {

    return (
        <>
            <div style={{ margin: "0 30px" }}>
                <Typography variant="h4" color="textPrimary" align="center" style={{ margin: "0.7rem" }}>
                    Sobre mi
            </Typography>
                <Divider style={{ marginBottom: "30px" }} />
                <Typography variant="body1" color="initial" style={{ margin: "0 20px" }}>
                    Soy apasionado por la informática y las nuevas tecnologías, con intención de aprender constantemente y mejorar día a día como programador y persona. Me considero una persona proactiva, pudiendo trabajar en equipo, para aportar y ayudar a los demás a que también lo hagan, y también trabajar solo cuando es necesario.
                    Estoy estudiando Ingeniería en Computación en la Universidad Nacional de Tres de Febrero, y también programación web de forma autónoma.
            </Typography>
                <Habilidades />
                <Educacion />
                <Divider style={{ marginTop: "30px" }} />
                <Typography variant="h4" color="textPrimary" align="center" style={{ margin: "0.7rem" }}>
                    Intereses
               </Typography>

                <Divider style={{ marginBottom: "30px" }} />
                <Typography variant="body1" color="initial" style={{ margin: "0 20px 40px 20px " }}>
                    Me interesa estar en constante formacion y rodeado de gente positiva. En mis momentos libres me gusta jugar al futbol con mis amigos, pasar tiempo con mi familia y hacer cursos online y seguir creciendo profesionalmente.
            </Typography>
            </div>
        </>
    )
}

export default SobreMi
