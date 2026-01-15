import imageFile from "../styles/images/이미지.jpg"
import {StyleContentBlock, StyleContentWrap } from "./common/StyleContent";
import { ProductContext, ProductImg, ProductList, ProductListBox, ProductName, ProductPrice, ProductTitle } from "./common/StyleProduct";

const product = [
    {id:1, name:"멋진사진", context : "화려하고 멋있고 아름답고...등등", price : "5000원", url : imageFile},
    {id:2, name:"멋진사진", context : "화려하고 멋있고 아름답고...등등", price : "5000원", url : imageFile},
    {id:3, name:"멋진사진", context : "화려하고 멋있고 아름답고...등등", price : "5000원", url : imageFile},
    {id:4, name:"멋진사진", context : "화려하고 멋있고 아름답고...등등", price : "5000원", url : imageFile},
    {id:5, name:"멋진사진", context : "화려하고 멋있고 아름답고...등등", price : "5000원", url : imageFile},
    {id:6, name:"멋진사진", context : "화려하고 멋있고 아름답고...등등", price : "5000원", url : imageFile},
    {id:7, name:"멋진사진", context : "화려하고 멋있고 아름답고...등등", price : "5000원", url : imageFile},
    {id:8, name:"멋진사진", context : "화려하고 멋있고 아름답고...등등", price : "5000원", url : imageFile},
    {id:9, name:"멋진사진", context : "화려하고 멋있고 아름답고...등등", price : "5000원", url : imageFile},
]
const IndexCom = () => {
    return(<>
        <StyleContentBlock>
            <StyleContentWrap>
                <ProductTitle>상품제목~</ProductTitle>
                <ProductList>
                    {product.map(pro => (
                        <ProductListBox key={pro.id}>
                            <ProductImg src={pro.url} alt=""></ProductImg>
                            <ProductName>{pro.name}</ProductName>
                            <ProductContext>{pro.context}</ProductContext>
                            <ProductPrice>{pro.price}</ProductPrice>
                        </ProductListBox>
                    ))}
                </ProductList>
            </StyleContentWrap>
        </StyleContentBlock>
    </>)
}
export default IndexCom;