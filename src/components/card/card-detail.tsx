import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cart-action";
function CartDetail(){
    return(
       <div></div>
    );
}
function mapStateToProps(state: any) {
    return {
      cart: state.cartReducer
    }
  }
  function mapDispatchToProps(dispatch: any) {
    return {
      action: {
        removeFromCart: bindActionCreators(cartActions.removeToCart, dispatch),
        addFromCart: bindActionCreators(cartActions.addToCart, dispatch),
        downFromCart: bindActionCreators(cartActions.downToCart, dispatch),
      }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);