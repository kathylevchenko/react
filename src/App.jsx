import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
const App = () => {
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleChange = (evt) => {
    setHasAccepted(evt.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={handleChange}
        />
        I accept terms and conditions
      </label>
      <button type="button" disabled={hasAccepted}>
        Proceed
      </button>
    </div>
  );
};



export default App
