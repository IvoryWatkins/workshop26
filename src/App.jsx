import './App.css';
import { useState } from 'react';
import ContactList from './components/Contactlist';
import SelectedContact from './components/SelectedContact'

function App() {
  const [slectedContactId, setSelectedContactID] = useState(null);

  return(
    <>
    {setSelectedContactID ? <SelectedContact SelectedContactId={SelectedContactId} setSelectedContactID={setSelectedContactID}/> :
    <div>Selected Contact View</div>}:{<ContactList setSelectedContactID={setSelectedContactID} />}
    </>
  );
  } 
  
export default App;  