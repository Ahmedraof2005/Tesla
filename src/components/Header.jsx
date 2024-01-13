import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState , useEffect } from 'react';

const Header = () => {
  const [BurgerStatus , setBurgerStatus] = useState(false);
  return (
  
    <Container>

       <a href="">
        <img src="images/logo.svg" alt="" />
       </a>
       <Menu>
       <a href="#">Model S</a>
       <a href="#">Model 3</a>
       <a href="#">Model X</a>
       <a href="#">Model Y</a>
       </Menu>


      <RightMenu>
      <a href="#">SHOP</a>
      <a href="#">TESLA ACCOUNT</a>
         <CustomMenu onClick={ ()=> setBurgerStatus(true) } />
      </RightMenu>
      
      <BurgerNav show={BurgerStatus}>
        <CloseWrapper>
            <CustomClose onClick={ ()=> setBurgerStatus(false) } />
        </CloseWrapper>
      
      <li> <a href="">Excesting Inventory</a></li>
      <li> <a href="">Used Inventory</a></li>
      <li> <a href="">Trade-in</a></li>
      <li> <a href="">Cybertruck</a></li>
      <li> <a href="">Roadaster</a></li>
      <li> <a href="">Excesting Inventory</a></li>
      <li> <a href="">Excesting Inventory</a></li>
      </BurgerNav>


    </Container>
  )
}

export default Header

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 20px;
top: 0;
left: 0;
right: 0;
z-index: 1;

`
const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex:   1;

 a{
  text-transform:uppercase ;
  padding: 0px 10px;
  font-weight: 600; 
  flex-wrap: nowrap;
 }

 
@media (max-width: 768px) {
  display: none;
  } 

`
const RightMenu = styled.div`
display: flex;
align-items: center;


a{
  text-transform:uppercase ;
  font-weight: 600; 
  margin-right: 10px;
 }

`
const CustomMenu = styled(MenuIcon)`
cursor: pointer;

`
const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color: white;
width: 300PX;
z-index: 10;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.2s ease-in ;

li{
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
}

a{
  
  font-weight: 600;
     
}


`
const CustomClose = styled(CloseIcon)`
cursor: pointer;
`
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end
`