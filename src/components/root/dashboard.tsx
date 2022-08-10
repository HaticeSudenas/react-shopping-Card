import { Row, Col, Form, Dropdown } from 'react-bootstrap';
import ProductList from '../products/product-list';
import Size from '../sizes/size';
import { connect } from "react-redux";
import { useState } from 'react';
function Dashboard(props: any) {
    const [number, setNumber] = useState({ bas: 0, son: 1000 });
    return (
        <div style={{ marginTop: "30px" }}>
            <Col>
                <Dropdown style={{position:"absolute",left:"500px",top:"-10px"}}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Filtrele
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{backgroundColor:"lightgrey"}}>
                        <Dropdown.Item  onClick={() => setNumber({ bas: 0, son: 100 })} href="#/action-1">0$ - 100$</Dropdown.Item>
                        <Dropdown.Item  onClick={() => setNumber({ bas: 100, son: 200 })} href="#/action-2">100$ - 200$</Dropdown.Item>
                        <Dropdown.Item  onClick={() => setNumber({ bas: 200, son: 1000 })} href="#/action-3">200$++</Dropdown.Item>
                        <Dropdown.Item onClick={() => setNumber({ bas: 0, son: 1000 })} href="#/action-3">Filtreyi Kaldır</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <h6 style={{ textAlign: "center", marginRight: "300px", color: "#6c757d", fontSize: "18px", fontFamily: "sans-serif" }}>({props.products.length}) ürün bulundu</h6>
            </Col>
            <Col>
                <Row>
                    <Col xs="3">
                        <Size />
                    </Col>

                    <Col xs="8">
                        <Row xs="3">
                            <ProductList number={number} />
                        </Row>
                    </Col>
                </Row>
            </Col>
        </div>
    );

}
function mapStateToProps(state: any) {
    return {
        products: state.productListReducer
    }
}
export default connect(mapStateToProps)(Dashboard);