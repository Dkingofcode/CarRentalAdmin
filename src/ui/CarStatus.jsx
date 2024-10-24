// import React from 'react';

import Button from "./Button";

const CarStatus = () => {
  return (
    <div>
      
      <div>
      <h1>Live Car Status</h1>
      <p><img  /> Filter</p>
      </div>
      
      <table>
        <thead>
          <tr>No.</tr>  
          <tr>Car no.</tr>  
          <tr>Driver</tr>    
          <tr>Status</tr>    
          <tr>Earning</tr>    
        </thead>

        <tbody>
          <tr>
           <td>01</td>
           <td>6465</td>  
           <td><img  /> Alex Noman</td>  
           <td><div></div> Completed</td>  
           <td>$ 35.44</td>  
           <td><Button>Details</Button></td>  
          </tr>

          <tr>
           <td>01</td>
           <td>6465</td>  
           <td><img  /> Alex Noman</td>  
           <td><div></div> Completed</td>  
           <td>$ 35.44</td>  
           <td><Button>Details</Button></td>  
          </tr>

          <tr>
           <td>01</td>
           <td>6465</td>  
           <td><img  /> Alex Noman</td>  
           <td><div></div> Completed</td>  
           <td>$ 35.44</td>  
           <td><Button>Details</Button></td>  
          </tr>  
        </tbody>
      </table>

      
    </div>
  )
}

export default CarStatus;
