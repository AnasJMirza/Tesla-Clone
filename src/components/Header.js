import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    return (
        <Container>
            <a href="#">
                <img src="/images/images/logo.svg"></img>
            </a>

            <Manu>
                <a href='#'>Model 3</a>
                <a href='#'>Model S</a>
                <a href='#'>Model X</a>
                <a href='#'>Model Y</a>
                <a href='#'>Solar roof</a>
                <a href='#'>Solar panels</a>
            </Manu>

            <RightManu>
                <a href='#'>shop</a>
                <a href='#'>account</a>

                

                <SideBar>
                    <CloseIconWrapper>
                        <CloseButton />
                    </CloseIconWrapper>
                    <li>Model 3</li>
                    <li>Model S</li>
                    <li>Model X</li>
                    <li>Model Y</li>
                    <li>Existing Inventory</li>
                    <li>Cyber Truck</li>
                    <li>Roadster</li>
                    <li>Used Inventory</li>
                    <li>Test Drive</li>
                </SideBar>

                <CustomManu />
            </RightManu>

            

        </Container>
    );
};

export default Header;


const Container = styled.div`
    min-height : 3em;
    width : 100%;
    padding : 0px 15px;
    position : fixed;
    display : flex;
    align-items : center;
    justify-content : space-around;
    z-index : 10;
    // border : 2px solid black;

    @media (max-width : 1000px){
        justify-content : space-between;
    }

`

const Manu = styled.div`
    
    a {
        font-weight : 600;
        text-decoration : none;
        padding : 0px 12px;
        text-transform : uppercase;
        cursor : uppercase;
    }

    @media (max-width : 1000px){
        display : none;
    }
`

const RightManu = styled.div`

    display : flex;
    align-items : center;

    a {
        font-weight : 600;
        text-decoration : none;
        // padding-right : 25px;
        padding : 0px 12px;
        text-transform : uppercase;
    }

    @media (max-width : 1000px){
        
    }
`

const CustomManu = styled(MenuIcon)`
    cursor : pointer;
    @media (max-width : 1000px){
        padding-right : 40px;   
    }
    
`

const SideBar = styled.div`
    position : fixed;
    top : 0;
    right : 0;
    bottom : 0;

    display : flex;
    flex-direction : column;
    background-color : white;
    align-items : flex-start;
    // justify-content : space-around;
    padding : 15px 5px;
    width : 260px;
    padding : 15px;
    z-index : 100;
    // opacity : 0.8;
    

    li{
        padding : 15px 5px;
        border-bottom : 1px solid gray;
        list-style : none;
        font-weight : 600;
        width : 100%;

        display : flex;
        justify-content : flex-start;
        
    }
`

const CloseIconWrapper = styled.div`
    width : 100%;
    display : flex;
    justify-content : flex-end;
    // border : 2px solid black;
`

const CloseButton = styled(CloseIcon)`

`