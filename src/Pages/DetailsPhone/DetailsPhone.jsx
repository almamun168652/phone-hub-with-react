import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DPhoneAfterShow from "./DPhoneAfterShow";


const DetailsPhone = () => {

    const [phone, setPhone] = useState();

    const { id } = useParams();
    const phones = useLoaderData();

    useEffect(() => {

        const findPhone = phones?.find(phone => phone.id === id);
        setPhone(findPhone);

    }, [id, phones])


    return (
        <DPhoneAfterShow phone={phone}></DPhoneAfterShow>
    );
};

export default DetailsPhone;