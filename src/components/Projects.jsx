import { useEffect, useRef } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "../styles/Projects.css";
import { Typography } from "@mui/material";

export default function Projects() {
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    imageRefs.current.forEach((img) => {
      if (img) {
        observer.observe(img);
      }
    });

    return () => {
      if (imageRefs.current) {
        imageRefs.current.forEach((img) => {
          if (img) {
            observer.unobserve(img);
          }
        });
      }
    };
  }, []);

  return (
    <div style={{ marginBottom: "200px", marginTop: "100px" }}>
      <div>
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            marginBottom: "20px",
            fontSize: {
              xs: "1.5rem", // small font size for extra-small screens
              sm: "2rem", // medium font size for small screens
              md: "2.5rem", // larger font size for medium screens
              lg: "3rem", // large font size for large screens
            },
          }}
        >
          My Projects
        </Typography>
      </div>

      <ImageList
        gap={16}
        className="continerofImages"
        sx={{
          height: 580,
          margin: "auto",
          backgroundColor: "#dfd3ca",
          padding: 10,
        }}
        cols={3}
        rowHeight={164}
      >
        {itemData.map((item, index) => (
          <ImageListItem key={item.img}>
            <div>
              <img
                className="proImg"
                srcSet={`${item.img}`}
                src={`${item.img}`}
                alt={item.title}
                loading="lazy"
                ref={(el) => (imageRefs.current[index] = el)}
              />
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: "1.png",
    title: "tasktech",
  },
  {
    img: "2.png",
    title: "onlineshopping",
  },
  {
    img: "3.PNG",
    title: "examenation",
  },
  {
    img: "4.png",
    title: "angular",
  },
  {
    img: "5.jpg",
    title: "Hats",
  },
  {
    img: "6.jpg",
    title: "Honey",
  },
];
