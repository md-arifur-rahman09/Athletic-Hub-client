
import { useTitle } from "../../hooks/usetitle";
import Events from "./Events";
import FindClubs from "./FindClubs";
import PopularSports from "./PopularSports";
import Slider from "./Slider";
import Testimonials from "./Testimonials";


const eventsPromise = fetch('https://athletic-hub-server-blue.vercel.app/allEvents').then(res => res.json());
const Home = () => {
    useTitle('Home')

    return (
        <div>

            <div >
                <Slider></Slider>
            </div>

            <div className="mt-5 lg:mx-10">
                <Events eventsPromise={eventsPromise}> </Events>
            </div>


            <div className="mt-10">
                <Testimonials></Testimonials>


            </div>
            <div className="mt-10">
                <PopularSports ></PopularSports>
            </div>
            <div className="mt-10">
                <FindClubs></FindClubs>
            </div>

        </div>
    );
};

export default Home;