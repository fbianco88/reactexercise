import React from "react";


function Table (props){
return (
      <tr>
          <td>{props.title}</td>
          <td>{props.length}</td>
          <td>{props.rating}</td>
          <td>{props.gender}</td>
          <td>{props.awards}</td>
      </tr>
   
)
}
export default Table