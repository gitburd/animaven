import React, { CFragment, Fragment } from 'react'
import preload from './preload.gif'


const Spinner = () => {
    return (
        <Fragment>
            <img src={preload} alt="loading..." style={{width:'100px', margin:'20px auto', display:'block'}}/>
        </Fragment>
    )
}

export default Spinner
