import { useEffect, useState } from "react";
import { Badge, Button, Card, CardGroup, Col, Dropdown, Form, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/product-actions";
import * as cartActions from "../../redux/actions/cart-action";
import * as w from "../../redux/typesctipt/cart-types"
function ProductList(props: any) {
    useEffect(() => {
        props.action.getProducts();
    }, []);
    const addToCart = (product: any) => {
        props.action.addtoCart({ quantity: 1, product })
    }
    function productsFilter(product: w.Product) {
        if (product.price > props.number.bas && product.price < props.number.son) {
            return (<div key={product.id} className="d-flex justify-content-around" style={{ margin: "50px" }}>
                <Card style={{ width: '18rem', height: "100%" }}>
                    <Card.Img style={{ width: "250px", height: "300px" }} variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: "center" }}>{product.title}</Card.Title>
                        <Card.Text style={{ fontWeight: "bold", textAlign: "center", fontSize: "20px" }}>
                            ${product.price}
                        </Card.Text>
                        <Card.Text style={{ color: "grey", textAlign: "center" }}>
                            or 9 x$1.21
                        </Card.Text>
                        <Button onClick={() => addToCart(product)} style={{ marginLeft: "50PX" }} variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </div>)
        }
        else { return (<div style={{ display: "none" }}></div>) };

    }
    return (
        <>

            {
                props.products.map((product: w.Product) => (productsFilter(product)))
            }
        </>
    );
}
function mapStateToProps(state: any) {
    return {
        currentSize: state.changeSizeReducer,
        products: state.productListReducer
    }
}
function mapDispatchToProps(dispatch: any) {
    return {
        action: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
            addtoCart: bindActionCreators(cartActions.addToCart, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);


/*<CardGroup>
                        <Card key={product.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center" }}>{product.title}</Card.Title>
                                <Card.Text style={{ fontWeight: "bold", textAlign: "center", fontSize: "20px" }}>
                                    {product.price}
                                </Card.Text>
                                <Card.Text style={{ color: "grey", textAlign: "center" }}>
                                    or 9 x$1.21
                                </Card.Text>
                                <Button style={{ marginLeft: "50PX" }} variant="dark">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup> 
                    
                    
                    
                    <h3>
                <Badge bg="secondary">Products :  </Badge>
                <Badge bg="light">{props.currentSize}</Badge>
            </h3>*/