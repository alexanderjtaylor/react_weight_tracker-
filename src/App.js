import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';


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
      <EntriesChartTracker parentEntries = {entries}/>
    </div>
  );
}

export default App;
