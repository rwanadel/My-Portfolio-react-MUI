import { AskClient } from "./AskClient";
import "../styles/Clientsection.css";
import { Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function NewProjectSection() {
  return (
    <div>
      <Typography variant="h3" gutterBottom textAlign="center">
        Have a Project ?
      </Typography>
      <div className="parent">
        <div style={{ backgroundColor: "#f8f9fa" }}>
          <AskClient></AskClient>
        </div>

        <div>
          <div style={{ display: "flex" }}>
            <div className="circle">
              <PlaceIcon
                sx={{ width: 30, height: 30, color: "white" }}
              ></PlaceIcon>
            </div>
            <div style={{marginTop:20}}>Address: <div>portsaid , egypt</div></div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="circle">
              <LocalPhoneIcon
                sx={{ width: 30, height: 30, color: "white" }}
              ></LocalPhoneIcon>
            </div>
            <div style={{marginTop:20}}>Phone: <div>01277515331</div></div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="circle">
              <SendIcon
                sx={{ width: 30, height: 30, color: "white" }}
              ></SendIcon>
            </div>
            <div style={{marginTop:20}}>Email: <div>rwan32310@gmail.com</div></div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="circle">
              <LinkedInIcon
                sx={{ width: 30, height: 30, color: "white" }}
              ></LinkedInIcon>
            </div>
            <div style={{marginTop:20}}> LinkedIn: <div>rwanadel</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
