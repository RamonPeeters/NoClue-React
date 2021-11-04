import React from 'react';
import NoClue from './src/NoClue';

const App = () => {
    let noClue = new NoClue();
    return (
        <>
            {noClue.getScreen()}
        </>
    );
};

export default App;
