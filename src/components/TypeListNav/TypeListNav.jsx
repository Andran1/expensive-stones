import { Component } from "react";
import { connect } from "react-redux";
import "./TypeListNav.scss";
import { setItmeType } from "../../redux/supplierList/supplierList.action";
import { NavLink } from "react-router-dom";

class TypeListNav extends Component {
  state = {
    listType: [
      { type: "Типы1", name: "Типы_1" },
      { type: "Типы2", name: "Типы_2" },
      { type: "Типы3", name: "Типы_3" },
      { type: "Типы4", name: "Типы_4" },
      { type: "Типы5", name: "Типы_5" },
    ],
  };

  handleType = (type) => {
    this.props.setItmeType(type);
  };

  render() {
    const { listType } = this.state;
    return (
      <div className="Type-List-Nav-Block">
        <nav>
          <ul>
            {listType.map((item) => {
              return (
                <li key={item.type}>
                  <NavLink
                  className='navigation-item'
                   to={`/${item.type}`}
                   activeClassName='active'
                   > {item.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setItmeType: (type) => dispatch(setItmeType(type)),
});

export default connect(null, mapDispatchToProps)(TypeListNav);
