import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const ProductCard = () => {
  const items = useSelector((state) => state.allCart.items);
  console.log(items);

  const dispatch = useDispatch();
  return (
    <div className="m-5">
      <MDBContainer>
        <MDBRow className="md-2">
          {items.map((item) => (
            <MDBCol key={item.id} size="md">
              <MDBCard>
                <MDBCardImage src={item.img} position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>${item.price}</MDBCardText>
                  <MDBBtn onClick={() => dispatch(addToCart(item))}>
                    Add to Cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ProductCard;
