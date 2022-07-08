import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import LoggerProvider from './components/LoggerProvider';
import useRequest from './hooks/useRequest';
import useTitle from './hooks/useTitle';
import Navigation from './page/Navigation';
import Newtitle from './page/Newtitle';
import Request from './page/Request';
// import Request2 from './page/Request2';

function App() {
  const { api, loading } = useRequest()

  useEffect(() => {
    loadUser()
  }, [])


  const loadUser = () => {
    api('https://api.github.com/users')
      .then(console.log)
      .catch(console.error)
  }

  if (loading) return <div>Loading</div>


  return (
    <LoggerProvider handler={(args: any) => console.log('xxxx', ...args)}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="title" element={<Newtitle />} />
          <Route path='/request' element={<Request />} />
          {/* <Route path='/request2' element={Request2}/> */}
        </Routes>
      </div>
    </LoggerProvider>


  );
}

export default App;
