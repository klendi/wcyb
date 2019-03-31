import React from 'react'
import { Col, Image } from 'react-bootstrap'
import NumFormat from '../utils/NumbersToMoney'

function Item(props) {
  const { title, img, price } = props
  return (
    <Col className="item" md={3} sm={12} xl={3}>
      <div>
        <Image className="item-image" src={img} rounded />
        <div className="item-body">
          <h1 className="item-title">{title}</h1>
          <p className="item-price">${NumFormat(price)}</p>
        </div>
      </div>
    </Col>
  )
}

Item.propTypes = {
  img: String,
  title: String,
  price: Number
}

export default Item

// mqS8Ab2gN2s4ipX$ : pass
