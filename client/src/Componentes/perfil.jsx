import React from 'react'
import image from '../image/edwin.jpg'
import s from '../styles/Profile.module.css'
import BotonHome from '../Componentes/IconoHome/BotonHome'
export default function Perfil() {
  return (
    <div>
  <BotonHome />
    <div className={s.container}>
  <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h2 className="card-title">Hola Mundo🌎Yo Soy Edwin✔</h2>
        <br />
        <h6 className="card-text">Amante a los Animales y en especial a los Perritos,He Creado Esta App  Utilizando Tecnologias como,React Js,Redux,Boostrap,Node Js,SQl, entre otras.</h6>
        <h6 className="card-text">Siendo una SPA,podras Encontrar diferentes Rutas En Ella,como Su Landing,Home,Un formulario por si quieres agregar una Mascota y Tambien Esta Parte Donde doy informacion sobre mi!🎉</h6>
         <br/>
       <h4> Mis Redes:</h4> 

       <div >
       <a
       href="https://github.com/EFAM2907"
       target="_blank"
       rel='noopener'
       >
        <img
           className={s.avatar}
        src='https://img.icons8.com/ios-glyphs/344/github.png' 
        alt='icono'
        />
       </a>

       <a
       href="https://www.linkedin.com/in/edwinfer2907/"
       target="_blank"
       rel='noopener'
       >
         <img
           className={s.linkedin}
        src='https://cdn-icons-png.flaticon.com/512/174/174857.png' 
        alt='icono'
        />
        </a>

        <a
       href="https://www.instagram.com/edwin.arias21/"
       target="_blank"
       rel='noopener'
       >
         <img
           className={s.linkedin}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png' 
        alt='icono'
        />
        </a>
        <br/>
       <a className={s.boton} href='https://drive.google.com/file/d/1bvhggXv_9rjPF7O9-5eltfdw19nll56s/view?usp=sharing' target="_blank" rel="noopener noreferrer">ver CV🚀</a>
       </div>
       


      </div>
    </div>
  </div>
</div>
 </div></div>
  )
}
