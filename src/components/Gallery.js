import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <Gallery_container>
      <div className="topImage"></div>
      <GalleryInfo>
        <img
          src="https://media.istockphoto.com/photos/shot-of-a-cute-vintage-teapot-in-a-campsite-near-to-lake-picture-id1305448692?b=1&k=20&m=1305448692&s=170667a&w=0&h=JIAAnIWgx2dwTi96Zn37rauFCRV11EBIPeTbwAjbpPc="
          alt="img"
        />
        <Info>
          <h2>Youth Summer Camp 2021</h2>
          <button>
            <Link
              className="link"
              to={{
                pathname:
                  "https://chaykaphotoshootz.pic-time.com/-bbcyouthsummercamp2021/gallery",
              }}
              target="_blank"
            >
              Gallery
            </Link>
          </button>
        </Info>
      </GalleryInfo>
    </Gallery_container>
  );
}

export default Gallery;

const Gallery_container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;

const GalleryInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: auto;
  justify-content: space-evenly;
  border-top: 3px solid lightgray;
  border-bottom: 3px solid lightgray;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-bottom: 50px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  button {
    width: 70%;
    margin: auto;
    padding: 4px;
    font-size: 1.5rem;
  }
  .link {
    text-decoration: none;
    color: black;
  }
`;
