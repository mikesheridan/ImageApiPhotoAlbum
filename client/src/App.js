import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './skeleton.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './App.css'
import UserList from './containers/UserList/UserList'
import UserDetails from './containers/UserDetails/UserDetails'
import Photos from './containers/Photos/Photos'

class App extends Component {
  state = {
    formObject: {},
    applicationSubmitted: false
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <div className='App'>
          <Header />
          <main className='App-main'>
            <Route path='/' exact component={UserList} />
            <Route path='/UserDetails/:id' component={UserDetails} />
            <Route path='/Photos/:id' component={Photos} />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
