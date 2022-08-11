import React, { useState, useEffect } from 'react';


function Autoevolution() {

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
        <>
        <h2>Autoevolution Widget</h2>
        {(post? post.map(item=>{
            return(
               
                <div key={item.guid}>
                    <a href={item.link} target="_blank">
                    <h3>{item.title}</h3>
                    <img src={item.enclosure.link} width="200" />
                    </a>
                    <br />
                    <span dangerouslySetInnerHTML={{ __html: item.description }}>
                       
                    </span>
                    <hr />
                </div>
                
               
            )
        }) : <div>Loading</div>)}
        </>
    )
}
export default Autoevolution;