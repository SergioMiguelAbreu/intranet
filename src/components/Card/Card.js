import '../Card/Card.css';
import React, { Component } from 'react';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class card extends Component {


    constructor(props) {
        super(props)
        
        this.state = {
            title: '',
            description: '',
            style: '',
            href: '',
        }
    }

  render() {
    return (
      <>
            <Col md={2} className='p-0'>
              <div className='card-body' style={this.props.style}>
                <h4 className='card-title'>{this.props.title}</h4>
                <p>{this.props.description}</p>
                <a target="_blank" rel="noreferrer" href={this.props.href} className='g-button'>Entrar</a>
              </div>
            </Col>
      </>
    )
  }
}
