import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Cardofskills({ skill }) {
  return (
    <Box
      sx={{
        width: "150px",
        marginBottom: "20px",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          width: "150px",
          marginBottom: "20px",
          height: "100px",
          backgroundColor: "#dfd3ca",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {skill}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
