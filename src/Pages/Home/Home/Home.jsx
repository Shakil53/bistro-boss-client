import MenuItem from "../../Shared/MenuItem/MenuItem";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecom from "../ChefRecom/ChefRecom";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Services></Services>
            <PopularMenu></PopularMenu>
            <ChefRecom></ChefRecom>
            <Featured></Featured>
        </div>
    );
};

export default Home;