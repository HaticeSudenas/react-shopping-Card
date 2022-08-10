import { Badge, Button, CardImg, Col, Dropdown, ListGroup, NavItem, NavLink, Placeholder, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { cartProduct } from "../../redux/typesctipt/cart-types";
import * as cartActions from "../../redux/actions/cart-action";
import { CLIENT_RENEG_WINDOW } from "tls";
import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";
import { useEffect } from "react";
function Card(props: any) {
  const DownItem = (cartItem: any) => {
    if (cartItem.quantity > 1) {
      props.action.downFromCart(cartItem);
    } else {
      props.action.removeFromCart(cartItem.product)
    }
  }
  function renderEmpty() {
    return (
      <Dropdown.Toggle id="dropdown-button-dark-example1" variant="light">
        <i style={{ color: "black", fontSize: "45px", position: "absolute", left: "-5px", top: "-1px" }} className="fa-solid fa-cart-shopping"><div style={{ fontSize: "10px", position: "absolute", color: "black", backgroundColor: "#ffc107", width: "20px", height: "20px", textAlign: "center", borderRadius: "30px", top: "-5px", left: "40px" }}><h3 style={{ fontSize: "15px", fontWeight: "bold" }}>0</h3></div></i>
      </Dropdown.Toggle>
    );
  }
  var toplam=0;
  const notCloseplus=(event:any,cartItem:cartProduct)=>{
    props.action.addFromCart(cartItem)
   event.stopPropagation();
  }
  const notCloseminus=(cartItem:cartProduct,event:any)=>{
    DownItem(cartItem)
    event.stopPropagation();
  }
  const notClosedelete=(cartItem:cartProduct,event:any)=>{
    props.action.removeFromCart(cartItem.product)
    event.stopPropagation();
  }

  function renderSummary() {
    return (<div >
      <Dropdown.Toggle id="dropdown-button-dark-example1" variant="light">
        <i style={{ color: "black", fontSize: "45px", position: "absolute", left: "-5px", top: "-1px" }} className="fa-solid fa-cart-shopping"><div style={{ fontSize: "10px", position: "absolute", color: "black", backgroundColor: "#ffc107", width: "20px", height: "20px", textAlign: "center", borderRadius: "30px", top: "-5px", left: "40px" }}><h3 style={{ fontSize: "15px", fontWeight: "bold" }}>{props.cart.length}</h3></div></i>
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ backgroundColor: "#393838" }} variant="dark">
        {props.cart.map((cartItem: cartProduct) =>(
          <Dropdown.Item key={cartItem.product.id} href="#/action-1">
          <ListGroup>
            <ListGroup.Item style={{ display: "flex" }}>
              <div><i onClick={(e) => notClosedelete(cartItem,e)} style={{ color: "red", fontSize: "23px", position: "absolute", left: "-5px", top: "-5px" }} className="fa-solid fa-circle-minus"></i></div>
              <div style={{ width: "50px", marginRight: "10px" }} className="ms-2 me-auto">
                <CardImg src={cartItem.product.image} />
              </div>
              <div style={{ marginRight: "10px" }} className="ms-2 me-auto">
                <Col>
                  <Row >{cartItem.product.title}</Row>
                  <Row style={{ fontWeight: "bold", fontSize: "25px", marginTop: "15px" }}>${cartItem.product.price}</Row>
                </Col>
              </div>
              <div style={{ marginRight: "20px" }}>
                <h5><Badge bg="secondary">
                  {cartItem.quantity}
                </Badge></h5>
              </div>
              <div>
                <Col>
                  <Row>
                    <h5><Badge onClick={(e) => notCloseplus(e,cartItem)} style={{ width: "25px" }} bg="warning">
                      +
                    </Badge></h5>
                  </Row>
                  <Row>
                    <h5><Badge onClick={(e) => notCloseminus(cartItem,e)} style={{ width: "25px" }} bg="warning">
                      -
                    </Badge></h5>
                  </Row>
                </Col>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Dropdown.Item>))
        }
      <Dropdown.Divider />

      {props.cart.map((cartItem:cartProduct)=>{
        if(cartItem.quantity*cartItem.product.price as Number){
          toplam=toplam+cartItem.quantity*cartItem.product.price
        }
      })}
      <Dropdown.Item>
        <Row style={{ color: "lightgray", fontSize: "20PX" }}>SUBTOTAL</Row>
        <Row style={{ float: "right" }}>
          <Row style={{ fontSize: "20px", fontWeight: "bold", color: "#ffc107", }}>${toplam}</Row>
        </Row>
      </Dropdown.Item>

      </Dropdown.Menu>
    </div>
    );
  }

  return <>
    <div>{
    props.cart.length > 0 ? renderSummary() : renderEmpty()
    }</div>
  </>
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
export default connect(mapStateToProps, mapDispatchToProps)(Card);