import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Alerta from '../componentes/Alerta'


const ConfirmarCuenta = () => {

  const [alerta, setAlerta] = useState({})
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)

  const params = useParams()
  
  const {id} = params

  useEffect(() => {
     const confirmarCuenta = async () => {
    try {
      const url =  `${import.meta.env.VITE_BACKEND_URL}/api/v1/usuarios/confirmar/${id}`
      const {data} = await axios(url)

      setAlerta({
        msg: data.msg,
        error: false      
      })

      setCuentaConfirmada(true)

      console.log(data)
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true      
      })     
    }
     }
     confirmarCuenta()
  },[])


  const {msg} = alerta

  return (
    <>
    <h1 className="text-sky-600 font-black text-6xl">Confirma tu cuenta y gestiona tus {" "} <span className="text-slate-700">
    proyectos
        </span> </h1>
    <div>
      {msg && <Alerta alerta={alerta}/>}
    </div>

    {
      cuentaConfirmada && (
        <Link className="block text-center my-5 text-slate-500 uppercase text-small" 
 to="/"
 >Inicia Sesión </Link>
      )
    }
    </>
  )
}

export default ConfirmarCuenta
