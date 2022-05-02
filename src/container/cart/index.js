import React, { Component,Fragment } from 'react'
import CartPage from './cartPage'
export default class index extends Component {
    render() {
        return (
            <Fragment>
                <CartPage {...this.props}/>
            </Fragment>
        )
    }
}
