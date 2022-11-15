import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';


function App() {

const [entries, setEnties] = useState([{weight: 175, date: "11-15-22"}])

function addNewEntry(entry){
  let tempEntries = [...entries, entry]
  setEnties(tempEntries);
}

  return (
    <div>
      <DisplayEntries parentEntries = {entries}/>
      <AddEntryForm addNewEntryProperty={addNewEntry}/>
    </div>
  );
}

export default App;
