import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function SwiperComponent(props) {


    console.log("swiper component", props.data)
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
                        </a>
                            <div className="card-body">
                            <a href={p.link} target="_blank">
                                <h5 className="card-title">{p.title}</h5>
                                </a>
                                <p className="card-text" dangerouslySetInnerHTML={{__html: p.description}}></p>
                            </div>
                        
                    </SwiperSlide>
                )
            })}

        </Swiper>
    )
}

export default SwiperComponent;