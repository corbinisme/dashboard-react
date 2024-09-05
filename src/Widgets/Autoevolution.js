import React, { useState, useEffect } from 'react';
import SwiperComponent from './Swiper';


function Autoevolution(props) {

    const slidesper = props.slidesper? props.slidesper: 3;
    const [post, setPost] = useState();
    //const goodUrl = "proxy.php?url=https://www.goodnewsnetwork.org/feed/";
    //  
    const goodUrl = 'https://api.rss2json.com/v1/api.json?rss_url=http://feeds.feedburner.com/autoevolution/jwcA';
    useEffect(() => {
        console.log('trigger use effect hook');
        fetch(goodUrl)
        .then(response=>response.json())
        .then(dat=>{
            console.log(dat)
            setPost(dat.items)
        });
      }, []);

    return (
        <div className="card portlet widget_auto">
            <header className="card-header">
            <h2>Autoevolution Widget</h2>
            </header>
            <div className="card-body">

                <SwiperComponent data={post} slidesper={slidesper} />
       
            </div>
        </div>
    )
}
export default Autoevolution;