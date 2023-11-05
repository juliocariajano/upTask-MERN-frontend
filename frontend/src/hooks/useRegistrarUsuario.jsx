import { useState } from "react";
import Alerta from "../componentes/Alerta";
import axios from "axios";


export const useRegistrarUsuario=()=>{


const [alerta, setAlerta] = useState({})

    const [usuario, SetUsuario] = useState({
      nombre:"",
      email:"",
      password:"",
      repetirPassword:""

    });

    console.log(usuario.nombre, usuario.email, "useHooks")

    console.log(usuario, "estado usuario")

    const handleSubmit = async e =>{
    //   e.preventDefault();
    //   if([nombre, email, password, repetirPassword].includes("")){
    //          setAlerta({
    //       msg:"Todos los campos son obligatorios",
    //       error:true
    //       })
    //       return
     //}

    // if(password !== repetirPassword){
    //   setAlerta({
    //     msg:"Los password no son iguales",
    //     error:true
    //   })
    //   return
    // }

    // if(usuario.password.length < 6){
    //   setAlerta({
    //     msg:"El password es muy corto, agrega minimo seis caracteres",
    //     error:true
    //   })
    //   return
    // }
    //   setAlerta({})
    // Crear usuarios
  // try {
  //   const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/usuarios`, {nombre, email, password})
  //   console.log(data)
  //   setAlerta({
  //     msg:data.msg,
  //     error:false
  //   })

  //   SetUsuario({
  //     nombre:"",
  //     email:"",
  //     password:"",
  //     repetirPassword:""
    // }),
    // setEmail(""),
    // setPassword(""),
    // setRepetirPassword("")

  // } catch (error) {
  //   setAlerta({
  //     msg:error.response.data.msg,
  //     error:true
  //   })

// }

}

const handleChange =(e) => {
console.log(e,"soy handlechange")
SetUsuario({
  ...usuario,
   nombre: e,
})
  // nombre:e,
  // email:"",
  // password:"",
  // repetirPassword:""
}

// const handleNombre =(e) => {setNombre(e)}

const {msg} = alerta

  return {usuario, handleSubmit, handleChange,msg, alerta}

}