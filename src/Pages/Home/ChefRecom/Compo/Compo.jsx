
const Compo = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <section>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">

                <figure><img src={image} alt="Menu" /></figure>
                <div className="card-body flex text-center">
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p>{recipe}</p>
                    <p className="font-semibold">$ {price}</p>
                    <button className="btn btn-outline border-0 border-b-4 ">Default</button>
                </div>
            </div>
        </section>
    );
};

export default Compo;