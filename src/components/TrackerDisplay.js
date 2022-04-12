import React, {useContext} from 'react';
import PieChart from './PieChart';
import UserContext from '../context/UserContext';

const TrackerDisplay = ({glasses}) => {

    const {goal} = useContext(UserContext);
    const {name} = useContext(UserContext);


    return (
        <>
            <p>{name}'s daily goal: {goal}</p>
            <p>Glasses drunk: {glasses}</p>
            <PieChart glasses={glasses} goal={goal} />
            { glasses >= goal ? "Goal reached! 🥳" : null }
            <br></br>
        </>
    )
}

export default TrackerDisplay;
