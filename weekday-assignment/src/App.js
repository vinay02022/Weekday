import {useState} from 'react';
import Listings from "./Components/Listings"
import Navbars from "./Components/Navbars";
import {Grid} from '@mui/material'

function App() {
  const [sidebarWidth, setSidebarWidth] = useState(0); 

  return (
    <Grid container>
      <Grid item xs={3} style={{ flexBasis: sidebarWidth }}>
      <Navbars setSidebarWidth={setSidebarWidth} />
      </Grid>
      <Grid
        style={{ display: "flex", marginLeft: "auto", marginRight: "auto" }}
        item
        xs={9}
      >
        <Listings/>
      </Grid>
    </Grid>
  
  );
}

export default App;
