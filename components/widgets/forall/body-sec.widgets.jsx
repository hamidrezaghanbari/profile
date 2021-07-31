import styled from "styled-components"

export const BodySecWrapper = styled.div`
   width: 70%;
   height: 100%;
   padding: 30px 25px;
   position: absolute;
   
   right: ${({theme}) => theme.name === 'en' ? '0': '30%'};
   animation: ${({ theme }) => theme.name === 'en' ? 'toEnBody 1s' : 'toFaBody 1s'};

   z-index: 0; 
   overflow-y: auto;

   scrollbar-color: var(--secondary-color) var(--primary-color);
   direction: ${({theme}) => theme.name === 'en' ? 'ltr': 'rtl'};

   /* width */
   ::-webkit-scrollbar {
      width: 12px;
   }

   /* Track */
   ::-webkit-scrollbar-track {
      background: var(--primary-color); 
   }
   
   /* Handle */
   ::-webkit-scrollbar-thumb {
      background: var(--secondary-color);
      border-radius: 20px;
   }

   /* Handle on hover */
   ::-webkit-scrollbar-thumb:hover {
      cursor:pointer;
   }

`

export const Title = styled.div`
   
   display: flex;
   flex-direction: column;
   direction: ${({ theme }) => `${theme.direction}`};

   & > h1 {
        font-size: 28px;
        display: inline-block;
        font-family: ${({ theme }) => `${theme.font}_medium`};
        text-align: ${({ theme }) => `${theme.textAlign}`};
   }
`

export const Breaker = styled.div`
   width: 35%;
   height: 4px;
   background-color: var(--primary-color);
   border-radius: 2px;
   margin: 8px 0 12px 0;
`

export const BodyDesc = styled.div`
   & > p {
      font-size: 22px;
      line-height: 1.5;
      font-family: ${({ theme }) => `${theme.font}_regular`};
   }
   
   text-align: ${({ theme }) => `${theme.textAlign}`};
   margin-bottom: 20px;
`

export const Skills = styled.div`
   display: flex;
   flex-direction: ${({ theme }) => theme.name === 'en' ? 'row' : 'row-reverse'};
   flex-wrap: wrap;
`

export const Skill = styled.button`
   height: 30px;
   padding: 0 15px;
   margin: 5px 8px 0 0;
   margin: ${({ theme }) => theme.name === 'en' ? '5px 8px 0 0' : '5px 0px 0 8px'};

   border: 2px solid var(--primary-color);
   background-color: white;
   border-radius: 5px;

   &:hover {
      background-color: var(--primary-color);
      color: var(--secondary-color);
   }
`

export const Cards = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`