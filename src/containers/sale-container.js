import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

const saleContainer = ({ sale }) => {
    return(  
      <div>
        sale
      </div>
    )
}

function mapStateToProps(state){
    return {
        sale:state.sale
    }   
}

export default connect(mapStateToProps, actions)(saleContainer)