import './App.css';
import LandingPage from './Components/Landing';
import SignUpPage from './Components/SignUp';
import LogInPage from './Components/LogIn';
import DashboardPage from './Components/Dashboard';
import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './Context/DataContext';
//import { useEffect } from 'react';
//import { useFetch } from './Hooks/useFetch';

//$1stJake19899 database password



function App() {


 


  //const {data} = useFetch()
//   useEffect(() => {
//     fetch('https://react-socail-media-e8676-default-rtdb.firebaseio.com/users.json')
//          .then((response) => response.json())
//          .then((data) => 
//              console.log(data)
//          )

//          .catch((err) => {
//              console.log(err.message)
//          });
//  }, [])

  const handleSubmit = (() => {
    console.log("submit btn")
  })

  return (
    <DataProvider>
      <Routes>
        <Route 
          path='/' 
            element={<LandingPage/>}/>
        <Route 
          path='/NewUser' 
          element={<SignUpPage 
            SubmitBtn={handleSubmit}
        />}/>
        <Route 
          path='/Login' 
            element={<LogInPage/>}/>
        <Route
         path='/dashboard' 
          element={<DashboardPage/>}/>

        
      </Routes>
    </DataProvider>
    
  );
}

export default App;