import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ModalContextProvider from 'contexts/modal.context'
import { NavBar, Modal } from 'components/common'
import Campaigns from './campaigns'
import Create from './create'


const Dashboard = () => {
  return (
    <ModalContextProvider>
      <Modal></Modal>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/campaigns" component={Campaigns}></Route>
        <Route path="/campaigns/:id" component={Create}></Route>
      </Switch>
    </ ModalContextProvider>
  )
}

export default Dashboard
