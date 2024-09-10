import React, { useState, useEffect } from 'react';
import SwiperComponent from './Swiper';

function Positive(props) {

    const [post, setPost] = useState();
    //const goodUrl = "proxy.php?url=https://www.goodnewsnetwork.org/feed/";
    //  
    //https://www.foxnews.com/category/good-news
    const goodUrl = 'util/loadRSS.php?url=https://www.positive.news/feed/';
    useEffect(() => {

        fetch(goodUrl)
        .then(response=>response.json())
        .then(dat=>{
   
            console.log("positive news", dat)
            let tempArr = [];
            dat.forEach(function(item){
        
                let thisArr = {
                    title: item.title,
                    link: item.guid,
                    enclosure: {
                        link: item.imageUrl
                    },
                    id: item.guid,
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
            <h2>Positive News</h2>
            </header>
            <div className="card-body">
                <SwiperComponent data={post} slidesper={1} />
       
            </div>
        </div>
    )
}
export default Positive;