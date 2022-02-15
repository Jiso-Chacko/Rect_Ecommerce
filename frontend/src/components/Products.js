import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({products}) => {
    console.log(products)
  return (
    <>
    <Card className='my-3 p-3 rounded'>
        <Link to={`/producs/${products.id}`}>
            <Card.Img src={products.image} variant="top"/>
        </Link>
        <Card.Body>
        <Link to={`/producs/${products.id}`}>
            <Card.Title as="div">
                {products.name}
            </Card.Title>
        </Link>

        <Card.Text as="div">
           <Rating value={products.rating} text= {`${products.numReviews} rating`}/>
        </Card.Text>

        <Card.Text as="h4">${products.price}</Card.Text>
        </Card.Body>
    </Card>
    </>
    )
}

export default Product;