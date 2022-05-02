import React, { Component } from 'react'
import DetailPage from './detailPage'
export default class index extends Component {
    render() {
        return <DetailPage {...this.props}/>
    }
}
