import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecom from "../ChefRecom/ChefRecom";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Services></Services>
            <PopularMenu></PopularMenu>
            <ChefRecom></ChefRecom>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;