import { useState } from "react";
import "./sidebar.scss"
import ForwardIcon from "../icons/forward-arrow.png";

const Sidebar = ({navbarStatus}) => {
    const [activeSidebar, setActiveSidebar] = useState(true);

    const handleNavbar = () => {
        setActiveSidebar(!activeSidebar)
        navbarStatus(!activeSidebar);
    }

    return (
        <>
            <div className="sidebar-container" style={{width: activeSidebar ? 200 : 0}}>
                <div className="sidebar-close" onClick={() => handleNavbar()}>
                    {activeSidebar ? <img style={{transform: "rotateY(180deg)"}} src={ForwardIcon} alt="" /> : <img src={ForwardIcon} alt="" />}
                </div>
                <div className="library" style={{opacity: activeSidebar ? 1 : 0, visibility: activeSidebar ? "visible" : 'hidden'}}>
                    <h3>Library</h3>
                </div>
            </div>
        </>

    )
}

export default Sidebar;