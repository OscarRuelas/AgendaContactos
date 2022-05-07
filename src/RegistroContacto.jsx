import React, { useState, useEffect } from "react";
import "./RegistroContacto.css";
import 'animate.css';
import { useParams, Link, useNavigate } from "react-router-dom";

const RegistroContacto = (props) => {

    const [cajaNombre, setCajaNombre] = useState(false);
    const [cajaapp, setCajaAPP] = useState(false);
    const [cajaapm, setCajaAPM] = useState(false);
    const [cajacalle, setCajaCalle] = useState(false);
    const [cajanum_ext, setCajaNum_Ext] = useState(false);
    const [cajanum_int, setCajaNum_Int] = useState(false);
    const [cajacolonia, setCajaColonia] = useState(false);
    const [cajacp, setCajaCP] = useState(false);
    const [cajaestado, setCajaEstado] = useState(false);
    const [cajapais, setCajaPais] = useState(false);
    const [cajamuinicipio, setCajaMunicipio] = useState(false);
    const [cajatelefono, setCajaTelefono] = useState(false);
    const [cajacorreo, setCajaCorreo] = useState(false);

    let navigate = useNavigate();

    //Agregar Usuarios

    const enviarContactos = (e) => {
        e.preventDefault();
    }

    const validarCampoNombre = (e) => {
        if (e.target.validity.valid === false) {
            setCajaNombre(true);
        } else {
            setCajaNombre(false); 
        }
    }
    
    const validarCampoApp = (e) =>{
        if (e.target.validity.valid === false){
            setCajaAPP(true);
        }else{
            setCajaAPP(false);
        }
    }
    const validarCampoApm = (e) =>{
        if (e.target.validity.valid === false){
            setCajaAPM(true);
        }else{
            setCajaAPM(false);
        }
    }
    const validarCampoCalle = (e) =>{
        if (e.target.validity.valid === false){
            setCajaCalle(true);
        }else{
            setCajaCalle(false);
        }
    }
    const validarCampoNum_Ext = (e) =>{
        if (e.target.validity.valid === false){
            setCajaNum_Ext(true);
        }else{
            setCajaNum_Ext(false);
        }
    }
    const validarCampoNum_Int = (e) =>{
        if (e.target.validity.valid === false){
            setCajaNum_Int(true);
        }else{
            setCajaNum_Int(false);
        }
    }
    const validarCampoColonia = (e) =>{
        if (e.target.validity.valid === false){
            setCajaColonia(true);
        }else{
            setCajaColonia(false);
        }
    }
    const validarCampoCP = (e) =>{
        if (e.target.validity.valid === false){
            setCajaCP(true);
        }else{
            setCajaCP(false);
        }
    }
    const validarCampoEstado = (e) =>{
        if (e.target.validity.valid === false){
            setCajaEstado(true);
        }else{
            setCajaEstado(false);
        }
    }
    const validarCampoPais = (e) =>{
        if (e.target.validity.valid === false){
            setCajaPais(true);
        }else{
            setCajaPais(false);
        }
    }
    const validarCampoMunicipio = (e) =>{
        if (e.target.validity.valid === false){
            setCajaMunicipio(true);
        }else{
            setCajaMunicipio(false);
        }
    }
    const validarCampoTelefono = (e) =>{
        if (e.target.value.lenght > 10){
            setCajaTelefono(true);
        }else{
            setCajaTelefono(false);
        }
    }
    const validarCampoCorreo = (e) =>{
        if (e.target.validity.valid === false){
            setCajaCorreo(true);
        }else{
            setCajaCorreo(false);
        }
    }

    const Guardar = () => {
        if (document.getElementById("nombre").value === ""){
            alert("Favor de llenar el campo nombre");
        } else if (cajaNombre === true) {
            alert("Favor de llenar correctamente el campo nombre");
        }else if (cajaapp === true) {
            alert("Favor de llenar correctamente el campo apellido paterno");
        }else if (cajaapm === true) {
            alert("Favor de llenar correctamente el campo apellido materno");
        }else if (cajacalle === true) {
            alert("Favor de llenar correctamente el campo calle");
        }else if (cajanum_ext === true) {
            alert("Favor de llenar correctamente el campo num_ext");
        }else if (cajanum_int === true) {
            alert("Favor de llenar correctamente el campo num_int");
        }else if (cajacolonia === true) {
            alert("Favor de llenar correctamente el campo colonia");
        }else if (cajacp === true) {
            alert("Favor de llenar correctamente el campo código postal");
        }else if (cajaestado === true) {
            alert("Favor de llenar correctamente el campo estado");
        }else if (cajapais === true) {
            alert("Favor de llenar correctamente el campo país");
        }else if (cajamuinicipio === true) {
            alert("Favor de llenar correctamente el campo municipio");
        }else if (cajatelefono === true) {
            alert("Favor de llenar correctamente el campo teléfono");
        }else if (cajacorreo === true) {
            alert("Favor de llenar correctamente el campo correo");
        } else if (document.getElementById("app").value === "") {
            alert("Favor de llenar el campo apellido paterno");
        } else if (document.getElementById("calle").value === "") {
            alert("Favor de llenar el campo calle");
        } else if (document.getElementById("num_ext").value === "") {
            alert("Favor de llenar el campo número exterior");
        } else if (document.getElementById("colonia").value === "") {
            alert("Favor de llenar el campo colonia");
        } else if (document.getElementById("cp").value === "") {
            alert("Favor de llenar el campo de codigo postal")
        } else if (document.getElementById("estado").value === "") {
            alert("Favor de llenar el campo estado")
        } else if (document.getElementById("pais").value === "") {
            alert("Favor de llenar el campo pais");
        } else if (document.getElementById("municipio").value === "") {
            alert("Favor de llenar el campo municipio");
        } else if (document.getElementById("telefono").value === "") {
            alert("Favor de llenar el campo telefono");
        }
        else {
            fetch("http://localhost/codeigniter/index.php/ContactController/save", {
                method: 'POST',
                body: new FormData(document.getElementById('contactos'))
            }).then(res => res.json())
                .catch(error => console.log('Ocurrió un error al insertar un nuevo contacto a la bd: ', error))
                .then(response => console.log(response));
            navigate("/");
        }
    }

    //Obtener el id
    const { id } = useParams();

    const [Registro, setRegistro] = useState([]);

    useEffect(() => {
        ObtenerIdContacto();
    }, []);
    //Obtener los datos para poder editarlos
    const ObtenerIdContacto = async () => {
        try {
            const data = await fetch(`http://localhost/codeigniter/index.php/ContactController/ObtenerUnContacto/${id}`);
            const contacto = await data.json();
            setRegistro(contacto);
        } catch (err) {
            console.log(err.message);
        }
    }

    //Guardar Cambios al editar un registro

    const GuardarCambios = () => {
        if (document.getElementById("nombre").value === "") {
            alert("Favor de llenar el campo nombre");
        } else if (cajaNombre === true) {
            alert("Favor de llenar correctamente el campo nombre");
        }else if (cajaapp === true) {
            alert("Favor de llenar correctamente el campo apellido paterno");
        }else if (cajaapm === true) {
            alert("Favor de llenar correctamente el campo apellido materno");
        }else if (cajacalle === true) {
            alert("Favor de llenar correctamente el campo calle");
        }else if (cajanum_ext === true) {
            alert("Favor de llenar correctamente el campo num_ext");
        }else if (cajanum_int === true) {
            alert("Favor de llenar correctamente el campo num_int");
        }else if (cajacolonia === true) {
            alert("Favor de llenar correctamente el campo colonia");
        }else if (cajacp === true) {
            alert("Favor de llenar correctamente el campo código postal");
        }else if (cajaestado === true) {
            alert("Favor de llenar correctamente el campo estado");
        }else if (cajapais === true) {
            alert("Favor de llenar correctamente el campo país");
        }else if (cajamuinicipio === true) {
            alert("Favor de llenar correctamente el campo municipio");
        }else if (cajatelefono === true) {
            alert("Favor de llenar correctamente el campo teléfono");
        }else if (cajacorreo === true) {
            alert("Favor de llenar correctamente el campo correo");
        } else if (document.getElementById("app").value === "") {
            alert("Favor de llenar el campo apellido paterno");
        } else if (document.getElementById("calle").value === "") {
            alert("Favor de llenar el campo calle");
        } else if (document.getElementById("num_ext").value === "") {
            alert("Favor de llenar el campo número exterior");
        } else if (document.getElementById("colonia").value === "") {
            alert("Favor de llenar el campo colonia");
        } else if (document.getElementById("cp").value === "") {
            alert("Favor de llenar el campo de codigo postal")
        } else if (document.getElementById("estado").value === "") {
            alert("Favor de llenar el campo estado")
        } else if (document.getElementById("pais").value === "") {
            alert("Favor de llenar el campo pais");
        } else if (document.getElementById("municipio").value === "") {
            alert("Favor de llenar el campo municipio");
        } else if (document.getElementById("telefono").value === "") {
            alert("Favorm de llenar el campo telefono");
        }
        else {
            fetch(`http://localhost/codeigniter/index.php/ContactController/UpdateContact/${id}`, {
                method: 'POST',
                body: new FormData(document.getElementById('contactos'))
            }).then(res => res.json())
                .catch(error => alert('Ocurrió un error al actualizar el contacto: ', error))
                .then(response => alert(response));
            navigate("/");
        }
    }

    return (
        <>
            <div className="card registro">
                <h1 className="titulo">Formulario de Contactos</h1>
                <form onSubmit={enviarContactos} id="contactos">
                    <div className="form-floating mb-5">
                        <input type="text" className="form-control nombre" id="nombre" placeholder="Nombre" name="nombre" value={Registro.nombre} onChange={(e) => setRegistro(e.target.value)} pattern="[A-Za-z ]{1,25}" onKeyUp={(e) => validarCampoNombre(e)} required />
                        <label htmlFor="floatingInput">Nombre*</label>
                        {cajaNombre && <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                            </svg>
                            <div>
                               En el campo Nombre no se acepta que este vacio, ni que contega caracteres especial ni . ni , ni números
                            </div>
                        </div>}
                    </div>
                    <div className="form-floating mb-5">
                        <input type="text" className="form-control app" id="app" placeholder="Appellido Paterno" name="app" value={Registro.app} onChange={(e) => setRegistro(e.target.value)} pattern="[A-Za-z ]{1,25}" onKeyUp={(e) => validarCampoApp(e)} required />
                        <label htmlFor="floatingPassword">Apellido Paterno*</label>
                        {cajaapp && <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                            </svg>
                            <div>
                               En el campo Apellido Paterno no se acepta que este vacio, ni que contega caracteres especial ni . ni , ni números
                            </div>
                        </div>}
                    </div>
                    <div className="form-floating mb-5">
                        <input type="text" className="form-control" id="apm" placeholder="Apellido Materno" name="apm" value={Registro.apm} onChange={(e) => setRegistro(e.target.value)} pattern="[A-Za-z ]{1,25}" onKeyUp={(e) => validarCampoApm(e)} />
                        <label htmlFor="floatingInput">Apellido Materno</label>
                        {cajaapm && <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                            </svg>
                            <div>
                               En el campo Apellido Materno no se acepta que este vacio, ni que contega caracteres especial ni . ni , ni números
                            </div>
                        </div>}
                    </div>
                    <div className="form-floating mb-5">
                        <input type="text" className="form-control calle" id="calle" placeholder="Calle" name="calle" value={Registro.calle} onChange={(e) => setRegistro(e.target.value)} pattern="[A-Za-z 0-9]{1,45}" onKeyUp={(e) => validarCampoCalle(e)} required />
                        <label htmlFor="floatingPassword">Calle*</label>
                        {cajacalle && <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                            </svg>
                            <div>
                               En el campo calle no se acepta que este vacio, ni que contega caracteres especial ni . ni , ni números
                            </div>
                        </div>}
                    </div>
                    <div className="form-floating mb-5">
                        <input type="text" className="form-control num_ext" id="num_ext" placeholder="Número Exterior" name="num_ext" value={Registro.num_ext} onChange={(e) => setRegistro(e.target.value)} pattern="[0-9#]{1,4}" onKeyUp={(e) => validarCampoNum_Ext(e)} required />
                        <label htmlFor="floatingInput">Número Exterior*</label>
                        {cajanum_ext && <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                            </svg>
                            <div>
                               En el campo numero exterior no se acepta que este vacio, ni que contega caracteres especial ni . ni , ni números
                            </div>
                        </div>}
                    </div>
                    <div className="form-floating mb-5">
                        <input type="text" className="form-control" id="num_int" placeholder="Número Interior" name="num_int" value={Registro.num_int} onChange={(e) => setRegistro(e.target.value)} pattern="[0-9#]{1,4}" onKeyUp={(e) => validarCampoNum_Int(e)} />
                        <label htmlFor="floatingPassword">Número Interior</label>
                        {cajanum_int && <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                            </svg>
                            <div>
                               En el campo numero interior no se acepta que este vacio, ni que contega caracteres especial ni . ni , ni números
                            </div>
                        </div>}
                    </div>
                    <div className="form-floating mb-5">
                        <input type="text" className="form-control colonia" id="colonia" placeholder="Colonia" name="colonia" value={Registro.colonia} onChange={(e) => setRegistro(e.target.value)} pattern="[A-Za-z ]{1,50}" onKeyUp={(e) => validarCampoColonia(e)} required />
                        <label htmlFor="floatingInput">Colonia*</label>
                        {cajacolonia && <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                            </svg>
                            <div>
                               En el campo colonia no se acepta que este vacio, ni que contega caracteres especial ni . ni , ni números
                            </div>
                        </div>}
                    </div>
                    <div className="form-floating mb-5">
                        <input type="number" className="form-control cp" id="cp" placeholder="Código Postal" name="codigo_postal" value={Registro.codigo_postal} onChange={(e) => setRegistro(e.target.value)} pattern="[0-9#]{1,5}" onKeyUp={(e) => validarCampoCP(e)} required />
                        <label htmlFor="floatingPassword">Código Postal*</label>
                        {cajacp && <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                            </svg>
                            <div>
                               En el campo codigo postal no se acepta que este vacio, ni que contega caracteres especial ni . ni , ni números
                            </div>
                        </div>}
                    </div>
                    <div className="form-floating mb-5">
                        <input type="text" className="form-control estado" id="estado" placeholder="Estado" name="estado" value={Registro.estado} onChange={(e) => setRegistro(e.target.value)} pattern="[A-Za-z ]{1,70}" onKeyUp={(e) => validarCampoEstado(e)} required />
                        <label htmlFor="floatingPassword">Estado*</label>
                        {cajaestado && <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                            </svg>
                            <div>
                               En el campo estado no se acepta que este vacio, ni que contega caracteres especial ni . ni , ni números
                            </div>
                        </div>}
                    </div>
                    <div className="form-floating mb-5">
                        <input type="text" className="form-control pais" id="pais" placeholder="País" name="pais" value={Registro.pais} onChange={(e) => setRegistro(e.target.value)} pattern="[A-Za-záéíóú]{1,70}" onKeyUp={(e) => validarCampoPais(e)} required />
                        <label htmlFor="floatingPassword">País*</label>
                        {cajapais && <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                            </svg>
                            <div>
                               En el campo pais no se acepta que este vacio, ni que contega caracteres especial ni . ni , ni números
                            </div>
                        </div>}
                    </div>
                    <div className="form-floating mb-5">
                        <input type="text" className="form-control municipio" id="municipio" placeholder="Municipio" name="municipio" value={Registro.municipio} onChange={(e) => setRegistro(e.target.value)} pattern="[A-Za-z ]{1,70}" onKeyUp={(e) => validarCampoMunicipio(e)} required />
                        <label htmlFor="floatingPassword">Municipio*</label>
                        {cajamuinicipio && <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                            </svg>
                            <div>
                               En el campo municipio no se acepta que este vacio, ni que contega caracteres especial ni . ni , ni números
                            </div>
                        </div>}
                    </div>
                    <div className="form-floating mb-5">
                        <input type="number" className="form-control telefono" id="telefono" placeholder="Teléfono" name="telefono" value={Registro.telefono} onChange={(e) => setRegistro(e.target.value)} pattern="[0-9]{1,10}" onKeyUp={(e) => validarCampoTelefono(e)} required />
                        <label htmlFor="floatingPassword">Teléfono*</label>
                        {cajatelefono && <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                            </svg>
                            <div>
                               En el campo telefono no se acepta que este vacio, ni que contega caracteres especial ni . ni , ni números
                            </div>
                        </div>}
                    </div>
                    <div className="form-floating mb-5">
                        <input type="email" className="form-control correo" id="correo" placeholder="Correo" name="correo" value={Registro.correo} onChange={(e) => setRegistro(e.target.value)} pattern="[A-Za-z0-9_@.]{1,45}" onKeyUp={(e) => validarCampoCorreo(e)} />
                        <label htmlFor="floatingPassword">Correo</label>
                        {cajacorreo && <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                            </svg>
                            <div>
                               En el campo correo no se acepta que este vacio, ni que contega caracteres especial ni . ni , ni números
                            </div>
                        </div>}
                    </div>
                    <div className="botones">
                        <Link to="/">
                            <button type="button" className="registrar cancelar">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                                Cancelar
                            </button>
                        </Link>
                        {id === undefined ?
                            <button className="registrar" onClick={Guardar} id="guardar" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                                    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                </svg>
                                Guardar
                            </button> :
                            <button className="registrar cambios" onClick={GuardarCambios} id="cambios" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                                    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                </svg>
                                Guardar Cambios
                            </button>}
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegistroContacto;