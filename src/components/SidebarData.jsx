import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },

  {
    title: "Votes",
    icon: <HowToVoteIcon />,
    link: "/Votes",
  },

  {
    title: "Politicians",
    icon: <PersonIcon />,
    link: "/Politicians",
  },

  {
    title: "Login",
    icon: <LoginIcon />,
    link: "/Login",
  },
];

export default SidebarData;
