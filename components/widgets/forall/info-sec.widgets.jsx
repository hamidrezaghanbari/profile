import styled from "styled-components"

export const InfoSecWrapper = styled.div`
   box-shadow: ${({ theme }) => theme.name === 'en' ? 'rgba(99, 99, 99, 0.2) 2px 0px 8px 0px' : 'rgba(99, 99, 99, 0.2) -2px 0px 8px 0px'};
   display: flex; 
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   padding-top: 20px;

   position: absolute;
   
   left: ${({ theme }) => theme.name === 'en' ? '0' : '70%'};
   animation: ${({ theme }) => theme.name === 'en' ? 'toEnInfo 1s' : 'toFaInfo 1s'};


   border-radius: ${({ theme }) => theme.name === 'en' ? '5px 0 0 5px' : '0 5px 5px 0'};
   z-index: 5;
   background-color: white;
   
   // ** desktop style
   width: 30%;
   height: 100%;
   
`



export const ImageWrapper = styled.div`
   /* margin-top: 40px; */
`

export const ImageBack = styled.div`
   position: relative;
   width: 170px;
   height: 170px;
   border: 1px solid var(--secondary-color);
   border-radius: 5px;

   &  img {
       border-radius: 5px;
   }
`

export const Name = styled.h1`
   font-size: 26px;

   padding: 25px 0 20px 0;
   text-align: center;
   font-family: ${({ theme }) => `${theme.font}_medium`};
   `

export const Job = styled.h2`
   font-size: 18px;
   font-family: ${({ theme }) => `${theme.font}_regular`};
   
   padding-bottom: 10px;
   text-align: center;
`

export const NavSec = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   align-items: center;

`

export const NavItem = styled.a`
   height: 30px;
   width: 80%;
   margin: 5px 0;
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: ${({ theme }) => `${theme.font}_regular`};
   cursor: pointer;


   background-color: ${({ active }) => active ? 'var(--primary-color)' : 'white'};
   border: none;
   border-radius: 5px;
   cursor: ${({ active }) => active ? '' : 'pointer'};

   &:hover, &:focus {
      border: ${({ active }) => active ? '' : '2px solid var(--primary-color)'};
   }
`

export const LineBreak = styled.div`
   height: 0.8px;
   width: 55%;
   margin: 8px 0;
   background-color: var(--secondary-color);
`

export const SocialSec = styled.div`
   width: 100%;
   padding: 0 10px;
   display: flex;
   flex-direction: column;
`

export const SocialItem = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 5px 0;

   & > span, a {
      font-size: 15.5px;
      font-family: ${({ theme }) => `${theme.font}_regular`};
      cursor: pointer;
      color: var(--secondary-color);
      
      &:hover {
         font-family: ${({ theme }) => `${theme.font}_medium`};
      }
   }
`