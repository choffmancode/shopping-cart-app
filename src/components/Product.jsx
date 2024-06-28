import { SizeButton } from "./SizeButton";
import { SizeSelector } from "./SizeSelector";

// styles
import styled from "styled-components";


const Container = styled.div`
    background-color: white;
    margin-top: 8px;
    margin-right: 8px;
    padding: 16px 16px;
    border: solid 1px;
    border-color: gray;
    border-radius: 8px;
`
const ButtonRow = styled.div`
    margin-top: 16px;
    display: flex;
    background-color: white;
`

const CardContent = styled.div`
   
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

`
const CardTitle = styled.p`
    height: 56px;
    margin-bottom: 16px;
    margin-top: 8px;
    position: relative;
    padding: 0px 20px;

    &:before {
    content: "";
    width: 20px;
    height: 2px;
    background-color: rgb(0, 0, 0);
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -10px;
}

`

const CardText = styled.p`
    font-weight: bold;
    font-size: 18px;
`

const ImgWrapper = styled.img`
    border-radius: 8px;
    object-fit: contain;
    max-height: 100%;
    width: 100%;
`


export const Product = (product) => {

    console.log("p test", product)
    return (
        <Container>
 
                <CardContent>
                    <ImgWrapper 
                        src={`./data/static/products/${product.product.sku}-1-product.webp`} 
                        alt="card image">
                    </ImgWrapper>

                    <ButtonRow>
                        <SizeSelector />
                    </ButtonRow>
                    
                    <CardTitle>{product.product.title}</CardTitle>
                    <CardText>${product.product.price}</CardText>
                    
                </CardContent>
        
            </Container>
        
    );
}