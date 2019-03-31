import React from 'react'
import Item from './Item'
import { Row } from 'react-bootstrap'
import { connect } from 'react-redux'
// import InfiniteScroll from 'react-infinite-scroller' TODO: we will implement this soon

class ItemContainer extends React.Component {
  render() {
    return (
      <div>
        <Row className="item-container">
          {this.props.itemsList.map(list => (
            <Item
              key={list.key}
              title={list.name}
              img={list.image}
              price={list.price}
            />
          ))}
        </Row>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  itemsList: state.itemsReducer.itemsList
})

export default connect(mapStateToProps)(ItemContainer)
