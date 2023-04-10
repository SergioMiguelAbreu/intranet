import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import '../Title/title.css'

export default class Title extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            titulo: '',
            

        }
    }


  render() {
    return (
      <div className='pagetitle mt-5'>
        <h3>{this.props.titulo}</h3>
      </div>
    )
  }
}
