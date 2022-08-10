import { Component, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect} from "react";
import { Badge, Button, ButtonGroup, ListGroup, ListGroupItem} from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as sizeActions from "../../redux/actions/sıze-actıons";
import * as productActions from "../../redux/actions/product-actions";

function Size(props:any) {
    useEffect(()=>{
        props.action.getCategories();
    },[]);

    function selectCategory(category:string){
        props.action.changeCategories(category);
        props.action.getProducts(category)
    }
    const a=()=>{
        props.action.getProducts("hicbiri");
        props.action.changeCategories("");
    }
    return <>
        <h3><Badge bg="secondary">Categories</Badge></h3>
        <Badge bg="secondary" style={{height:"35px",cursor:"pointer",marginBottom:"22px",marginTop:"10px"}} onClick={()=>{a()}}><div style={{marginTop:"10px",marginLeft:"0px"}}>Tüm Kategoriler</div></Badge>
        <ListGroup>
            {
                props.categories.map((result:string)=>(
                    <ListGroupItem style={{cursor:"pointer"}} className="activee" active={result===props.currentSize?true:false} onClick={()=>selectCategory(result)} key={result}>
                        {result}
                   </ListGroupItem>
                ))
            }

        </ListGroup>
    </>
}

function mapStateToProps(state:any){
    return{
        currentSize:state.changeSizeReducer,
        categories:state.categoryListReducers
    }
}

function mapDispatchToProps(dispatch:any){
    return{
        action:{
            getCategories:bindActionCreators(sizeActions.getCategories,dispatch),
            changeCategories:bindActionCreators(sizeActions.changeSize,dispatch),
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Size);

/*
class Size extends Component {
    render():any{
        return <>
        <h3>Sizes : </h3>
        <ButtonGroup style={{marginBottom:"20px"}} aria-label="Basic example">
            <Button style={{borderRadius:"40px",width:"40px",height:"40px",border:"none",marginRight:"20px"}} className="sizeButon" variant="secondary">XS</Button>
            <Button style={{borderRadius:"40px",width:"40px",height:"40px",border:"none",marginRight:"20px"}} variant="secondary">S</Button>
            <Button style={{borderRadius:"40px",width:"40px",height:"40px",border:"none",marginRight:"20px"}} variant="secondary">M</Button>
            <Button style={{borderRadius:"40px",width:"40px",height:"40px",border:"none",marginRight:"20px"}} variant="secondary">L</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Basic example">
            <Button style={{borderRadius:"40px",width:"40px",height:"40px",border:"none",marginRight:"20px"}} variant="secondary">ML</Button>
            <Button style={{borderRadius:"40px",width:"40px",height:"40px",border:"none",marginRight:"20px"}} variant="secondary">XL</Button>
            <Button style={{borderRadius:"40px",width:"40px",height:"40px",border:"none",marginRight:"20px"}} variant="secondary">{}</Button>
        </ButtonGroup>
    </>
    }
}
*/