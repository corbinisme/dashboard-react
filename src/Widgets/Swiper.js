import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function SwiperComponent(props) {


    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={props.slidesper}
            navigation
            pagination={{ clickable: true }}

            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            {props.data && props.data.map(p=>{
                return(
                    <SwiperSlide key={p.link} className="card p-2 col-sm-3">
                        <a href={p.link} target="_blank">
                            <img src={p.enclosure.link} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{p.title}</h5>
                                <p className="card-text">{p.description}</p>
                            </div>
                        </a>
                    </SwiperSlide>
                )
            })}

        </Swiper>
    )
}

export default SwiperComponent;