import { Home, Menu, Newspaper } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, createTheme, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../App.css';

const theme = createTheme({
  components: {
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: "gray",
          "&.Mui-selected": {
            color: "#09bd39",
          },
        },
      },
    },
  },
});

function BottomNav() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setValue(0);
        break;
      case "/home":
        setValue(1);
        break;
      case "/menu":
        setValue(2);
        break;
      default:
        setValue(0);
    }
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/home");
        break;
      case 2:
        navigate("/menu");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div className="bottom-nav">
      <ThemeProvider theme={theme}>
        <BottomNavigation value={value} onChange={handleChange} showLabels>
          <BottomNavigationAction label="Blog" icon={<Newspaper />} />
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction label="Menu" icon={<Menu />} />
        </BottomNavigation>
      </ThemeProvider>
    </div>
  );
}

export default BottomNav;
