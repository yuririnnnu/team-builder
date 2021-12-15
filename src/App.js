import './App.css';
import React, {useState, useEffect} from 'react';
import Form from './Component/Form';
import MemberList from './Component/MemberList';

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {
  const [ member, setMember ] = useState([])
  const [ formValue, setFormValue ] = useState(initialFormValues)
  const [ error, setError ] = useState("");
  
  const updateForm = (inputName, inputValue) => {
    setFormValue({...formValue, [inputName]: inputValue})
  }
  const submitForm = (event) => {   
    event.preventDefault();
    console.log(event);
    const newMember = {
      username: formValue.username.trim(),
      email: formValue.email.trim(),
      role: formValue.role,
    }
    if (!newMember.username || !newMember.email || !newMember.role) {
      setError("This is error message")
    } else {
      setMember(member.concat(newMember))
      setFormValue(initialFormValues)
    }
  }
  return (
    <div className="App">
      <h1>Form App</h1>
      <h2>Enter Information Here</h2>
      <h3>{error}</h3>
      <Form 
        values={formValue}
        update={updateForm}
        submit={submitForm}
      />
      {
        member.map((mem, idx) => {
          return <MemberList key={mem.idx} details={mem} />
        })
      }
    </div>
  );
}

export default App;
