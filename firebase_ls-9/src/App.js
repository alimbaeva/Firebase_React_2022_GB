import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state => state.currentUser)
  return (
    <div className="">
      <Routes>
        {!user ? (
          <>
            <Route path='/' element={<Layout />} >
              <Route index path='/' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='*' element={<Navigate to='/' />} />

            </Route>
          </>
        ) : (
          <>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Navigate to='/home' />} />
          </>
        )

        }
      </Routes>

    </div>
  );
}

export default App;
