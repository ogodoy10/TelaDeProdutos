import styled from "styled-components";
import Images from "./images";
import Title from "./Title";
import Description from "./Description";

const CardContainer = styled.div`
    overflow-y: scroll;
    background-color: grey;
    box-shadow: 0 0 10px 1px black;
    width: 400px;
    height: 450px;
    margin: 30px 0 20px 75px;
    border-radius: 10px;
    text-align: center;
    justify-center: center;
` 

const Card = ({title, description, imageUrl}) => (
    <CardContainer>
        <Images src={imageUrl} alt={title}/>
        <Title>{title}</Title>
        <Description>{description}</Description>
    </CardContainer>

)

export default Card;