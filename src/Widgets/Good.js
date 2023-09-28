import React, { useState, useEffect } from 'react';
import SwiperComponent from './Swiper';

function Good(props) {

    const [post, setPost] = useState();
    //const goodUrl = "proxy.php?url=https://www.goodnewsnetwork.org/feed/";
    //  
    const goodUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.goodnewsnetwork.org%2Ffeed%2F';
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
        <div className="portlet card widget_good">
            <header className="card-header">
            <h2>Good widget</h2>
            </header>
            <div className="card-body">
                <SwiperComponent data={post} slidesper={1} />
       
            </div>
        </div>
    )
}
export default Good;