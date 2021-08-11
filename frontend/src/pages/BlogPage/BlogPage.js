import React from "react";
import BlogPageCSS from "./BlogPage.module.css";

export default function BlogPage() {
    return (
        <div className={BlogPageCSS.root}>
            <div className={BlogPageCSS.container}>
                <div className={BlogPageCSS.main}>
                    <h1>TITLE</h1>
                    <h6>Author</h6>
                    <img src="https://picsum.photos/800" alt="error" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium officia veniam ratione odit porro molestiae
                        labore iure dolor quibusdam veritatis fugiat, eligendi,
                        dignissimos obcaecati error repellendus libero nihil
                        vel, dolorum quod rem nemo. Magni voluptatum quo hic
                        vero, asperiores facilis voluptatibus quasi fuga eos
                        dolor obcaecati aperiam sint? Recusandae, omnis? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium officia veniam ratione odit porro molestiae
                        labore iure dolor quibusdam veritatis fugiat, eligendi,
                        dignissimos obcaecati error repellendus libero nihil
                        vel, dolorum quod rem nemo. Magni voluptatum quo hic
                        vero, asperiores facilis voluptatibus quasi fuga eos
                        dolor obcaecati aperiam sint? Recusandae, omnis?
                    </p>
                </div>
                <div className={BlogPageCSS.sidepanel}>
                    <div className={BlogPageCSS.sideCard}>
                        <img src="https://picsum.photos/250" alt="side" />
                        <h1>Title</h1>
                        <h6>Author</h6>
                    </div>
                    <div className={BlogPageCSS.sideCard}>
                        <img src="https://picsum.photos/250" alt="side" />
                        <h1>Title</h1>
                        <h6>Author</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
