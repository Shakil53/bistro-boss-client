import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg';

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Services from "../Services/Services";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Menu
                </title>
            </Helmet>

            <Cover
                img={menuImg}
                title='Our Menu'
            ></Cover>
            <SectionTitle
                heading={"Today's offer"}
                subHeading={"Don't miss"}
            ></SectionTitle>
            <MenuCategory items={offered} title={'offered'}></MenuCategory>
            <Services></Services>
            <SectionTitle
                heading={"Soup Item"}
                subHeading={"Don't miss"}
            ></SectionTitle>
            <MenuCategory items={soup} title={'soup'}></MenuCategory>
            <Services></Services>
            <SectionTitle
                heading={"Pizza Item"}
                subHeading={"Don't miss"}
            ></SectionTitle>
            <MenuCategory items={pizza} title={'pizza'}></MenuCategory>
            <Services></Services>
            <SectionTitle
                heading={"Salad Item"}
                subHeading={"Don't miss"}
            ></SectionTitle>
            <MenuCategory items={salad} title={'salad'}></MenuCategory>
            <Services></Services>
            <SectionTitle
                heading={"Dessert Item"}
                subHeading={"Don't miss"}
            ></SectionTitle>
            <MenuCategory items={desserts} title={'dessert'}></MenuCategory>

        </div>
    );
};

export default Menu;