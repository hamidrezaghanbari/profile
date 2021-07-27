import styled from "styled-components";

export const CardWrapper = styled.div`
   width: 48%;
   min-height: 460px;
   background-color: white;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
   border-radius: 5px;
   margin-bottom: 25px;
   border: 1px solid var(--primary-darker-color); 
   position: relative;
`

export const CardImg = styled.div`
   position: relative; 
   width: 100%;
   height: 180px;
   border-radius: 5px 5px 0 0;   
   &  img {
       border-radius: 5px 5px 0 0;
   }
`

export const CardBody = styled.div`
   padding: 8px;
`

export const CardTitle = styled.div`        
   display: flex;
   justify-content:space-between;
   align-items: center;
   padding-bottom: 10px;

`

export const CardName = styled.h2`
   font-family: ${({ theme }) => `${theme.font}_regular`};
`

export const CardDate = styled.div`
   font-family: ${({ theme }) => `${theme.font}_regular`};
   border: 2px solid var(--primary-color);
   padding: 4px;
   border-radius: 5px;
   cursor: pointer;

   &:hover {
      background-color: var(--primary-color);
      color: var(--secondary-color);
   }
`
export const CardDesc = styled.p`
   padding: 10px 0;
   font-size: 19px;
   font-family: ${({ theme }) => `${theme.font}_regular`};
`

export const CardFeatures = styled.div`
   margin: 10px 0;
   display: flex;
   align-items: center;
   flex-wrap: wrap;

   & > span {
    font-family: ${({ theme }) => `${theme.font}_medium`};
    margin-right: 5px;
   }
`

export const Feature = styled.div`
   font-family: ${({ theme }) => `${theme.font}_medium`};
   border: 2px solid var(--primary-color);
   padding: 4px;
   border-radius: 5px;
   margin-right: 5px;
   cursor: pointer;

  

   &:hover {
      background-color: var(--primary-color);
      color: var(--secondary-color);
   }
`

export const CardBtns = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
`

export const Btn = styled.a`
   & > span {
    font-family: ${({ theme }) => `${theme.font}_medium`};
   }
   display: flex;
   align-items: center;
   justify-content: space-around;
   cursor: pointer;
   flex-wrap: wrap;
   height: 34px;
   width: 49%;
   background-color:  ${({ active }) => active ? `var(--primary-color)`: 'white'};
   border:  ${({ active }) => active ? ``: '2px solid var(--primary-color)'};
   border-radius: 5px;

   &:hover {
        background-color: var(--primary-darker-color);
   }
`