import { useState, useEffect } from "react"
import {Link, useParams } from "react-router-dom"
import axios from "axios"
import Alerta from "../componentes/Alerta"

const NuevoPassword = () => {

  const [tokenValido, setTokenValido]= useState(false)
  const [password, setPassword] = useState("")
  const [alerta, setAlerta] = useState({})
  const [passwordModificado, setPasswordModificado] = useState(false)
  const params = useParams()
  const {token} = params

  useEffect(() => {
    const comprobarToken = async () => {

      try {
       await axios(`${import.meta.env.VITE_BACKEND_URL}/api/v1/usuarios/olvide-password/${token}`)
        setTokenValido(true)
      } catch (error) {
       setAlerta({
        msg:error.response.data.msg,
        error:true
       })
      }

    }
    comprobarToken()
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if( password.length > 6){
      setAlerta({
        msg:"El password debe ser minimo de 6 caracteres",
        error: true
      })
      return 
    }
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/v1/usuarios/olvide-password/${token}`
      const {data} = await axios.post(url,{password})

      setAlerta({
        msg: data.msg,
        error: false
      })
      setPasswordModificado(true)
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
    <h1 className="text-sky-600 font-black text-6xl">Restablece tu contraseña y gestiona tus {" "} <span className="text-slate-700">
    proyectos
        </span> </h1>

{
  msg && <Alerta alerta={alerta}/>
}
{tokenValido && (
      <form className="my-10 bg-white shadow rounded-lg py-5"
      onSubmit={handleSubmit}
      >



      <div className="my-5">
        <label className="uppercase text-gray-600 block text-xl font-bold"
        htmlFor="password"
        > Nuevo Password</label>
        <input
        id="password"
        type= "password"
        placeholder="Ingrese la nueva Password"
        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
        value={password}
        onChange={e =>setPassword(e.target.value)}
        />
      </div>
  <input
  type="submit"
  value="Actualizar password"
  className="bg-sky-700 mb-5 mt-2 w-full py-3 text-white uppercase font-bold rounded-lg
  hover:cursor-pointer hover:bg-sky-800 tramsition-color"
  
  />
  
      </form>
)
}
{
      passwordModificado && (
        <Link className="block text-center my-5 text-slate-500 uppercase text-small" 
 to="/"
 >Inicia Sesión </Link>
      )
    }




    </>  )
}

export default NuevoPassword