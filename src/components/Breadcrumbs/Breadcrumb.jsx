import React from 'react'
import './Breadcrumb.css'
import arrow_icon from '../assets/breadcrum_arrow.png'

const Breadcrumb = ({ product }) => {
    return (
        <div className='Breadcrumb'>
            HOME <img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon} alt=''/>
            {product?.category || 'Unknown Category'} <img src={arrow_icon} alt=''/>
            {product?.name || 'Unknown Product'}
        </div>
    )
}

export default Breadcrumb;
