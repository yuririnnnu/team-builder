import React from "react";

export default function MemberForm (props) {
    const {values, update, submit} = props
    const onChange = (evt) => {
        const name = evt.target.name;
        const { value } = evt.target;
        // const { name, value } = evt.target;
        update(name, value);
    }
    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }
    return (
        <div className="container" onSubmit={onSubmit}>
        <label>
            Name: 
            <input
                name="username"
                type="text"
                placeholder="Input Name"
                maxLength="30"
                value={values.username}
                onChange={onChange}
            />
        </label>
        <label>
            Email: 
            <input
                name="email"
                type="email"
                placeholder="Input Email"
                maxLength="30"
                value={values.email}
                onChange={onChange}
            />
        </label>
        <label>
            Role: 
            <select value={values.role} name="role" onChange={onChange}>
                <option value="">-- Select a Role --</option>
                <option value="Student">Student</option>
                <option value="Instructor">Instructor</option>
                <option value="Alumni">Alumni</option>
              </select>
        </label>
            <div className='submit'>
                <button onClick={submit}>submit</button>
            </div>
        </div>
    )
}