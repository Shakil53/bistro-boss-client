import 'swiper/css';
import 'swiper/css/pagination';
// import './Category.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';


const Category = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><img src={slide1} alt=''></img>
                <h3 className='text-3xl uppercase text-center text-white -mt-20 drop-shadow-lg font-serif'>SAlad</h3>
            </SwiperSlide>
            <SwiperSlide><img src={slide2} alt=''></img>
                <h3 className='text-3xl uppercase text-center text-white -mt-20 drop-shadow-lg font-serif'>Pizzas</h3></SwiperSlide>
            <SwiperSlide><img src={slide3} alt=''>

            </img>
                <h3 className='text-3xl uppercase text-center text-white -mt-20 drop-shadow-lg font-serif'>soups</h3>
            </SwiperSlide>
            <SwiperSlide><img src={slide4} alt=''></img>
                <h3 className='text-3xl uppercase text-center text-white -mt-20 drop-shadow-lg font-serif'>Cake</h3>
            </SwiperSlide>
            <SwiperSlide><img src={slide2} alt=''></img>
                <h3 className='text-3xl uppercase text-center text-white -mt-20 drop-shadow-lg font-serif'>Pizzas</h3></SwiperSlide>
            <SwiperSlide><img src={slide3} alt=''>

            </img>
                <h3 className='text-3xl uppercase text-center text-white -mt-20 drop-shadow-lg font-serif'>soups</h3>
            </SwiperSlide>

        </Swiper>
    );
};

export default Category;