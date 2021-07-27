import styled from "styled-components";

export const Form = styled.form`
    padding-top: 15px;
`

export const FormItemWrapper = styled.div`
   margin-top: 25px;

   & > input {
       height: 40px;
       width: 100%;
       border: none;
       background-color: var(--dark-white);
       border-radius: 5px;
       padding: 0 10px;
       outline: none;
       font-family: ${({ theme }) => `${theme.font}_regular`};
       font-size: 18px;

       &:focus {
            border: 3px solid var(--secondary-color);
       }
   }   
   & > textarea {
       height: 120px;
       width: 100%;

       border: none;
       background-color: var(--dark-white);
       border-radius: 5px;
       padding: 10px;
       outline: none;
       font-family: ${({ theme }) => `${theme.font}_regular`};
       font-size: 22px;


       &:focus {
            border: 3px solid var(--secondary-color);
       }
   }   
`

export const BtnHolder = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`

export const FormButton = styled.button`
   margin-top: 20px; 
   height: 40px;
   display: inline-flex;
   align-items: center;
   justify-content: center;
   width: ${({isLoading}) => isLoading ? '50px' : '100%'};
   transition: width 0.7s ease;
   background-color: var(--primary-color);
   border-radius: 5px;
   outline: none;
   border: none;
   font-size: 20px;
   font-family: ${({ theme }) => `${theme.font}_regular`};
   cursor: ${({isLoading}) => isLoading ? 'no-drop' : 'pointer'};

   &:active {
       transform: ${({isLoading}) => isLoading || 'translateY(3px)'};
       box-shadow: ${({isLoading}) => isLoading || 'rgba(0, 0, 0, 0.1) 0px 4px 12px'};
   }
`

export const FormLabel = styled.div`
   display: flex;
   align-items: end;
   padding-bottom: 3px;

   & > p {
    font-family: ${({ theme }) => `${theme.font}_medium`};
    font-size: 20px;
    margin: 0 5px;
   }


`

export const Err = styled.span`
   color: tomato;
   font-family: ${({ theme }) => `${theme.font}_medium`};
`

export const Msg = styled.div`
   padding: 15px;
   width: 100%;
   background-color: ${({success}) => success ? 'var(--primary-color)' : 'tomato'};
   color: ${({success}) => success ? 'var(--secondary-color)' : 'white'};
   border-radius: 5px;
   font-family: ${({ theme }) => `${theme.font}_medium`};
   margin: 15px 0;
`