import { Link } from "react-router-dom";
const Setting_option = () => {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-logo">
                    <h2>BAATCHIT</h2>
                </div>
                <div className="sidebar-item">
                    <Link to="/profile/setting" style={{ textDecoration: "none", color: " #603813" }}>Profile Settings</Link>
                </div>
                <div className="sidebar-bottom">
                    <hr style={{ width: "90px", margin: "0px 0px 10px 60px" }}></hr>
                    <div className="sidebar-item"><Link to="/chatarea" style={{ textDecoration: "none", color: " #603813" }}>Search bar⬇</Link></div>
                </div>
            </div>
        </>
    );
};

export default Setting_option;
