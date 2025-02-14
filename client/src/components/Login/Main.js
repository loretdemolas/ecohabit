import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  display: "flex",
  flexDirection: "column",
  flex: 2,
  justifyContent: "space-between",
  padding: "4.8vw 12vw",
  color: "white",
  minHeight: "630px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const LinkText = styled(Link)({
  textDecoration: "none",
  color: "white",
});

const Main = () => {
  return (
    <MainBox>
      <Box>
        <Typography
          variant="h2"
          fontFamily="Roboto"
          fontWeight="700"
          fontSize="3.2rem"
          lineHeight="3.25rem"
        >
          Lorem ipsum dolor sit amet,{" "}
          <Box component="span" color="secondary.main">
            consectetur
          </Box>
          .
        </Typography>
        <Typography mt={2} variant="subtitle2">
          Join a community of like-minded individuals and make a positive impact
          on the planet &rarr;
        </Typography>
      </Box>
      <Box
        sx={{
          justifyContent: "space-between",
        }}
      >
        <LinkText to="/about">About EcoHabit</LinkText>
        <LinkText to="/terms">Privacy Policy - Terms and Conditions</LinkText>
      </Box>
    </MainBox>
  );
};

export default Main;
