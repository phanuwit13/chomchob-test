import React, { Component } from 'react'
import Menu from '../../components/nav/menu'
import classify from '../../data/classify.json'
export default class NavPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            classify: []
        }
      }
    
      componentDidMount () {
        this.setValue()
      }
    
      setValue = () => {
        this.setState({
            classify: classify
        })
      }
    render() {
        return (
            <div>
                <Menu {...this.state } {...this.props}/>
            </div>
        )
    }
}
