import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Alerta from "../componentes/Alerta"
import clienteAxios from "../config/clienteAxios"
import useAuth from "../hooks/useAuth"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [alerta, setAlerta] = useState({})

  const {setAuth } = useAuth()

  const handleSubmit = async e => {
    e.preventDefault();

    if([email, password].includes("")){
      setAlerta({
        msg:"Todos los campos son obligatorios",
        error:true
      })

      return 
    }
    try {
    const {data} = await clienteAxios.post('/usuarios/login',{email, password})      

      localStorage.setItem('token', data.token)
      setAuth(data)
  } catch (error) {
    setAlerta({
      msg:error.response.data.msg,
      error:true
    })      
    }
  }
const {msg}= alerta

  return (
    <>
    <h1 className="text-sky-600 font-black text-6xl">Inicia sesion y gestiona tus {" "} <span className="text-slate-700">
    proyectos
        </span> </h1>
{msg && <Alerta alerta={alerta}/>}    
    <form className="my-10 bg-white shadow rounded-lg py-5"
    onSubmit ={handleSubmit}
    >
    <div className="my-5">
      <label className="uppercase text-gray-600 block text-xl font-bold" 
      htmlFor="email"
      > Email</label>
      <input
      id="email"
      type= "email"
      required
      placeholder="Email de registro"
      className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
      value={email}
      onChange={e=> setEmail(e.target.value)}
      />
    </div>


    <div className="my-5">
      <label className="uppercase text-gray-600 block text-xl font-bold" 
      htmlFor="password"
      > Password</label>
      <input
      id="password"
      type= "password"
      placeholder="Password de registro"
      className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
      value={password}
      onChange={e => setPassword(e.target.value)}
      />
    </div> 

<input
type="submit"
value="Iniciar Sesion"
className="bg-sky-700 mb-5 mt-2 w-full py-3 text-white uppercase font-bold rounded-lg
hover:cursor-pointer hover:bg-sky-800 tramsition-color"

/>

    </form>

<nav className="lg:flex lg:justify-between">
<Link className="block text-center my-5 text-slate-500 uppercase text-small" 
 to="registrar"
 >¿No tienes una cuenta registrate</Link>

<Link className="block text-center my-5 text-slate-500 uppercase text-small" 
 to="olvide-password"
 >Olvide Password</Link>
</nav>


    </>
  )
}

export default Login