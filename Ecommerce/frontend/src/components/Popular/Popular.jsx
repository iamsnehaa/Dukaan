import React from 'react'
import './Popular.css'
import data_product from '../assets/data'

const Popular = () => {
  return (
    <div className='Popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className='popular-item'>
            {data_product.map((item, i) => {
                return (
                    <div key={i} className='product'>
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>New Price: ${item.new_price}</p>
                        <p>Old Price: <s>${item.old_price}</s></p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Popular
