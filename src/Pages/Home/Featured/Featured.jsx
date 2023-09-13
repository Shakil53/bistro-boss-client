import featuredImg from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './Featured.css';

const Featured = () => {
    return (
        <div className='mt-10 featured p-10 bg-fixed'>
            <SectionTitle

                heading={"From Our Menu"}
                subHeading={"Check it out"}
            ></SectionTitle>
            <div className='flex justify-center items-center pb-20 pt-12 px-16'>
                <div>
                    <img src={featuredImg}></img>

                </div>
                <div className='md:ml-10 text-white space-y-2'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>where can i get some</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, quas iure, nobis iste aliquid officiis dicta, suscipit tenetur voluptatum porro eum perspiciatis facilis dignissimos sit ab fugiat! Neque at, aliquid fugiat nisi assumenda iusto veritatis, expedita voluptas aut odit a atque omnis. Perferendis nisi recusandae qui. Nobis tempora quaerat.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white border-y-rose-400 ">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;