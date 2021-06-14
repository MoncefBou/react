import { useState } from 'react'
import fetch from 'fetch'
import './App.css';

function App() {

  const [name, setName] = useState()
  const [image, setImage] = useState()

  const sendData = () => {
    const formData = new FormData();
    formData.append("image", image);
    fetch("http://localhost:8000/upload", {
      method: "POST",
      body: formData,
    })
    .then(response => console.log("Data send"))
}


return (
  <div className="App">

    <label for="name">Name</label>
    <input type="text" name="name" size="12" onChange={(e) => setName(e.target.value)}></input>

    <div className='inputFile'>

      <label for="avatar">Avatar</label>

      <input type='file' onChange={(e) => setImage(e.target.files[0])}></input>

    </div>

    <button type='submit' onClick={sendData()}> Send </button>

  </div>
);
}

export default App;
