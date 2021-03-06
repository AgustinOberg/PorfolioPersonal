import { Button, Typography } from '@material-ui/core'
import React from 'react'

export const Navbar = () => {
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'flex-end', marginTop:'1%'}}>
            <div style={{marginRight:'5%'}}>
                <Button style={{color: "#01353E"}}>About Me </Button>
            </div>
            <div style={{marginRight:'3%'}}> 
                <Button style={{color: "#01353E"}}>{'<Contact>'}</Button>
            </div>
        </div>
    )
}
