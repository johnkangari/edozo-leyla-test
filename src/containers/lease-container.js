import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import TypeBtn from '../components/comps/type';
import Status from '../components/comps/status';
import Table from '../components/comps/lease/table';
import { Container, Row, Col } from 'react-bootstrap';

class LeaseContainer extends React.Component  {
  
    render(){
      return( 
        
        <div className="dashboardContent">
          <Container>
              <Row className="paddingRowBottom">
                <Col md="auto">
                  <TypeBtn/>
                </Col>
                <Col md="auto">
                  <Status/>
                </Col>
              </Row>
            <Table/>
          </Container>
        </div> 
      )
    }
  }

function mapStateToProps(state){
    return {
      comps:state.copms 
    } 
}

export default connect(mapStateToProps, actions)(LeaseContainer)