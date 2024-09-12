import "../styles/Aboutme.css";
import FlightIcon from "@mui/icons-material/Flight";
import MovieIcon from "@mui/icons-material/Movie";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";

export default function Aboutme() {
  return (
    <div style={{ marginBottom: "100px" }}>
      <div className="parent">
        <div className="child1">About Me</div>
        <div className="child2">
          <h2>My INTRO</h2>
          <p>
            Front-end developer with a deep understanding of computer science
            principles . My expertise in front-end technologies , combined with
            an awareness of back-end development, allows me to contribute to
            full-stack projects effectively. I am passionate about learning and
            implementing new technologies swiftly, working well within teams,
            and utilizing my strong creative and analytical skills to deliver
            exceptional web solutions.
          </p>
          <div>
            <div>Name : </div> <div className="title">Rwan Adel Omar</div>
          </div>
          <div>
            <div>Date Of Birth : </div> <div className="title">15/11/2000</div>
          </div>
          <div>
            <div>Address : </div> <div className="title">Portsaid ,Egypt</div>
          </div>
          <div>
            <div>Email : </div> <div className="title">rwan32310@gmail.com</div>
          </div>
          <div>
            <div>Phone : </div> <div className="title">+20 127-751-5331</div>
          </div>
          <div>
            <div>GitHub : </div> <div className="title">rwanadel</div>
          </div>
          <div>
            <div>LinkedIn : </div> <div className="title">rwanadel</div>
          </div>
          <div className="parent2">
            <div className="circle">
              <FlightIcon
                sx={{ width: 30, height: 30, color: "white" }}
              ></FlightIcon>
            </div>
            <span>Travel</span>
            <div className="circle">
              <MovieIcon
                sx={{ width: 30, height: 30, color: "white" }}
              ></MovieIcon>
            </div>
            <span>Movie</span>
            <div className="circle">
              <SportsTennisIcon
                sx={{
                  width: 30,
                  height: 30,
                  color: "white",
                }}
              ></SportsTennisIcon>
            </div>
            <span>sports</span>
          </div>
        </div>
      </div>
    </div>
  );
}
