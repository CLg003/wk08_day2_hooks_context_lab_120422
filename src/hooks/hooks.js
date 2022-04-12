import React, {useState, useEffect} from 'react';

export const useToggle = (choice) => {
    const [chosenState, setChosenState] = useState(choice);
    const handleToggle = () => {
        setChosenState(!chosenState);
    }
    return {chosenState, handleToggle};
} 