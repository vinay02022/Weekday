import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { WHOLE_LOGO, LOGO_URL } from "../utils/constants";
import {
  Home,
  Search,
  CurrencyRupee,
  PersonAdd,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";

const SideNav = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sidebar
      collapsed={collapsed}
      className={`custom-sidebar ${collapsed ? "collapsed" : ""}`}
      style={{ height: "100%", borderRight:"20px" }}
    >
    <div
    className="toggle-btn"
    onClick={handleToggleSidebar}
    style={{
      position: 'absolute',
      top: 0,
      right: "0px",
      zIndex: 999,
      backgroundColor: 'white', 
      borderRadius: '50%',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)', 
      padding: '1px',
      cursor: 'pointer',
    }}
  >
    {collapsed ? <ChevronRight /> : <ChevronLeft />}
  </div>
  

      <Menu iconShape="square" >
        <MenuItem
          className="logo"
          disabled
          icon={
            <img
              style={{ width: "40px" }}
              src={LOGO_URL}
              alt="Logo"

            />
          }
          style={{
            marginTop:"20px",
            marginBottom:"36px",

            
          }}
        >
          <img
            style={{ width: "90px"}}
            src={WHOLE_LOGO}
            alt="company name"
          />
        </MenuItem>
        <MenuItem disabled icon={<Home />}>
          My Applied Jobs
        </MenuItem>
        <MenuItem icon={<Search />}>Search Jobs</MenuItem>
        <MenuItem disabled icon={<CurrencyRupee />}>
          Search Salary
        </MenuItem>
        <MenuItem disabled icon={<PersonAdd />}>
          Ask for Referral
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideNav;
