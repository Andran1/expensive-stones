import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './icon.scss'

const Icon=(props)=>{
    return(
        <div className='Icon'>
        <FontAwesomeIcon 
         icon={props.icon} 
         onClick={props.onClick}/>
      </div>
    )
}
export default Icon