import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useProyectos from "../hooks/useProyectos"
import { Link } from "react-router-dom"
const Proyecto = () => {
    const params = useParams()

    const {obtenerProyecto, proyecto, cargando} = useProyectos()

    useEffect(()=>{
        obtenerProyecto(params.id)
    },[])

    const {nombre}= proyecto
    return (

    cargando ? "...cargando..." :(
    <div className="flex justify-between">
        <h1 className="font-black text-4xl">{nombre}</h1>
<div className="flex items-center gap-2  text-gray-400 hover:text-black">

 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>
<Link
to= {`/proyectos/editar/${params.id}`}
className="uppercase font-bold"
>
Editar
</Link>
</div>
    </div>

    )

  )
}

export default Proyecto