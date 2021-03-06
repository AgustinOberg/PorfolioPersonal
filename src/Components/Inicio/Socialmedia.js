import { Button } from '@material-ui/core'
import React from 'react'

export const Socialmedia = () => {
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Button color="primary" href="https://www.linkedin.com/in/aguilera-agustin/" style={{ color: "#01353E" }}>Linkedin</Button>
            <Button color="primary" href="https://github.com/Aguilera-Agustin" style={{ color: "#01353E", marginRight: "5%", marginLeft: "5%" }}>Github</Button>
            <Button color="primary" href="mailto:agustin.aguilera424@gmail.com" style={{ color: "#01353E" }}>Email</Button>
        </div>
    )
}
