import React from "react";
import "./testimonials.scss";

export default function Testimonials(){

    const data = [
        {
            id: 1,
            name: "Elon Chaudhari",
            title:"Founder of spaceY",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
            icon:"assets/twitter.png",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque earum in",
        },
        {
            id: 2,
            name: "Alex Gupta",
            title:"CEO of Hello.",
            img:"https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon:"assets/youtube.png",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque earum in",
            featured:true,
        },
        {
            id: 3,
            name: "Lana Sharma",
            title:"Senior Developer",
            img:"https://images6.alphacoders.com/340/thumb-1920-340544.jpg",
            icon:"assets/linkedin.png",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque earum in",
        },
    ]
    return(
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>

            <div className="container">
                {data.map((d)=>(

                    <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img className="user"
                         src={d.img} alt="" />
                        <img className="right" src={d.icon} alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                   </div>
                ))}
            </div>

        </div>
    )
}