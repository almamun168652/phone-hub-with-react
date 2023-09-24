import { useLoaderData } from "react-router-dom";
import PhonesCollection from "../../Components/HomeComponents/PhonesCollection";


const Home = () => {

    const phones = useLoaderData();

    return (
        <div>
            <PhonesCollection phones={phones}></PhonesCollection>
        </div>
    );
};

export default Home;