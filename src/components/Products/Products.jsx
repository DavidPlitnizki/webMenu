import React from 'react';
import { connect } from 'react-redux';
import ListServing from '../ListServing/ListServing';
import { selectItemForOrder } from '../../action_creators';
import {uniqNumber} from '../../helpers/util';

class Products extends React.Component{
    constructor(props){
        super(props);       
    }

    setCategoryTitle(catArr){
        if(!catArr) return false;

       return catArr.filter((item)=>{
            return item.id == this.props.match.params.id;
        })
    }

    orderProduct=(item)=>{
        let order = Object.assign(item,{id_item: Math.floor(uniqNumber()).toString()});
        this.props.onSelectItemForOrder(item);
    }

    returnToMain=()=>{
        this.props.history.goBack();
    }

    render(){
        
        let selectedObj = this.setCategoryTitle(this.props.categories);
        
        return(
            <div>
               {   (selectedObj && selectedObj.length > 0) ?
                   <ListServing items={this.props.items} id={this.props.match.params.id} 
                        title={selectedObj[0].title} titleImg={selectedObj[0].img_url}
                        onOrderItem={this.orderProduct} onBack={this.returnToMain}  />
                        :
                        'loading'
                }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    

    return{
      items: state.listElements.items,
      categories: state.listElements.categories
    }
  };
  
  const mapDispatchToProps = dispatch => ({
    onSelectItemForOrder: (item)=>{
        let data = {
            id: item.id_item,
            title: item.title,
            img: item.url_img
        }
        dispatch(selectItemForOrder(data));
    }
  });
export default connect(mapStateToProps,mapDispatchToProps)(Products);