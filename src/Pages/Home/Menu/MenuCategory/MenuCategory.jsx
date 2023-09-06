import { Link } from 'react-router-dom';
import MenuItem from '../../../Shared/MenuItem/MenuItem';


const MenuCategory = ({ items, title }) => {

    return (
        <div className='pt-8 '>

            <div className="grid md:grid-cols-2 gap-8 mb-7">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 ml-96 border-b-4 text-black mb-7 ">Order Your Fav. Food</button>
            </Link>

        </div>
    );
};

export default MenuCategory;