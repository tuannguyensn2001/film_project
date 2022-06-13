import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

const images = [
    'https://files.betacorp.vn/files/ecm/2022/06/02/banner-1702-x-621-01-120829-020622-22.jpg',
    'https://files.betacorp.vn/files/ecm/2022/06/08/mb-bank-ctkm-1702x621-092111-080622-96.jpg',
    'https://files.betacorp.vn/files/ecm/2022/06/02/la-nguoi-long-khanh-1702x621-183727-020622-73.jpg',
    'https://files.betacorp.vn/files/ecm/2021/07/17/300621-nhuong-quyen-1702x621-01-1-182121-020721-85-161350-170721-45.jpg',
];

function SlideBanner() {
    return (
        <div>
            <Swiper
                pagination
                navigation
                loop
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper"
                autoplay={{ delay: 3000 }}
            >
                {images.map((image) => (
                    <SwiperSlide key={image}>
                        <img src={image} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SlideBanner;
