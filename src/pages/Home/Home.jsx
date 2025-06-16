import UseTitle from "../../hooks/UseTitle";
import Events from "./Events";
import PopularSports from "./PopularSports";
import Slider from "./Slider";
import Testimonials from "./Testimonials";


const eventsPromise = fetch('https://athletic-hub-server-blue.vercel.app/allEvents').then(res => res.json());
const Home = () => {
     UseTitle('Home')

    return (
        <div>
            <Slider></Slider>
            <Events eventsPromise={eventsPromise}> </Events>
            <div>
                <Testimonials></Testimonials>
                <PopularSports></PopularSports>

            </div>

        </div>
    );
};

export default Home;