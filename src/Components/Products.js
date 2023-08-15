import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Rtk/Slices/Products-slices';  
import { Container, Row,Col } from 'react-bootstrap';
import { AddToCart } from '../Rtk/Slices/cart-slice';
import { Link } from 'react-router-dom';

export default function Products() {
const products=useSelector((state)=>state.products);
console.log(products);
const dispatch=useDispatch();

useEffect(()=>{
dispatch(fetchProducts());
},[dispatch]);
    return (
  <Container>
     <Row>
      {products?.products?.filter((product)=>product.category==="laptops" || product.category==="smartphones").map((product)=>(
      (<Col key={product.id}>
        <Card style={{width:'18rem',height:"35rem ",margin:"5rem"}}>
        <Link to={"/Products/" +product.id+`/${product.title}`}>    <Card.Img variant='top' src={product.images[0]} style={{height:'17rem'}}/></Link> 
        

  <Card.Body >
           <Card.Title>{product.title}</Card.Title>
           <Card.Text>{product.description}</Card.Text>
           <Card.Text>Instock:{product.stock}</Card.Text>
           <Card.Text>Price:{product.price}$</Card.Text>

         <Button variant="primary"  onClick={() => { dispatch(AddToCart(product)) }} >      
  
           Buy
          </Button>
         </Card.Body>

        </Card>
        </Col>

       )
      )

      )

      }

     </Row>
  </Container>
    );
  }

 // <Card
  //   //   className={`col  bg-${
  //   //   quantity === 1 ? "warning bg-opacity-75 text-light" : "light text-dark"
  //   // }    justify-content-center`}
       
  //     >
  //       <Card.Img
  //         variant="top"
  //         src=""
  //         style={{ height: "15rem", objectFit: "cover" }}
  //         // className={`rounded ${!inStock && "opacity-50"}`}
  //       />
  //               <Card.Body>
  //               <Card.Text>desc</Card.Text>

  //       {/* <Card.Body className={`text-center ${!inStock && 'opacity-50'}`}> */}
  //         {/* <Card.Title>{title}</Card.Title>
  //         <Card.Text>{desc}</Card.Text>
  //         <Card.Text>Stock : {inStock ? quantity : "Empty 🤦‍♂️"}</Card.Text>
  //         <Button variant={`${inStock ? "success" : "danger disabled"}`}           onClick={clickHandler}
  // >
  //           {inStock ? `Buy ${price}$` : "Not Available"}
  //         </Button> */}
  //       </Card.Body>
  //     </Card>