import { Component } from "react";
import './removePriceListModal.scss'

class RemovePriceListModal extends Component{
    removItem=()=>{
        this.props.closeModal()
    }
    render(){
        return(
            <div>
                <div
                 onClick={this.removItem}
                 className='remove-modal-block'
                 >Удалить</div>
            </div>
        )
    }
}
export default RemovePriceListModal
