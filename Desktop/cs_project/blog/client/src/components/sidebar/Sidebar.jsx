import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                    <span className="sidebarTitle">ABOUT ME</span>
                    <img src="https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=200" alt="" />
                    <p>Hello, I am William.</p>
                <div className="sidebarItem">
                    <span className="sidebarTitle">CATRGORIES</span>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">Life</li>
                        <li className="sidebarListItem">Music</li>
                        <li className="sidebarListItem">Style</li>
                        <li className="sidebarListItem">Sport</li>
                        <li className="sidebarListItem">Tech</li>
                        <li className="sidebarListItem">Cinema</li>
                    </ul>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-pinterest"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                </div>

                </div>
            </div>
        </div>
    )
}
