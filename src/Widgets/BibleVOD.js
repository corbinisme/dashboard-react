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
  
            console.log("bible verse", dat)
            setPost(dat.items)
        });
      }, []);

    return (
        <div className="card portlet widget_biblevod">
           
                {post && post.map((item, index) => {

                    return (
                        <div key={index} className="wrapper p-3">
                            <h4><a href={item.link} target="_blank">{item.title}</a></h4>
                            {item.description}
                        </div>
                    )
                })}
       
        </div>
    )
}
export default BibleVOD;