import React, { useEffect } from "react";
import Product from "../component/Product";
import LoadingBox from "../component/LoadingBox";
import MessageBox from "../component/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      {console.log(error)}
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox varient="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
