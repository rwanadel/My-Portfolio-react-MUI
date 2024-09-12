import Cardofskills from "./Cardofskills";
import { Box } from "@mui/material";

export default function Skills() {
  const skillsArray = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "React",
    "Node.js",
    "express.js",
    "nest.js",
    "next.js",
  ];

  return (
    <Box>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Skills</h1>
      <Box
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)", // 2 columns on extra-small screens
            sm: "repeat(3, 1fr)", // 3 columns on small screens
            md: "repeat(4, 1fr)", // 4 columns on medium screens
            lg: "repeat(5, 1fr)", // 5 columns on large screens
          },
          marginX: { xs: "20px", sm: "50px", md: "100px", lg: "200px" },
        }}
      >
        {skillsArray.map((skill, index) => (
          <Cardofskills key={index} skill={skill} />
        ))}
      </Box>
    </Box>
  );
}
