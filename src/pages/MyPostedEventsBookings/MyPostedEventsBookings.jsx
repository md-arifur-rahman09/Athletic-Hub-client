import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router';
import { useTitle } from '../../hooks/usetitle';
import { AuthContext } from '../../authContext/AuthContext';

const MyPostedEventsBookings = () => {
  const [eventInfo, setEventInfo] = useState({});
  const { user } = use(AuthContext);
  const myPostedEventsBookings = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  useTitle('Total Bookings In Single Event');

  useEffect(() => {
    fetch(`https://athletic-hub-server-blue.vercel.app/events?email=${user.email}`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        const matchedEvent = data.find((e) => e._id === id);
        if (matchedEvent) {
          setEventInfo(matchedEvent);
        }
      });
  }, [user, id]);

  return (
    <div className="pt-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-16 text-base-content">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="btn btn-xs  btn-primary mb-6 hover:bg-blue-300"
      >
        ⬅ Back
      </button>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-base-content">
        Total Bookings for: <span className="text-primary">{eventInfo?.eventName}</span>
      </h1>
      <h2 className="text-xl text-center mb-10">
        Total Bookings: {myPostedEventsBookings?.length}
      </h2>

      <div className="overflow-x-auto rounded-xl border border-base-300 dark:border-base-content/10 bg-base-100 shadow-sm">
        <table className="table text-sm md:text-base">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Phone</th>
              <th>Note</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {myPostedEventsBookings?.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="font-semibold">{book.name}</div>
                  <div className="text-sm text-base-content/60">{book.email}</div>
                </td>
                <td>{book.phone}</td>
                <td className="text-base-content/80">{book.note}</td>
                <td className="text-base-content/80">{book.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedEventsBookings;
