import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Loader } from '../components/Loader';

const AuthContext = createContext()
const useAuth = () => {
  return useContext(AuthContext)
}
const AuthProvider = ({ children }) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const [loading, setLoading] = useState(false)

  const user = localStorage.getItem('user_info')

  const navigate = useNavigate()
  const authGoogle = async (accessToken) => {
    setLoading(true)
    try {
      const response = await fetch(`${url}/oauth`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ googleAccessToken: accessToken })
      })
      const data = await response.json()

      console.log(data, "data")
      if (!data.Errmessage) {
        localStorage.setItem('user_info', JSON.stringify(data));
      }

      navigate('/')

    } catch (err) {
      console.log(err?.message)
      alert("SomeThing Went Wrong please try after some time")
    }
    setLoading(false)
  }
  const logout = () => {
    localStorage.clear()
    // window.location.reload(false)
    navigate('/');
  }
  const value = {
    authGoogle,
    user,
    logout,
    setLoading
  }

  return (
    <AuthContext.Provider value={value}>
      {
        loading ? (<Loader />) : children
      }
    </AuthContext.Provider>
  )
}
export default AuthProvider
export { useAuth }