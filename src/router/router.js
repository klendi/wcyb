import React from 'react'
import { Route, Switch, Redirect, Router } from 'react-router-dom'
import CreateItem from '../container/CreateItem'
import Main from '../App'
import NotFound from './../container/NotFound'

const router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/create/item" exact component={CreateItem} />
      <Route path="/not-found" component={NotFound} />

      <Redirect to="/not-found" />
    </Switch>
  )
}

export default router
