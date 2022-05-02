import React, { Component,Fragment } from 'react'
import Content from '../../components/contents/content'
import axios from 'axios'
export default class contentPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: []
        }
      }
      componentDidMount () {
        axios({
            method: 'GET',
            url: 'https://cc-mock-api.herokuapp.com/product'
          })
          .then((response) => {
            this.setValue(response.data)
          }).catch(err => console.error(err))
      }
    
      setValue = (data) => {
        console.log(data)
        this.setState({
            data: data
        })
      }
    render() {
        return (
            <Fragment>
                <Content { ...this.state }{ ...this.props }/>
            </Fragment>
        )
    }
}
