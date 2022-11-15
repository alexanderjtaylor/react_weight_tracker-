import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';


function App() {

const [entries, setEnties] = useState([{weight: 175, date: "11-15-22"}])



  return (
    <div>
      <DisplayEntries parentEntries = {entries}/>
    </div>
  );
}

export default App;
