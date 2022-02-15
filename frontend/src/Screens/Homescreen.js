import React from 'react'
import Products from '../Products'
import Product from '../components/Products'
import {Row, Col} from 'react-bootstrap'

const Homescreen = () => {
  return (
    <>
    <h2>Latest Products</h2>
    <Row>
        {Products.map((Products) => (
            <Col key={Products.id} sm={12} md={6} lg={4} xl={3}>
                <Product products={Products}/>
            </Col>
        ))}
    </Row>
    </>
  )
}

export default Homescreen