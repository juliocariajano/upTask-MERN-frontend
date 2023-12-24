import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useProyectos from "../hooks/useProyectos"
import Formulario from "../componentes/Formulario"
const EditarProyecto = () => {

    const params = useParams()

    const {obtenerProyecto, proyecto, cargando} = useProyectos()

    useEffect(()=>{
        obtenerProyecto(params.id)
    },[])

    const {nombre}= proyecto
    
    if(cargando) return "Cargando"

    return (
    <div>
        <h1 className="font-black text-4xl"> Editar :{nombre}</h1>

        <Formulario/>
     
    </div>
  )
}

export default EditarProyecto
