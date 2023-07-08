import axios from "axios";
import React, { useState ,} from "react";

export default function Signup() {
  const [user, setuser] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });

  // const nav =useNavigate()

  function change(v) {
    setuser({ ...user, [v.target.name]: v.target.value });
  }

  const handleform = (e) => {
    e.preventDefault();

    async function signup() {
      let res = await axios.post(`https://ppvj.pythonanywhere.com/emps//`, user);
      if(res.status===201)
      {
          alert('signedup sucessfully')
      }
    }
    signup();
    // nav('/Login')
  };


  return (
    <>
    <h1>Signup</h1>

      <form onSubmit={handleform} id="login">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={user.name}
            name="name"
            onChange={change}

          />
        </div>



        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={user.email}
            name="email"
            onChange={change}

          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>


        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            value={user.address}
            name="address"
            onChange={change}

          />
        </div>



        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={user.password}
            name="password"
            onChange={change}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}