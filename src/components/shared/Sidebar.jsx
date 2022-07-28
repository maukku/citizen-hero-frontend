import React from "react";
import SidebarData from "../../data/SidebarData";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import SidebarItem from "../SidebarItem";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="Sidebar-list">
        <SidebarItem title={"Home"} link="/" icon={<HomeIcon />} />
        <SidebarItem
          title={"Send Email"}
          link="/SendEmail"
          icon={<EmailIcon />}
        />
        <SidebarItem title={"Votes"} link="/Votes" icon={<HowToVoteIcon />} />
        <SidebarItem
          title={"Politicians"}
          link="/Politicians"
          icon={<PersonIcon />}
        />
        <SidebarItem title={"Login"} link="/Login" icon={<LoginIcon />} />
      </ul>
    </div>
  );
}
export default Sidebar;
