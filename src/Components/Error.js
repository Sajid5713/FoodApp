import { useRouteError } from "react-router-dom";

const Error = () => {
    
    const {error, status , statusText} = useRouteError();

    console.log(useRouteError())
    return(
      <>
       <h2>{status}</h2>
       <h3>{statusText}</h3>
       <p>{error.message}</p>
      </>
    )
}

export default Error;