import { useState } from 'react'
import { BaseColaboradores } from '../BaseColaboradores'
console.log(BaseColaboradores)

const Formulario = () => {
    const [list, setList] = useState(BaseColaboradores);
    const [colab, setColab] = useState("");
    const [email, setEmail] = useState("");
    const [newList, setNewlist] = useState(list)

    //FUNCIÓN BOTÓN SUBMIT//
    const enviarFormulario = (e) => {
        e.preventDefault()
        setList([...list, {
            id: Date.now(), nombre: colab, correo: email
        }])
    }

    //FUNCIÓN INPUT NOMBRE
    const inputNombre = (e) => {
        setColab(e.target.value)
    }

    //FUNCIÓN INPUT EMAIL
    const inputEmail = (e) => {
        setEmail(e.target.value)
    }

    //FUNCION BUSQUEDA//
    const inputBuscar = (e) => {
        e.preventDefault()
        if (e.target.value === "") {
            setNewlist(list);
        } else {
            let listaFiltrada = list.filter(c => c.nombre.includes(e.target.value));
            setNewlist(listaFiltrada)
        }
    }




    return (
        <div className='container'>
            <div className='buscador'><h2>Buscador de Colaboradores</h2>
                <input class='search' placeholder='Busca un Colaborador ...' type="text" onChange={(e) => { inputBuscar(e) }} /></div>
            <form onSubmit={(e) => { enviarFormulario(e) }} action="">
                <h4>Nombre de Colaborador</h4>
                <input type="text" placeholder='Ingresa un nombre ...' onChange={inputNombre} value={colab} />
                <h4>Correo de Colaborador</h4>
                <input type="email" placeholder='Ingresa un correo ...' onChange={inputEmail} value={email} />
                <button type='submit'>Agregar Colaborador</button>

                <h2>Listado de Colaboradores</h2>
                <table>
                    {list.map(colaborador =>
                        <tr key={colaborador.id} onClick={() => console.log(colaborador)}>
                            <td>{colaborador.nombre}</td> - <td>{colaborador.correo}</td>
                        </tr>
                    )}
                </table>
            </form>
        </div>
    )

}

export default Formulario