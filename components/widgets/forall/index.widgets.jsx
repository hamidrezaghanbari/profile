import styled from "styled-components"

const PageWrapper = styled.div`
   position: relative;
   background-color: #c2c2c2;
   width: 100%;
   min-height: 100vh;

   display: flex;
   align-items: center;
   justify-content: center;
   overflow: auto;


   &:before {
      content: ' ';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.4;
      background-image: url('/images/background_pattern.jpg');
      background-repeat: no-repeat;
      background-position: 50% 0;
   }
`

export const MainSec = styled.div`
   background-color: white;
   border-radius: 5px;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   display: flex;
   position: relative;

   // ** style for desktop
   min-height: 85vh;
   width: 70vw;
   overflow: auto;

   @media only screen and (max-width: 1300px) {
      width: 95vw;
      min-height: 90vh;
   }

   @media only screen and (max-width: 720px) {
      flex-direction: column;
   }
`

export const ChangeLang = styled.div`
   position: absolute;
   top: 30px;
   animation: ${({ lang }) => lang === 'en' ? 'toEnToggler 1s' : 'toFaToggler 1s'};
   right: ${({ lang }) => lang === 'en' ? '3%' : '87%'};
  
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   z-index: 100;

   padding: 5px;
   background-color: var(--primary-color);
   border-radius: 5px;

   @media only screen and (max-width: 720px) {
      transform: rotate(90deg);
      transition: none;
      animation: none;
      right: 1%;
      top: 50px;
   }
`

export const Lang = styled.div`
   font-size: 22px;
   width: 30px;
   height: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${({ active }) => active ? 'var(--secondary-color)' : ''};
   color: ${({ active }) => active ? 'var(--primary-color)' : 'var(--secondary-color)'};
   border-radius: 5px;
   z-index: 10;
   margin: 0 5px;

   font-family: ${({ font }) => font === 'en' ? 'raleway_regular' : 'vazir_regular'};

   &:hover {
      cursor: pointer;
      border: 1px solid var(--secondary-color);
   }

   @media only screen and (max-width: 720px) {
      transform: rotate(-90deg);
   }
`


export default PageWrapper
