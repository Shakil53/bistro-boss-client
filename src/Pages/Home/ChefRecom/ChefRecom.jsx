import { useEffect, useState } from 'react';
import chefRecomPic from '../../../assets/menu/salad-bg.jpg';
import Compo from './Compo/Compo';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const ChefRecom = () => {

    const [chef, setChef] = useState([])


    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const chefSpecial = data.filter(item => item.category === 'salad')
                setChef(chefSpecial)
            })
    }, [])

    return (
        <>
            <SectionTitle
                heading={'Chef Recommends'}
                subHeading={'Should try'}
            ></SectionTitle>
            <div className='grid md:grid-cols-3 gap-4 space-y-5'>
                {
                    chef.map(item => <Compo
                        key={item._id}
                        item={item}
                    ></Compo>)
                }
            </div>
        </>
    );
};

export default ChefRecom;