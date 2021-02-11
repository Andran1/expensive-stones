import { NavLink } from "react-router-dom";
import "./groupListNav.scss";

const GroupListNav = () => {
  const navList = [
    { name: "Бриллиант", to: "/" },
    { name: "Цветной", to: "/color" },
  ]; 
  return (
    <div className="Group-List-Nav">
      <nav>
        <ul>
          {navList.map((item, idx) => {
            return (
              <li key={idx}>
                <NavLink
                  className="nav-item"
                  to={item.to}
                  activeClassName="active"
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}

        </ul>
      </nav>
    </div>
  );
};

export default GroupListNav;
