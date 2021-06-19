import React from 'react';
import SetupForm from './SetupForm';
import Card from './Card';
import toBinary from '../util/toBinary';
import fromBinary from '../util/fromBinary';
import Footer from './Footer';

export type InfoType = { label: string, value: string }[];
const testData = '[{"label":"Imię","value":"Jaś"},{"label":"Nazwisko","value":"Kapela"},{"label":"NIP","value":"123456789"}]'

function App() {

  const [info, setInfo] = React.useState<InfoType|null>(null);
  console.log(toBinary(testData));

  React.useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const data = fromBinary(params.get('info') || '');
    setInfo(JSON.parse(data));
  }, []);

  return (
    <div className="App">
      {info ? <Card data={info}/> : <SetupForm/>}
      {info ? <Footer /> : null}
    </div>
  );
}

export default App;
