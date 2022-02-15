import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Section = (props) => {
    return (
        <Wrap bgImage = {props.image}>
            <Fade bottom>
                <TextComponent>
                    <h1> {props.title} </h1>
                    <p> {props.description} </p>
                </TextComponent>
            </Fade>

            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {props.leftButton}
                        </LeftButton>

                        {props.rightButton &&
                            <RightButton>
                                {props.rightButton}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>

                <DownArrow src="/images/images/down-arrow.svg" />
            </Buttons>

        </Wrap>
    );
};

export default Section;

const Wrap = styled.div`
    background-image: ${props => `url('/images/images/${props.bgImage}')` };
    width : 100vw;
    height : 100vh;
    background-size : cover;
    background-position : center;
    background-repeat : no-repeat; 

    display : flex;
    flex-direction : column;
    justify-content : space-between;
`

const TextComponent = styled.div`
    padding-top : 10vh;
`

const Buttons = styled.div`
   
`


const ButtonGroup = styled.div`
    display : flex;
    justify-content : center;
    

    @media (max-width : 768px){
        flex-direction : column;
        align-items : center;
    }
`

const LeftButton = styled.div`
    background-color : rgba(23,32,26,0.8);
    color : white;
    width : 280px;
    height : 40px;
    border-radius : 100px;
    display : flex;
    justify-content : center;
    align-items : center;
    text-transform : uppercase;
    margin : 10px;
    cursor : pointer;
`

const RightButton = styled(LeftButton)`
    background-color : white;
    color : rgba(23,32,26,0.8);
`

const DownArrow = styled.img`
    margin-top : 20px;
    height : 40px;
    animation : animateDown infinite 1.5s;
`
