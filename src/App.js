import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import LoadingBar from 'react-top-loading-bar'
import InputField from './components/InputField'
import ItemContainer from './components/ItemContainer'
import { fetchItems } from './actions/index'
import { beginTheBar } from './utils/startStopTheBar'
import { connect } from 'react-redux'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <LoadingBar progress={this.props.progress} color="#2ecc71" />
        <Container>
          <Header />
          <InputField onSubmit={this.onSubmit} />
          <br />
          <ItemContainer />
        </Container>
        <div className="center credits">
          Made with ❤️ by{' '}
          <a href="https://klendi.me" target="_blank">
            Klendi Gocci
          </a>
        </div>
      </div>
    )
  }

  onSubmit = value => {
    beginTheBar()
    fetchItems(value)
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    progress: state.loadingBarReducer.progress
  }
}
export default connect(mapStateToProps)(App)
