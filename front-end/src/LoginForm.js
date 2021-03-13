import React,{useState} from'react';
import './LoginForm.css'
import { Link } from 'react-router-dom';
import Results from './Results';

const LoginForm=(props)=> {

    // constructor(props){
    //   super(props);
    //   this.state = { email: '', position:'', number:'' };
    //   this.handleChange = this.handleChange.bind(this);
    //   //this.handleSubmit = this.handleSubmit.bind(this);
    // }
    const [email,setEmail]=useState();
    const [position,setPosition]=useState();
    const [number,setNumber]=useState();
    const handleChange = ({ target }) => {
      setEmail( target.value );

    };
    const handlePosition=({target})=>{
        setPosition(target.value);
    };
    const handleNumber=({target})=>{
        setNumber(target.value)
    };
    

    //render() {
      return (
        <React.Fragment>
          {/* <body> */}
            <form className="box">
              <p>
                {/* <label htmlFor="email">Email</label> */}
                  <input className="inputs"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleChange}
                  />
              </p>
            
              <p>
              {/* <label htmlFor="position">position</label> */}
                  <input className="inputs"
                  type="position"
                  name="position"
                  placeholder="Enter your waitlist position"
                  value={position}
                  onChange={handlePosition}
                  />
              </p>

              <p>
                {/* <label htmlFor="number">number</label> */}
                <input className="inputs"
                type="2"
                name="number"
                placeholder="Enter your class number"
                value={number}
                onChange={handleNumber}
                />
              </p>          
            
              {/* <button to="./Results" renderAs={Link}>
                Go!
              </button> */}

              <Link to="/Results">
                <button className="goButton"> Go! </button>
              </Link>

            </form>
   
            <h1>Your username is: {email}</h1>
          {/* </body> */}
        </React.Fragment>

      );
    
    //}
   }
export default LoginForm