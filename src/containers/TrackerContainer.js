import { useState } from 'react';
import TrackerDisplay from "../components/TrackerDisplay";
import FormContainer from "./FormContainer";

const TrackerContainer = () => {

    const [glasses, setGlasses] = useState(0);

    const handleUpdate = (updateAmount) => {
        if (glasses + updateAmount < 0) {
            setGlasses(0);
        }
        else {
            setGlasses(parseInt(glasses + updateAmount));
        }
    }

    const handleEmpty = () => {
        setGlasses(0);
    }

    return (
        <>
            <TrackerDisplay glasses={glasses} />
            <FormContainer handleUpdate={handleUpdate} handleEmpty={handleEmpty} />
        </>
    )
}

export default TrackerContainer;
