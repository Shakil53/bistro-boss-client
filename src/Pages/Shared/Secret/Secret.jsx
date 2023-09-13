import img from '../../../assets/others/download (1).jpg'
const Secret = () => {
    return (
        <section className='container p-40'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">All Foods are free </h2>
                    <p><small>If your got the Private Route Page, it may be consider all foods are free for you!</small> </p>
                    <div className="card-actions justify-start">
                        <button className="btn badge badge-outline">Buy Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Secret;