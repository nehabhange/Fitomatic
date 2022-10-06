import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Card from "../../Components/Card";
import Grid from "@mui/material/Grid";
import food from "../../Assest/health.png"
import workout from "../../Assest/recommendation.png";
import physio from "../../Assest/Phisiotherapy-bro.png"
const index = (props) => {
  return (
    <div style={{background:"rgb(21,26,36)"}}>
     <Header/>
     <br></br>
     <br></br>
    
      <div style={{paddingTop:"3%",paddingBottom:"2%",paddingLeft:"9%"}}>
        <Grid container spacing={2} sx={{background:"rgb(21,26,36)"}} >
          <Grid item xs={8} sm={4} md={4} >
            <Card image={food} text="Diet & Calorie Tracking"  />
          </Grid>
          <Grid item xs={8} sm={4} md={4}>
            <Card image={workout} text="Excersie Recommendation" />
          </Grid>
          <Grid item xs={8} sm={4} md={4}>
            <Card image={physio}  text="Physiotherapic Assessments" />
          </Grid>
          
        </Grid>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer/>
    </div>
  );
};

export default index;
