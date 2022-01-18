import * as React from "react";
import Typography from "@mui/material/Typography";
const Title = (props) => {
  return (
    <div style={{ textAlign: "center", padding: " 2rem 0" }}>
      <Typography variant="h4">{props.title}</Typography>
    </div>
  );
};

export default Title;
