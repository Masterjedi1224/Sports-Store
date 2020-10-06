import React, { Component } from "react";

export class CartDetailsRow extends Component {
    constructor(props) {
        super(props);

        console.dir(props);

        console.log("This.props")
        console.dir(this.props);
    }
    
    handleChange = ( product, event ) => {
        this.props.updateQuantity( product, event.target.value );
    }
    render() {
        if(this.props.cartItems === 0) {
            return <tr>
                <td colSpan="5">Your Cart is Empty</td>
            </tr>
        }
        else
        {
            return <React.Fragment>
                 { this.props.cart.map( item => 
                    <tr key ={ item.product.id}>
                        <td>
                            <input 
                                type="number" 
                                value={ item.quantity }
                                onChange={ (ev) => this.handleChange( item.product, ev ) }
                            />
                        </td>
                        <td>{ item.product.name }</td>
                        <td>${ item.product.price.toFixed(2) }</td>
                        <td>${ item.quantity * item.product.price }</td>
                        <td>
                            <button 
                                className="btn btn-sm btn-danger"
                                onClick={ () => this.props.removeFromCart(item.product)}>
                                    Remove
                                </button>
                        </td>
                    </tr> 
                    )}

                    <tr>
                        <th colSpan="3" className="text-right">
                            Total
                        </th>
                        <th colSpan="2">
                            ${ this.props.cartPrice.toFixed(2) }
                        </th>
                    </tr>

            </React.Fragment>
           
        }
    }
}