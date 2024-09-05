import React, { useState, useEffect } from 'react';
import SwiperComponent from './Swiper';

function ThingsToBeHappyAbout() {

    const [post, setPost] = useState();
    const [path, setPath] = useState("happy");


    const paths = [
        {name: 'happy', path: 'happy'},
        {name: 'questions', path: 'questions'},
        {name: 'trivia', path: 'trivia'},
        {name: 'meditation', path: 'meditation'},

        
    ]

   
 
    
    useEffect(() => {
   
        
        let thisPath = paths.filter(t=>t.name==path)[0].path;

        const goodUrl = `util/proxy.php?url=https://thingstobehappyabout.com/data/api/${path}.php?q=`;
        //const goodUrl = "util/godtube_scrape.php?path=" + thisPath;

        
        fetch(goodUrl)
        .then(response=>response.json())
        .then(dat=>{
            console.log("thingstobehappyabout", dat);
            
            setPost(dat)
        });
         
      }, [path]);
    
      const pathChange= function(e){
        //console.log(thisPath)
        let thisPath = e.target.value;
        setPath(thisPath)
      }

    return (
        <div className="portlet card widget_thingstobehappyabout">
            <header className="card-header">
                <div className="row">
                    <div className="col">
                        <h2>Things to be Happy About</h2>
                    </div>
                    <div className="col text-end d-flex justify-content-end">
                        <select title="subtopic" name="Subtopic" className="form-select w-auto" value={path} onChange={(e)=>pathChange(e)}>
                            {paths.map(p=>{

                                let activeClass = (p.name == path? "selected": false);
                                return(
                                    <option key={p.name}>
                                        {p.name}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                </div>
               
            </header>
            <div className="card-body">
                <ul>
               {post && post.map((p, i)=>{
                     return(
                          <li key={i} className="happything">
                            <div className="col-12">
                                 {p.term? <strong>{p.term}<br /></strong>: ""}
                                 <p>{p.thing}</p>
                                 
                            </div>
                          </li>
                     );
               })}
               </ul>
       
            </div>
        </div>
        
    )
}
export default ThingsToBeHappyAbout;