import React from "react" 

export default function AuthForm(props){
  const { 
    handleChange, 
    handleSubmit, 
    btnText, 
    errMsg, 
    inputs: 
      {username, password}
  } = props

  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        placeholder="Username" />
      <input
        type="text"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Password" />
      <button>{ btnText }</button>
      <p style={{color: "red"}}>{ errMsg }</p>
    </form>
  )
}

//https://ishopr.co/pages/ultimate-fuel-saver?gclid=Cj0KCQiAkZKNBhDiARIsAPsk0WhBSeAwNWvN_HfJhsDmCIzbefOxJ2w05xSt8-fS5XMqA8OAl-zFHakaArXNEALw_wcB