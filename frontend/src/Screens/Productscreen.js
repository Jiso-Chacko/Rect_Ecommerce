import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'


const Productscreen = ({ match }) => {
  const { id } = useParams()

  const[product, setProduct] = useState({})

  useEffect(() => {
    
    const fetchProduct = async () => {
      const {data} = await axios.get(`/api/products/${id}`)
  
      setProduct(data)
    }
    fetchProduct()
  }, [id])

  return (
    <>
     <Link className='btn btn-danger my-3' to='/'>
       Go back
     </Link>
     <Row>
       <Col md={4}>
        <Image src={product.image} alt="image" fluid/>
       </Col>

       <Col md={4}>
          <ListGroup variant='flush'>

            <ListGroup.Item>
              <h4>{product.name}</h4>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
            </ListGroup.Item>

            <ListGroup.Item>
              Price : ${product.price}
            </ListGroup.Item>

            <ListGroup.Item>
              Description : {product.description}
            </ListGroup.Item>

          </ListGroup>
       </Col>

      <Col md={3}>
        <Card>

          <ListGroup variant='flush'>
            <ListGroupItem>
              <Row>
                <Col>
                Price :
                </Col>
                <Col>
                <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroupItem>

            <ListGroupItem>
              <Row>
                <Col>
                Status :
                </Col>
                <Col>
                <strong>{product.InStock >0 ? 'Instock' : 'Outofstock'}</strong>
                </Col>
              </Row>
            </ListGroupItem>

            <ListGroup.Item>
              <Button className='btn btn-block' type='button' disable={product.InStock ===0}>Add to cart</Button>
            </ListGroup.Item>

          </ListGroup>

        </Card>
      
      </Col>

     </Row>
    </>
  )
  
}

export default Productscreen