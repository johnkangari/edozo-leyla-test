import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { Row, Col, Table, Form, Pagination } from 'react-bootstrap';


class LeaseTable extends Component{

  constructor() {
    super();
    this.state = {
      keywords: '',
      sizePerPage: 10,
      currentPage: 1
    };
  }
  
  componentWillMount(){

    this.props.allCompsLease(this.state.sizePerPage, this.state.currentPage, this.state.keywords)

  }

  pagination = ()=> {
    const pagescount =  
  }

  handleSizePerPage = (event) => {
    let size = event.target.value;
    this.setState(
      { sizePerPage : size }
    )
    this.props.allCompsLease(this.state.sizePerPage, this.state.currentPage, this.state.keywords)
  }

  getKeywords = (event) => {
    if (event.key === "Enter") {
      let key = event.target.value;
      this.setState(
        { keywords : key }
      )
      this.props.allCompsLease(this.state.sizePerPage, this.state.currentPage, this.state.keywords)
    }

  }

  render(){

    const data = this.props.comps.compsLease
    const totalSize = 200

    return(
      <div>
       <Row>
          <Col md="2">
            <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column md="auto" sm={2}>
            <strong>Show</strong>
            </Form.Label>
            <Col md="auto" sm={2} className="paddingReset">
            <Form.Control as="select" onChange={this.handleSizePerPage}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </Form.Control>
            </Col>
            <Form.Label column sm={5}>
            <strong>entries</strong>
            </Form.Label>
            </Form.Group>
          </Col>
          <Col md="3">
            <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            <strong>Filter:</strong>
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="" onKeyPress={this.getKeywords} />
            </Col>
            </Form.Group>
          </Col>
        </Row>
        <Table responsive>
          <thead>
            <tr>
              <th> heading 1</th>
              <th> heading 2</th>
              <th> heading 3</th>
              <th> heading 4</th>
              <th> heading 5</th>
              <th> heading 6</th>
            </tr>
          </thead>
          <tbody>

          {data && data.length > 0 ?
                data.map( item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.id}</td>
                    <td>{item.id}</td>
                    <td>{item.id}</td>
                    <td>{item.id}</td>
                    <td>{item.id}</td>
                  </tr>
                ))
                : null
              }
          </tbody>
        </Table>
        
        <Pagination>
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
        </Pagination>


      </div>
    )
  }
}

const mapStateToprops = (state) =>{
  return {
    comps: state.comps
  }
}

export default connect(mapStateToprops,actions)(LeaseTable);