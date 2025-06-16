
export const bookingEventsPromise = (email) => {

    return fetch(`https://athletic-hub-server-blue.vercel.app/bookings?email=${email}`,{
        credentials: "include"
    })
        .then(res => res.json());

};
