import { useRouteError } from "react-router-dom";

 const ErrorPage=()=>{
    const error=useRouteError();
    console.log(error);

    return(
        <div className="Errorpage">
            <h1>OOps!</h1>
            <h1>Something Went Wrong</h1>
            <h1>{error.status}  { error.statusText }</h1>
        </div>
    );
   
};

export default ErrorPage;