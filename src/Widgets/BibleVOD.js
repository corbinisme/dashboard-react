import React, { useState, useEffect } from 'react';
import SwiperComponent from './Swiper';


function BibleVOD() {

    const [post, setPost] = useState();
     
    const goodUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://www.biblegateway.com/votd/get/?format=atom';
    //const goodUrl = "https://www.biblegateway.com/votd/get/?format=atom";
    useEffect(() => {

        fetch(goodUrl)
        .then(response=>response.json())
        .then(dat=>{
  
            setPost(dat.items)
        });
      }, []);

    return (
        <div className="card portlet widget_auto">
            <header className="card-header">
            <h2>Verse of the Day</h2>
            </header>
            <div className="card-body">

                <SwiperComponent data={post} slidesper={1} />
       
            </div>
        </div>
    )
}
export default BibleVOD;