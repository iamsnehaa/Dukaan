import React from 'react';
import './newCollections.css';
import newCollections from '../assets/new_collections'; // Replace with the actual path to your data

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className='collections'>
        {newCollections.map((item, i) => {
          return (
            <div key={i} className='product'>
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>New Price: ${item.new_price}</p>
              <p>Old Price: <s>${item.old_price}</s></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
