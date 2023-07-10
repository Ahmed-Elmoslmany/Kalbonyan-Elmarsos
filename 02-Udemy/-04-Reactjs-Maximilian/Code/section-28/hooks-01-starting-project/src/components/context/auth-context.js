import React, {useState} from "react"; 

export const AuthContext = React.createContext({
  isAuth: false,
  login: () => {}
})

const AuthContextProvidor = (props) => {
  const [ isAuthanticatec, setIsAuthanticatec] = useState(false)

  const loginContextHandler = () => {
    setIsAuthanticatec(true)
  } 
  return (
    <AuthContext.Provider value={{login: loginContextHandler, isAuth: isAuthanticatec}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvidor