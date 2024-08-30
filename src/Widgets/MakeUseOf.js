import React, { useState, useEffect } from 'react';
import SwiperComponent from './Swiper';



function MakeUseOf(props) {

    const [post, setPost] = useState();
    
    //https://www.makeuseof.com/feed
    let urlformat = "https%3A%2F%2Fwww.makeuseof.com%2Ffeed%2F";
    const goodUrl = 'https://api.rss2json.com/v1/api.json?rss_url=' + urlformat;
    console.log("makeuseof url", goodUrl)
    useEffect(() => {
        
        fetch("util/loadRSS.php?url=http://feeds.feedburner.com/makeuseof/pMkw")
        .then(response=>response.json())
        .then(dat=>{
            console.log("makeuseof",dat)
            
            setPost(dat.items)
        }).catch(e=>console.log(e));
      }, []);

    return (
        <div className="portlet card widget_good">
            <header className="card-header">
            <h2>Makeuseof widget</h2>
            </header>
            <div className="card-body">
                <SwiperComponent data={post} slidesper={1} />
       
            </div>
        </div>
    )
}
export default MakeUseOf;