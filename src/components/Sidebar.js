import React, { Component } from "react";
import {
  FaTh,
  // FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  render() {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => this.state.isOpen(this.state.isOpen ? false : true);
    const onHover = () =>
      this.setState({
        isOpen: this.state.isOpen ? false : true,
      });

    const menuItem = [
      {
        path: "/",
        name: "Dashboard",
        icon: <FaTh />,
      },
      {
        path: "/about",
        name: "About",
        icon: <FaUserAlt />,
      },
      {
        path: "/analytics",
        name: "Analytics",
        icon: <FaRegChartBar />,
      },
      {
        path: "/comment",
        name: "Comment",
        icon: <FaCommentAlt />,
      },
      {
        path: "/product",
        name: "Product",
        icon: <FaShoppingBag />,
      },
      {
        path: "/productList",
        name: "Product List",
        icon: <FaThList />,
      },
    ];

    return (
      <div className="container">
        <div
          style={{ width: this.state.isOpen ? "250px" : "50px" }}
          className="sidebar"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
        >
          <div className="top_section">
            {/* <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div> */}
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: this.state.isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Sidebar;
