import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";



export default function Footer() {
  return (
    <Box
    style={{backgroundColor:"#6f6c6d"}}  component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "#afabac"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg" >
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" color="white" gutterBottom>
              About Us
            </Typography>
            <Typography variant="h6" color="white">
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" color="white" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="h6" color="white">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="h6" color="white">
              Email: info@example.com
            </Typography>
            <Typography variant="h6" color="white">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" color="white" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook style={{color:"white",fontSize:"40px"}}/>
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram style={{color:"white",fontSize:"40px"}} />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter style={{color:"white",fontSize:"40px"}} />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="white" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}