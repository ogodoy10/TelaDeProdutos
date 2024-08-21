import styled from "styled-components";
import Card from "./Card";

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Três colunas de tamanho igual */
    background-color: white;
    box-shadow: 0 0 20px 10px whitesmoke; /* Efeito de luz */
    width: 90%;
    height: 100%;
    margin-left: 75px;
    border-radius: 10px;
    padding: 15px;
` 

const Products = ({products}) => (
    <ProductsContainer>
        {products.map(product => (
            <Card
                key={product.id}
                title={product.title}
                description={product.description}
                imageUrl={product.imageUrl}
            />
        ))}
    </ProductsContainer>

)

export default Products;