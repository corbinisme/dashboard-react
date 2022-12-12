import React, { useState, useEffect } from 'react';


function Good() {

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
        <div className="portlet card">
            <header className="card-header">
            <h2>Good widget</h2>
            </header>
            <div className="card-body">
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
                
               
            )} ) : <div>Loading</div>)}
            </div>
        </div>
    )
}
export default Good;