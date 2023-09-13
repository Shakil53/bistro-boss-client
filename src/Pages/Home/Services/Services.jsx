import img from '../../../assets/home/chef-service.jpg'
const Services = () => {
    return (
        <div className="hero mt-8 mb-8">
            <img src={img}></img>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font- uppercase drop-shadow-lg font-serif">Bistro Boss</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-accent border-0 border-b-4">Get Service</button>
                </div>
            </div>
        </div>
    );
};

export default Services;