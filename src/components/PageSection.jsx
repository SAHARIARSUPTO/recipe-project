import React, { useState } from "react";
import CustomImage from "./CustomImage";
import image1 from "./gallery/img_1.jpg";
import image2 from "./gallery/img_10.jpg";
import image3 from "./gallery/img_5.jpg";
import image4 from "./gallery/img_12.jpg";
import image5 from "./gallery/img_13.jpg";
import image6 from "./gallery/img_14.jpg";
import image7 from "./gallery/img_9.jpg";
import image8 from "./gallery/img_6.jpg";
import image9 from "./gallery/img_4.jpg";
import "./PageSection.css";

export default function PageSection() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered images based on search term
  const filteredImages = images.filter((image) =>
    image.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="section page">
      <div className="col typography">
        <h1 className="title">About Us</h1>
        <p className="info">
          Our mission is to make cooking enjoyable and accessible to everyone.
          We believe that cooking should be a fun and rewarding experience and
          our goal is to provide you with the tools, resources and inspiration
          you need to explore the world of cooking from the comfort of your own
          kitchen.
        </p>
      </div>
      <div className="col gallery">
        {filteredImages.map((src, index) => (
          <CustomImage key={index} imgSrc={src} pt={"90%"} />
        ))}
      </div>
    </div>
  );
}
