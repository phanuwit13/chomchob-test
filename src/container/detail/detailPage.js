import React, { Component,Fragment } from 'react'
import Detail from '../../components/contents/detail'
export default class detailPage extends Component {
    render() {
        return (
            <Fragment>
                <Detail {...this.props}/>
            </Fragment>
        )
    }
}
