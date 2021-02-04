import { NavLink } from "react-router-dom";
import "./groupListNav.scss";

const GroupListNav = () => {
  return (
    <div className="Group-List-Nav">
      <nav>
        <ul>
          <NavLink to="/">
            <li>Бриллиант</li>
          </NavLink>
          <NavLink  to="/color">
            <li>Цветной</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default GroupListNav;
