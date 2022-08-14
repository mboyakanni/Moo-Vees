import React, { useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import "./Nav.css";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useNavigate();

  useEffect(() => {
    if (value === 0) {
      history("/", { replace: true });
    } else if (value === 1) {
      history("/movies", { replace: true });
    } else if (value === 2) {
      history("/series", { replace: true });
    } else if (value === 3) {
      history("/search", { replace: true });
    }
  }, [value, history]);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{ backgroundColor: "#4e0925" }}
      >
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Trending"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Movies"
          icon={<MovieIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="TV Series"
          icon={<TvIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
