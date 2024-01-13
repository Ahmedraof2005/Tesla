import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
      <Section  
         title="Model S"
         description="Order Online Touchiess Delivery"
         backgroundImg="model-s.jpg"
         leftBtnText="Custom Order"
         rightBtnText="Excesting Inventory"
      />
      <Section
         title="Model Y"
         description="Order Online Touchiess Delivery"
         backgroundImg="model-y.jpg"
         leftBtnText="Custom Order"
         rightBtnText="Excesting Inventory"
      />
      <Section 
         title="Model 3"
         description="Order Online Touchiess Delivery"
         backgroundImg="model-3.jpg"
         leftBtnText="Custom Order"
         rightBtnText="Excesting Inventory"
      />
      <Section 
         title="Model X"
         description="Order Online Touchiess Delivery"
         backgroundImg="model-x.jpg"
         leftBtnText="Custom Order"
         rightBtnText="Excesting Inventory"
      />
       <Section  
         title="Lowesr Cost Solar Panels in America"
         description="Money-back guarantee"
         backgroundImg="solar-panel.jpg"
         leftBtnText="Order now"
         rightBtnText="Learn more"
      />
       <Section  
         title="Solar for new Roofs"
         description="Solar Roofs Costs Less Than a new Roof plus Solar panels"
         backgroundImg="solar-roof.jpg"
         leftBtnText="Order now"
         rightBtnText="Learn more"  
      />
         <Section  
         title="Accessories"
         description=""
         backgroundImg="accessories.jpg"
         leftBtnText="Order now" 
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
 height: 100vh;
`