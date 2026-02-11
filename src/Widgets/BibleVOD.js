import React, { useState, useEffect } from 'react';

const BibleVOD = () => {
    // Initialize as an empty array so .map doesn't fail
    const [post, setPost] = useState([]);

    useEffect(() => {
        // Define the async function INSIDE the effect
        const fetchData = async () => {
            try {
                // Use your proxy if you still get CORS errors!
                const response = await fetch('util/proxy.php?url=https://www.biblegateway.com/votd/get/?format=atom');
                const text = await response.text();

                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(text, "text/xml");

                const title = xmlDoc.getElementsByTagName("title")[0]?.childNodes[0]?.nodeValue || "No Title";
                const link = xmlDoc.getElementsByTagName("link")[0]?.getAttribute("href") || "#";
                const content = xmlDoc.getElementsByTagName("content")[0]?.childNodes[0]?.nodeValue || "";

                const postData = {
                    title: title,
                    link: link,
                    description: content
                };

                setPost([postData]);
            } catch (error) {
                console.error("Error fetching Bible VOD:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div className="card portlet widget_biblevod">
            {post.map((item, index) => (
                <div key={index} className="wrapper p-3">
                    <h4>
                        <a href={item.link} target="_blank" rel="noreferrer">
                            {item.title}
                        </a>
                    </h4>
                    {/* Atom content often contains HTML, use dangerouslySetInnerHTML if needed */}
                    <div dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
            ))}
        </div>
    );
};

export default BibleVOD;
