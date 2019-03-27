import React from 'react';
import { DropdownButton, Dropdown, Form } from 'react-bootstrap';

const Status = () =>{
    return (
        // <DropdownButton id="" title="Draft">
        //     <Dropdown.Item href="#/action-1">Signed off</Dropdown.Item>
        //     <Dropdown.Item href="#/action-2">Groups</Dropdown.Item>
        //     <Dropdown.Item href="#/action-3">Shared</Dropdown.Item>
        //     <Dropdown.Item href="#/action-4">Received</Dropdown.Item>
        //     <Dropdown.Item href="#/action-5">Requests</Dropdown.Item>
        //     <Dropdown.Item href="#/action-6">Pending</Dropdown.Item>
        //     <Dropdown.Item href="#/action-7">All</Dropdown.Item>
        // </DropdownButton>
        <Form.Control as="select">
            <option>Signed off</option>
            <option>Groups</option>
            <option>Shared</option>
            <option>Received</option>
            <option>Pending</option>
            <option>All</option>
        </Form.Control>
    )
  }
  
  export default Status;