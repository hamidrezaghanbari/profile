import styled from "styled-components"

const PageWrapper = styled.div`
   background-color: #f0f0f0;
   width: 100%;
   min-height: 100vh;

   display: flex;
   align-items: center;
   justify-content: center;
`

export const MainSec = styled.div`
   background-color: white;
   border-radius: 5px;
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   display: flex;
   position: relative;

   // ** style for desktop
   height: 85vh;
   /* height: 1000px; */
   width: 70vw;
`

export const ChangeLang = styled.div`
   position: absolute;
   top: 30px;
   right: ${({lang}) => lang === 'en' ? '3%' : '87%'};
   transition: right 0.8s ease; 
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   z-index: 100;

   padding: 5px;
   background-color: var(--primary-color);
   border-radius: 5px;
`

export const Lang = styled.div`
   font-size: 22px;
   width: 30px;
   height: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${({active}) => active ? 'var(--secondary-color)' : ''};
   color: ${({active}) => active ? 'var(--primary-color)' : 'var(--secondary-color)'};
   border-radius: 5px;
   z-index: 10;
   margin: 0 5px;

   font-family: ${({ font }) => font === 'en' ? 'raleway_regular': 'vazir_regular'};

   &:hover {
      cursor: pointer;
      border: 1px solid var(--secondary-color);
   }
`


export default PageWrapper
