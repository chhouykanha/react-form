import { useState } from "react";

function App() {
  const [username, setUsername] = useState('');
  const [pob, setPOB] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  const [isShow, setIsShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsShow(true)
  }

  function clearForm(){
    setUsername("")
    setPassword("")
    setPOB("")
    setDate("")
    setIsShow(false)
  }
  return (
    <>
      <form>
        <h1>Regiser Form</h1>
        <div className="mb">
          <label className="block">Username</label>
          <input 
              type="text" 
              onChange={(e) => setUsername(e.target.value)} 
              value={username}
              placeholder="Username" 
          />
        </div>

        <div className="mb">
          <label className="block">Date of Birth</label>
          <input 
              type="date" 
              onChange={(e) => setDate(e.target.value)} 
              value={date}
          />
        </div>

        <div className="mb">
          <label className="block">Password</label>
          <input 
              type="password" 
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
              placeholder="Password" 
          />
        </div>


        <div className="mb">
          <label htmlFor="" className="block">Place Of Birth</label>
          <select 
            onChange={(e) => setPOB(e.target.value)}
            value={pob}  
          >
              <option value='' disabled >--Choosee--</option> 
              <option value='battambang'>Battambang</option> 
              <option value='phnom_penh'>Phnom Penh</option>
              <option value='other'>Other</option>
          </select>
        </div>
        <div className="flex">
          <button type="button" className="red" onClick={clearForm}>Clear</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>


      {isShow && (
        <form>
            <h1>Result: </h1>
            <p>Username: {username}</p>
            <p>Password: {password}</p>
            <p>Date of Birth: {date}</p>
            <p>Place Of Birth: {pob}</p>
        </form>
      )}

    </>
     
  );
}

export default App;
