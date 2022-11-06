import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Details = ({mvs}) => {
  const {id}=useParams()
  const item=mvs.find(el=>el.id==id)
  console.log(id)
  console.log(item)
  console.log(typeof(id))

  return (
    <div>
      {
        <Row>
          <Col>
          <h1>Description</h1> 
          <h5>{item.description}</h5>
          </Col>
          <Col>
          <img className='img_detail' src={item.poster} alt={item.name}/>
        
        <Link to="/">
        <button className='btn'>Go Home</button>
        </Link>
          </Col>
        </Row>
      }
    
       
    </div>
      );
};

export default Details;