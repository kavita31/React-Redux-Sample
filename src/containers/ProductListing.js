import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from './ProductComponent';

const ProductListing = () => {
   // const products = useSelector((state) => state);
    const dispatch = useDispatch();

    

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get("https://fakestoreapi.com/products").catch((error) => {
                console.log("error", error)
            });
            dispatch(setProducts(response.data));
        };
        fetchProducts();
    },[dispatch]);

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing;