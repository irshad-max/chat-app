
const SideBar_page = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-logo">
          <h2>BAATCHIT</h2>
        </div>

        <div className="sidebar-search">
          <input type="text" placeholder="Search..." />
        </div>

        <div className="sidebar-menu">
          <div className="sidebar-item">Home</div>
          <div className="sidebar-item">Chat</div>
          <div className="sidebar-item">Friends</div>
        </div>

        <div className="sidebar-bottom">
          <div className="sidebar-item">Settings</div>
        </div>
      </div>
    </>
  );
};

export default SideBar_page;
