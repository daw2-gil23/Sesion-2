import { adminUser } from "../vistas/AdminUser";
import { home } from "../vistas/Home"
import { registro } from "./Regristo";
import { usuarios } from "./Usuario";
import { v4 as uuidv4 } from 'uuid';
import multiavatar from '@multiavatar/multiavatar/esm'

export const router = {
    home: ()=>{
        document.querySelector('main').innerHTML = home.template;
        home.script()
    },
    admin: ()=>{
        document.querySelector('.tabla').innerHTML = adminUser.template
        adminUser.script()
        document.querySelector('.registro').innerHTML = registro.template
        registro.script()
        
    },
    about: ()=>{
        document.querySelector('main').innerHTML = adminUser.template
        adminUser.script()
    },
    eliminar: (evento)=>{
        let usarioId = evento.target.dataset.id
        console.log(usarioId)
        alert("Estás borrando el usuario con id: " + usarioId)
        const trId = document.getElementById(usarioId); 
        trId.classList.add('fila-oculta')

    },
    editar: ()=>{

    },
    añadir:(evento)=>{
        const inputNick = document.querySelector("#nick").value
        const inputContraseña = document.querySelector("#password").value
        const inputemail = document.querySelector("#email").value
        evento.preventDefault()

        const usuarioNuevo = 
            {
                nick:inputNick,
                email:inputemail,
                password: inputContraseña
            }
        

        usuarioNuevo.id = uuidv4() 
        usuarios.push(usuarioNuevo);

        

        console.log(usuarios);
    },
    avatar:(evento)=>{
        let svgCode = multiavatar(evento.target.value)
        console.log("ha")
        document.querySelector('#avatar').innerHTML = svgCode
    }
}