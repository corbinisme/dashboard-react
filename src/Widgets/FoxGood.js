import React, { useState, useEffect } from 'react';
import SwiperComponent from './Swiper';

function FoxGood(props) {

    const [post, setPost] = useState();
    //const goodUrl = "proxy.php?url=https://www.goodnewsnetwork.org/feed/";
    //  
    //https://www.foxnews.com/category/good-news
    const goodUrl = 'https://www.foxnews.com/api/article-search?searchBy=tags&values=fox-news%2Fgood-news&excludeBy=tags&excludeValues=&size=11&from=0&mediaTags=good_news';
    useEffect(() => {

        fetch(goodUrl)
        .then(response=>response.json())
        .then(dat=>{
   
            let tempArr = [];
            dat.forEach(function(item){
        
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
            <h2>Fox Good widget</h2>
            </header>
            <div className="card-body">
                <SwiperComponent data={post} slidesper={1} />
       
            </div>
        </div>
    )
}
export default FoxGood;