import React from 'react';
import { useLoaderData } from 'react-router';
import UseTitle from '../../hooks/UseTitle';

const MyPostedEventsBookings = () => {
    const myPostedEventsBookings =useLoaderData();
    // console.log(myPostedEventsBookings);
    UseTitle('Total Bookings In Single Event')

    
    return (
       <div className="overflow-x-auto">
        <h1 className='font-bold text-4xl text-center my-10'>Total  Bookings  : {myPostedEventsBookings.length}</h1>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Job</th>
        <th>Note</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        myPostedEventsBookings?.map((book,index)=>  <tr key={book._id} >
        <th>{index+1}</th>
        <td>{book.email} 
            <br />
            {book.name}
        </td>
        <td>{book.phone}</td>
        <td>{book.note}</td>
        <td>{book.details}</td>
</tr>)
     }
     
    </tbody>
  </table>
</div>
    );
};

export default MyPostedEventsBookings;