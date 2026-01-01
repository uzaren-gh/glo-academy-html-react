import { Link, useRouteError } from "react-router-dom";
import './Error.css'

export const Error = ({message}) => {

    const error = useRouteError;
    console.error(error);

    return (

        <div id="error-page">
            <h1>Oops!</h1>
            <p>{message}</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>

            <Link to="/">
                <button className="btn btn-primary search-btn">
                    <span class="search-btn__text">На главную</span>
                </button>
            </Link>



        </div>

        // <div>id = error-page</div>
        // <h1>Error 404. <br />
        //      Page is not exist</h1>
    )
}