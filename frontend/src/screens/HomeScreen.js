import React, { useEffect, useState } from "react";
import Product from "../component/Product";
import axios from "axios";
import LoadingBox from "../component/LoadingBox";
import MessageBox from "../component/MessageBox";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  useEffect(() => {
    const fetchData = async () => {
        try{
        setLoading(true)
        const { data } = await axios.get("/api/products");
        setLoading(false);
        setProducts(data);
      }
      catch(err){
        setError(err.message)
        setLoading(false)
      };
      }
    fetchData();
  }, []);
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
