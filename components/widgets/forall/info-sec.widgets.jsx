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
   

   @media only screen and (max-width: 720px) {
      width: 100%;
      height: 50vh;
      left: 0;
      animation: none;
   }
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

   @media only screen and (max-width: 720px) {
      width: 140px;
      height: 140px;
   }
`

export const Name = styled.h1`
   font-size: 26px;

   text-align: center;
   font-family: ${({ theme }) => `${theme.font}_medium`};

   @media only screen and (max-width: 720px) {
      font-size: 22px;
   }
`

export const Job = styled.h2`
   font-size: 16px;
   font-family: ${({ theme }) => `${theme.font}_regular`};
   
   text-align: center;
`

export const NavSec = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   align-items: center;

   @media only screen and (max-width: 720px) {
      flex-direction: row;
      margin-bottom: 15px;
      box-shadow: rgba(99, 99, 99, 0.2) 10px 0px 2px 0px;
      justify-content: space-around;
   }
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
      font-family: ${({ theme }) => `${theme.font}_medium`};
   }

   @media only screen and (max-width: 720px) {
      width: 30%;
   }   
`

export const LineBreak = styled.div`
   height: 0.8px;
   width: 55%;
   margin: 4px 0;
   background-color: var(--secondary-color);

   @media only screen and (max-width: 720px) {
      display: none;
   }   
`

export const SocialSec = styled.div`
   width: 100%;
   padding: 0 10px;
   display: flex;
   flex-direction: column;

   @media only screen and (max-width: 720px) {
      display: none;
   }
`

export const SocialItem = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   padding: 5px 0;

   & > span, a {
      font-size: 15.5px;
      font-family: ${({ theme }) => `${theme.font}_regular`};
      cursor: pointer;
      color: var(--secondary-color);
      
      &:hover {
         font-family: ${({ theme }) => `${theme.font}_medium`};
      }

      @media only screen and (max-width: 900px) {
         font-size: 12px;
      }
   }
`