import './App.css';
import React from 'react';

function App() {
  const [formData, setFormData] = React.useState({name:"", announcement:"", date:""})
  // const [value, setValue] = React.useState(dayjs())

  const handleChange = (e) => {
    setFormData({...formData,
    [e.target.name]: e.target.value} )
  }

  const handleSubmit =(e) =>{
    e.preventDefault();
    // console.log(formData.announcement)
    setFormData({name:"", announcement:"", date:""})
  }

  return (
    <div>
      <h1>{formData.announcement}</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="msg">Input Announcement Message</label>
        <input type="text" id="msg" name="announcement" value={formData.announcement} onChange={handleChange}></input>

        <label htmlFor="name">Input Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} ></input>

        {/* 
        <DatePicker
          label="Controlled picker"
          name="date" value={formData.date} 
          onChange={handleChange}
        /> */}

        <button type="submit"  disabled={!formData} name="announcement" value={formData.announcement}>Submit</button>
      </form>
    
    </div>
  );
}

export default App;
