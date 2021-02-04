import TypeList from '../typeList/TypeList'
import GroupListNav from '../groupListNav/GroupListNav'
import "./group.scss"


const Group=()=>{
    return(
        <div className="Group">
            <span >Группы</span>
            <GroupListNav/>
            <TypeList/>
        </div>

    )
}
export default Group