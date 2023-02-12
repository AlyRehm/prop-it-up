
import './App.css';

// need to import your components to be able to use them 
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">

      <PersonCard 
        firstName={ "Alyson" }
        lastName={ "Rehm" }
        age={ 34 }
          hairColor={ "Ash Brown" } />

      <PersonCard 
        firstName={ "Andrew" }
        lastName={ "Sanders" }
        age={ 33 }
        hairColor={ "Dirty Blonde" } />

      <PersonCard 
        firstName={ "Callie" }
        lastName={ "Anne" }
        age={ 12 }
        hairColor={ "White with Black Spots" } />

      <PersonCard 
        firstName={ "Panda" }
        lastName={ "Pony" }
        age={ 13 }
        hairColor={ "Black & White Paint" } />

    </div>
  );
}

export default App;
