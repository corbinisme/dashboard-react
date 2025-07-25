

function getTheImage(props) {
    const url = props.url;
    console.log("props", props)
    const  fullUrl = "util/proxy.php?url=" + url
    // call an API to get the source of the page and then extract the image from og:image
   console.log("Fetching image for URL:", fullUrl);
        fetch(fullUrl)
            .then(response => response.text())
            .then(html => {
                
                // just find the string that contains the image URL
                let regex = /<meta property="og:image" content="(.*?)"/;    
                let match = regex.exec(html);
                if (match && match[1]) {
                    console.log("Image URL found:", match[1]);
                    return match[1];
                }
                /*
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const ogImage = doc.querySelector('meta[property="og:image"]');
                if (ogImage && ogImage.content) {
                    return ogImage.content;
                } else {
                    return 'No image found';
                }
                */
            })
            .catch(err => { return err.message; });

    return null;
}

export default getTheImage;
