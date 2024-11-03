import React, {useState} from 'react';
import {images} from "./imageList";

function Gallery(props) {
    const [page, setPage] = useState(0);

    return (
        <>
            <div>
                <img src={images[page].url}  alt={"Image example"} />
                <div>
                    {images[page].description}
                </div>
            </div>
            <div>
                <div
                    style={{border: "1px black solid", padding: "2rem"}}
                    onClick={() => setPage(page ? page - 1 : 0)}
                >
                    Go back
                </div>
                <div
                    style={{border: "1px black solid", padding: "2rem"}}
                    onClick={() => setPage(page >= images.length-1 ? page : page + 1)}
                >
                    Next
                </div>
            </div>
        </>
    );
}

export default Gallery;