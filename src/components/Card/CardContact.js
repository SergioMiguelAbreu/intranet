import '../Card/Card.css';
import React, { Component } from 'react';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


export default class cardContact extends Component {


    constructor(props) {
        super(props)
        
        this.state = {
            title: '',
            description: '',
            style: '',
            href: '',
            to: '',

        }
    }

  render() {
    return (
      <>
            <Col md={2} className='p-0 col-md-2-new'>
              <div className='card-body' style={this.props.style}>
                <h4 className='card-title'>{this.props.title}</h4>
                <p>{this.props.description}</p>
                <Link to={this.props.internalLink} className='g-button'>Entrar</Link>
              </div>
            </Col>
      </>
    )
  }
}
