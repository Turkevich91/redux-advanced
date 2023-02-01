import ProductItem from './ProductItem';
import classes from './Products.module.css';
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart-slice";

const DUMMY_PRODUCTS = [
    {id: 'p1', price: 6, title: 'my first book', description: 'The first book i ever wrote'},
    {id: 'p2', price: 5, title: 'my second book', description: 'The second book i ever wrote'},
    {id: 'p3', price: 7, title: 'my third book', description: 'The third book i ever wrote'},
    {id: 'p4', price: 8, title: 'my fifth book', description: 'The fifth book i ever wrote'}
]

const Products = (props) => {


    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map(product => {
                    return <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                })}

            </ul>
        </section>
    );
};

export default Products;
