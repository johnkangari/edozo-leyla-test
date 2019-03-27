import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const Type = () =>{
    return (
        <ButtonGroup aria-label="Basic example">
            <Button href="/">Lease</Button>
            <Button href="/comps/sale">Sale</Button>
            <Button href="/comps/group">Group</Button>
        </ButtonGroup>
    )
  }
  
  export default Type;