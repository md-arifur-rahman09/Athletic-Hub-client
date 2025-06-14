import Events from "./Events";
import Slider from "./Slider";

const eventsPromise = fetch('http://localhost:3000/allEvents').then(res => res.json());
const Home = () => {

    return (
        <div>
            <Slider></Slider>
            <Events eventsPromise={eventsPromise}> </Events>

        </div>
    );
};

export default Home;