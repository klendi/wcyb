import React, { Component } from 'react'
import { Form, Button, Container, Alert } from 'react-bootstrap'
import axios from 'axios'

export default class CreateItem extends Component {
  state = {
    name: '',
    image: '',
    price: 0,
    successShow: false,
    errorShow: false
  }
  onSubmit = e => {
    e.preventDefault()
    const baseURI =
      process.env.REACT_APP_BASE_URL_API || 'http://localhost:8000'
    console.log(baseURI)
    axios
      .post(`${baseURI}/create/item`, {
        name: this.state.name,
        image: this.state.image,
        price: this.state.price
      })
      .then(({ data }) => {
        console.log('got it', data)
        this.setState({ successShow: true })
      })
      .catch(err => {
        this.setState({ successShow: true })
        throw new Error(err)
      })
  }
  handleName = e => {
    this.setState({ name: e.target.value })
  }
  handleImageURI = e => {
    this.setState({ image: e.target.value })
  }

  handlePrice = e => {
    this.setState({ price: e.target.value })
  }
  render() {
    return (
      <Container>
        <h1>Create a new Item</h1>
        <br />
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={this.handleName}
              value={this.state.name}
              type="text"
              placeholder="Enter name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image URI</Form.Label>
            <Form.Control
              value={this.state.image}
              onChange={this.handleImageURI}
              type="text"
              placeholder="Enter image URI"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              value={this.state.price}
              onChange={this.handlePrice}
              type="number"
              placeholder="Enter price"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <br />
        <Alert
          variant="success"
          dismissible
          onClick={() => this.setState({ successShow: false })}
          show={this.state.successShow}
        >
          Successfully Created
        </Alert>
        <Alert
          variant="danger"
          dismissible
          onClick={() => this.setState({ errorShow: false })}
          show={this.state.errorShow}
        >
          Error, perhaps it already exists, try again
        </Alert>
      </Container>
    )
  }
}
