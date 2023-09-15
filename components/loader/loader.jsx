import styled from "styled-components"
import { Job, Name } from "../widgets/forall/info-sec.widgets"

const Loader = () => {
    return (
        <LoaderWrapper>
            <Name>
                Hamidreza Ghanbari
            </Name>
            <Job>
                Frontend(nextjs and react) developer
            </Job>        
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>   
        </LoaderWrapper>
    )
}

const LoaderWrapper = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
   background-color: white;
   height: 100vh;
   width: 100vw; 
`

export default Loader
