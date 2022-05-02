import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import {} from "../../theme/components/contents/contents.css";
import ReactStars from "react-rating-stars-component";
import fullstar from "../../assets/icons/star-full.svg";
import star from "../../assets/icons/star.svg";
import addcart from "../../assets/icons/add-cart.svg";
import { withRouter } from "react-router-dom";
class detail extends Component {
    constructor(props){
        super(props)
        this.state ={
            amount:1
        }
    }
    componentDidMount(){
        this.props.action(JSON.parse(localStorage.getItem("detail")))
    }
    toPath (path) {
        this.props.history.push(path)
      }
    handleAddCart =(value)=>{
        this.props.dispatch({
          type:'ADD_CART',
          data: {
              detail:value,
              amount:this.state.amount
          },
          
        })
      }
      
    setAmount(type){
        if(type==='add')
        {
            this.setState((prevState) => ({ amount: prevState.amount + 1 }))
        }
        else{
            this.state.amount > 0? this.setState((prevState) => ({ amount: prevState.amount - 1 })) :this.setState((prevState) => ({ amount: prevState.amount }))
        }
    }

    render() {
        return (
            <Fragment>
            {console.log(this.props.data)}
                <div className="container content-detail">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-xxl-5">
                        
                            <div className='box-img'>
                                <img
                                className="card-img-top detail-img"
                                src={this.props.detail?.image_url}
                                alt="..."
                                />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xxl-7">
                            <div>
                                <div className='detail-title'><h3>{this.props.detail?.name}</h3></div>
                                <div>
                                    <span className='stars'>
                                    <ReactStars
                                    value={this.props.detail?.review?.rating}
                                    size={17}
                                    emptyIcon={
                                        <img src={star} alt="" className="icon icon-detail" />
                                    }
                                    filledIcon={
                                        <img src={fullstar} alt="" className="icon icon-detail" />
                                    }
                                    />
                                    </span>
                                    
                                    <span className='detail-reviwes'>({this.props.detail?.review?.number} reviews)</span>
                                </div>
                                <div className='detail-description'><p>{this.props.detail?.description}</p></div>
                                <div><h6 className='title-price '>Price</h6><h2 className='volumn-price'>฿ {this.props.detail?.price}</h2></div>
                                <div>
                                Quantitiy: 
                                <div className="btn-group mr-2" role="group" aria-label="Second group">
                                    <button onClick={()=>this.setAmount('reduce')} type="button" className="btn btn-x btn-left">-</button>
                                    <span  className="btn btn-light">{this.state.amount}</span>
                                    <button onClick={()=>this.setAmount('add')} type="button" className="btn btn-x btn-right">+</button>
                                </div>
                                </div>
                                <div>
                                    <span onClick={()=>{this.handleAddCart(this.props.detail);this.toPath('/cart')}} className='badge rounded-pill btn-addcart'><img src={addcart} alt='' /><span>ADD TO CART</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) =>{

    return {data:state}

}
export default connect(mapStateToProps)(withRouter(detail))