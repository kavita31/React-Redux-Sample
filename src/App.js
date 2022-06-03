import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./containers/Header";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
            <Header />
                <Routes>
                    <Route exact path="/" element={<ProductListing />} />
                    <Route exact path="/product/:productId" element={<ProductDetail />} />
                    <Route>404 Not Found</Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App