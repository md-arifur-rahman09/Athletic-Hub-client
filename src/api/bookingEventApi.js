
export const bookingEventsFetcher = async (email) => {
    const res = await fetch(`http://localhost:3000/bookings?email=${email}`);
    const data = await res.json();
    return data;
};
