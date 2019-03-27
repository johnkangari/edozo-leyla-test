import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

const groupContainer = ({ group }) => {
    return(  
      <div>
        group
      </div>
    )
}

function mapStateToProps(state){
    return {
        group:state.group
    }   
}

export default connect(mapStateToProps, actions)(groupContainer)