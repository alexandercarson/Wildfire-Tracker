import Spinner from './spinner.gif'
import '../css/Loader.css'

const Loader = () => {
    return (
        <div className="loader">
            <img src={Spinner} alt="loading" />
            <h1>Gathering Fire Data....</h1>
        </div>
    );
};

export default Loader;