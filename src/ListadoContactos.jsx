import React, { useEffect, useState } from "react";
import "./ListadoContacto.css";
import { Link } from "react-router-dom";

const ListadoContactos = () => {

    const [ListadoContactos, setListadoContactos] = useState([]);
    const [searchName, setSearchName] = useState('');

    useEffect(() => {
        ObtenerContactos();
    }, []);

    const ObtenerContactos = async () => {
        try {
            const data = await fetch(`http://localhost/codeigniter/index.php/ContactController/ObtenerContactos`)
            const contacto = await data.json();
            setListadoContactos(contacto);
        } catch (err) {
            console.log(err.message);
        }
    }

    const EliminarContacto = (id) => {

        fetch(`http://localhost/codeigniter/index.php/ContactController/delete/${id}`)
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }

    const Buscar = async (buscarContactos) => {
        if (buscarContactos === "") {
            alert("Favor de llenar el campo para realizar una busqueda");
        } else {
            try {
                const data = await fetch(`http://localhost/codeigniter/index.php/ContactController/ObtenerNombreContacto/${buscarContactos}`)
                const contacto = await data.json();
                if(contacto.length !== 0){
                    setListadoContactos(contacto);
                }else{
                    alert("No se encontró el contacto");
                }
            } catch (err) {
                console.log(err.message);
            }
        }
    }

    return (
        <div className="cuerpo">
            <header>
                <input type="search" placeholder="Buscar por nombre del contacto" className="buscar" onChange={(e) => setSearchName(e.target.value)} />
                <button className="btn btn-primary btnbuscar" onClick={() => Buscar(searchName)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    Buscar
                </button>
                <button className="btn btn-primary btntodos" onClick={ObtenerContactos}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                    </svg>
                    Lista de contactos
                </button>
            </header>
            <Link to="/registro">
                <button className="btn btn-primary agregar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                    Agregar Contacto
                </button>
            </Link>
            <table className="table table-hover listado">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido P</th>
                        <th scope="col">Apellido M</th>
                        <th scope="col">Calle</th>
                        <th scope="col">No. Ext</th>
                        <th scope="col">No. Int</th>
                        <th scope="col">Colonia</th>
                        <th scope="col">CP</th>
                        <th scope="col">Estado</th>
                        <th scope="col">País</th>
                        <th scope="col">Municipio</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ListadoContactos.map(item => (
                            <tr key={item.idcontacto}>
                                <td>{item.idcontacto}</td>
                                <td>{item.nombre}</td>
                                <td>{item.app}</td>
                                <td>{item.apm}</td>
                                <td>{item.calle}</td>
                                <td>{item.num_ext}</td>
                                <td>{item.num_int}</td>
                                <td>{item.colonia}</td>
                                <td>{item.codigo_postal}</td>
                                <td>{item.estado} </td>
                                <td>{item.pais} </td>
                                <td>{item.municipio} </td>
                                <td>{item.telefono} </td>
                                <td>{item.correo}</td>
                                <td>
                                    <Link to={`/registro/${item.idcontacto}`}>
                                        <button className="btn btn-warning edit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                            </svg>
                                        </button>
                                    </Link>
                                    <button type="button" className="btn btn-danger" data-bs-target="#staticBackdrop" onClick={(() => EliminarContacto(item.idcontacto))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListadoContactos;