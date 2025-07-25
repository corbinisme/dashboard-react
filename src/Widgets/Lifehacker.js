

import React, { useState, useEffect } from 'react';
import SwiperComponent from './Swiper';

function Lifehacker(props) {

    const [post, setPost] = useState();
    let urlformat = "https://lifehacker.com/rss";
    const lifehackerUrl = 'https://api.rss2json.com/v1/api.json?rss_url=' + urlformat;

    useEffect(() => {

        fetch(lifehackerUrl)
        .then(response=>response.json())
        .then(dat=>{
            console.log("lifehacker data", dat);
            let tempArr = [];
            dat.items.forEach(function(item){
        
                let thisArr = {
                    title: item.title,
                    link: item.url,
                    enclosure: {
                        link: item.imageUrl
                    },
                    description: item.description
                };
                tempArr.push(thisArr);
            })
          
            setPost(tempArr)
        });
      }, []);

    return (
        <div className="portlet card widget_good">
            <header className="card-header">
            <h2>Lifehacker widget</h2>
            </header>
            <div className="card-body">
                <SwiperComponent data={post} slidesper={3} />
       
            </div>
        </div>
    )
}
export default Lifehacker;
