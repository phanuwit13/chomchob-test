import React, { Component,Fragment } from 'react'
import ContentPage from './contentPage'
export default class index extends Component {
    render() {
        return (
            <Fragment>
                <ContentPage {...this.props}/>
            </Fragment>
        )
    }
}
