
const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    const handleAddToCart = (item) => {
        console.log(item)
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 font-bold bg-slate-900 text-white">$ {price}</p>
            <div className="card-body">
                <h2 className="card-title font-mono font-bold">{name}</h2>
                <p>{recipe}</p>

                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 border-y-rose-400 text-black">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;