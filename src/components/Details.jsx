import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = ({mvs}) => {
  const {id}=useParams()
  const item=mvs.find(el=>el.id==id)
  console.log(id)
  console.log(item)
  console.log(typeof(id))

  return (
    <div>
        <img src={item.poster} alt={item.name}/>
        <h1>{item.name}</h1>
        <Link to="/">
        <button className='btn'>Go Home</button>
        </Link>
    </div>
      );
};

export default Details;