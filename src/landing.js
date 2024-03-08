import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material';
import image3 from './image4.webp';
import PrescriptionPage from './prescription';

const PatientCard = ({ name, dob, disease, value, age, image }) => {
  return (
    <Card sx={{ maxWidth: 545 }} className="" style={{ maxWidth: "90%", margin: "auto", background: "#E6E6FA", marginTop: "20px", border: "2px solid" }}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <CardMedia

            component="img"
            height="150"
            image={image3}
            alt={name}
            width="100"
            padding="100"
            style={{marginTop:"25px"}}
            
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {name}
            </Typography>
            <Typography color="text.secondary" variant="h6" component="div">
              Age: {age}
            </Typography>
            <Typography variant="h6" style={{ marginTop: "20px" }} color="text.secondary">
              Date of Birth: {dob}
            </Typography>
            <Typography variant="h6" style={{ marginTop: "20px" }} color="text.secondary">
              Disease: {disease}
            </Typography>
            <Typography variant="h6" style={{ marginTop: "20px" }} color="text.secondary">
              Gender: {value}
            </Typography>
            <a href='/prescription'><Button style={{ color: "white", background: "#B22222", marginTop: "20px" }} onClick={PrescriptionPage} variant='contained'>Prescription</Button>
         </a> </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: "#DCDCDC", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", paddingTop: "50px", fontFamily: "'Roboto', sans-serif" }}>Patient Details</h1>
      <hr />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <PatientCard
            name="Jhonny"
            age="24"
            dob="01/01/1990"
            disease="Flu"
            value="Male"
            image="https://via.placeholder.com/150"
          />
        </Grid>
        {/* Add more PatientCard components as needed */}
      </Grid>
    </div>
  );
};

export default LandingPage;
