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


            <div className="mt-10">
                <Testimonials></Testimonials>


            </div>
            <div className="mt-10">
                <PopularSports ></PopularSports>
            </div>

        </div>
    );
};

export default Home;