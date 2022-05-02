import React, { Component,Fragment } from 'react'
import Nav from './container/nav/index'
import Footer from './container/footer/index'
import Content from './container/contents/index'
import Detail from './container/detail/index'
import Cart from './container/cart/index'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      detail:[]
    }
    this.handleSetDetail = this.handleSetDetail.bind(this);
  }
  handleSetDetail(value){
    this.setState({detail:value})
    localStorage.setItem('detail', JSON.stringify(value));
  }
  render() {
    return (
      <Fragment>
        <Router>
          <Nav  {...this.state} />
          <Switch>
            <Route path={'/'} exact={true}>
              <Content action={this.handleSetDetail}/>
            </Route>
            <Route path={'/detail'} exact={true}>
              <Detail {...this.state} action={this.handleSetDetail} />
            </Route>
            <Route path={'/cart'} exact={true}>
              <Cart {...this.state} />
            </Route>
            <Route path={'**'}>
              <Content />
            </Route>
          </Switch>
        </Router>
        {/* <Content /> */}
        <Footer/>
      </Fragment>
    )
  }
}
