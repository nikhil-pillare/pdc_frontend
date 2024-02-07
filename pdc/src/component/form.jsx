import React, { useState } from 'react';
import "../App.css"
const Options = [  // for mapping
  {name: 'React', logoUrl: 'https://www.svgrepo.com/show/424894/react-logo-programming.svg' },
  {name: 'github', logoUrl: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' },
  {name: 'ios', logoUrl: 'https://seeklogo.com/images/A/apple-logo-52C416BDDD-seeklogo.com.png' },
  {name: 'android', logoUrl: 'https://www.svgrepo.com/show/327366/logo-google-playstore.svg' },
];

const UserForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [selected, setSelected] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (selected && userName && password) { //if user enter all details
        try {
          const response = await fetch('https://cloudy-nightshirt.cyclic.app/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({userName, password, selected}),
          });
  
          if (response.ok) {
            alert('Form submitted successfully');
          } else {
            alert('Failed to submit form. Please try again.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Error occured, Please try again.');
        }
      } else {
        alert('Please enter all details');
      }
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1 style={{textAlign:"center"}}>Test Assignment</h1> 
        <div style={{margin:"auto", width:"45%", border:"3px solid green-yellow", padding:"20px", borderRadius:"10px",backgroundColor:"peachpuff"}}>
        <label>
        Hello, My name is  
          <input style={{borderTop:"none", borderLeft:"none", borderRight:"none", margin:"10px"}} type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />.
      </label>
      <label>
        I specialize in <span style={{fontWeight:"bolder"}}>{selected}</span> as following shown, and this is my test submission,
        </label>
        </div>
      
        <div className="options">
          {Options.map((framework) => (
            <div
             style={{margin:"auto", padding:"20px", backgroundColor:"peachpuff", borderRadius:"10px", width:"70%", display:"flex", justifyContent:'center', }}
             className={`${selected === framework.name ? 'selected':''}`}
              onClick={() => setSelected(framework.name)} 
            >
              <img
                src={framework.logoUrl}
                alt={framework.name}
                style={{ width: '120px', height: '120px' ,}}
              />
            </div>
          ))}
        </div>
     <div style={{width:"45%", display:"flex", justifyContent:"space-between", margin:"auto", marginTop:"30px", alignItems:"center"}}>
     <label>
        Enter your password: 
          <input style={{borderTop:"none", borderLeft:"none", borderRight:"none", margin:"10px"}} type="text" value={password} onChange={(e) => setPassword(e.target.value)} />.
      </label>

      <button style={{marginTop:"20px", padding:"10px", backgroundColor:"Gray", borderRadius:"10px", border:"none", width:"20%"}} type="submit">Submit</button>
     </div>
      
    </form>
  );
};

export default UserForm;
