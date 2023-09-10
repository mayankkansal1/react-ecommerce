import ProductDetail from "../features/Product-list/components/ProductDetails";
import NavBar from "../features/navbar/Navbar";
function ProductDetailPage() {
    return (
        <div>
            <NavBar>
                <ProductDetail></ProductDetail>
            </NavBar>
        </div>
    );
}

export default ProductDetailPage;
