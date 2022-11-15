import React, { Component } from 'react'

class Item extends Component{
    render() {
        var priceChange = this.props.hour24;
        priceChange = parseFloat(`${priceChange}`).toFixed(1);
        return (
            <ul className='item'>
                {/* <li><img src={this.props.logo} alt="Coin Logo"/></li> */}
                <li>{this.props.name}({this.props.symbol})</li>
                <li>₹{this.props.price}</li>
                <li>₹{this.props.volume}</li>
                {priceChange < 0 ?
                    <li className="priceChange neg">{priceChange}%</li> 
                    : <li className="priceChange pos">{priceChange}%</li>
                }
            </ul>
        );
    }
}
export default Item;