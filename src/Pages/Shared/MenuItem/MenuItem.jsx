
const MenuItem = ({ item }) => {

    const { name, image, price, recipe } = item;
    return (
        <div className="flex space-x-3">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px]" src={image} />
            <div>
                <h3 className="uppercase text-xl">{name}----------</h3>
                <p>{recipe}---------</p>
            </div>
            <div><p className="text-orange-500">$ {price}</p></div>

        </div>
    );
};

export default MenuItem;