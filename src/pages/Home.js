import * as React from 'react'
import axios from 'axios';

axios.defaults.withCredentials = true;

const Home = () => {
  const [user, setUser] = React.useState();

  const sendRequest = async() =>{
    const res = await axios.get('http://localhost:5000/api/user', {
      withCredentials: true
    }).catch(err => {
      console.log(err);
    });
    const data = await res.data;
    return data;
  }
  
  React.useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);

  return (
    <div className='container' >
       {user && <h1>{user.name}</h1>}
    </div>
  )
}

export default Home