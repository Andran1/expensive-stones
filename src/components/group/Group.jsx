import TypeList from "../typeList/TypeList";
import GroupListNav from "../groupListNav/GroupListNav";
import "./group.scss";
import GroupList from "../groupList/GroupList";

const Group = () => {
  return (
    <div className="Group">
      <span>Группы</span>
      <GroupListNav />
      <TypeList />
      <GroupList />
    </div>
  );
};
export default Group;
