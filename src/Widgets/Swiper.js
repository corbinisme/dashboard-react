import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Responsive } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function SwiperComponent(props) {

    let slidesPer = props.slidesper;
    if(!slidesPer){
        slidesPer = 2;
    }
    return (
        <Swiper
        key={props.data && "key_" + props.data.length}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            
            navigation
            pagination={{ clickable: true }}
            breakpoints={
                {
                    640: {
                        slidesPerView: slidesPer-2>0?slidesPer-2:1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: slidesPer-1>0?slidesPer-1:1,
                        spaceBetween: 40
                    },
                    1024: {
                        slidesPerView: slidesPer,
                        spaceBetween: 50
                    }
                }
            }

            
            >
            {props.data && props.data.map(p=>{
   
                let imageUrl = p.enclosure && p.enclosure.link ? p.enclosure.link : "https://placehold.co/600x400/EEE/31343C?text=No+Image";
                return(
                    <SwiperSlide key={p.link} className="card p-2 col-sm-3">
                        <a href={p.link} target="_blank">
                            <img src={imageUrl} className="card-img-top" />
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
