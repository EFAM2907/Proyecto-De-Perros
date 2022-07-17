import React from 'react'
import image from '../image/edwin.jpg'
import s from '../styles/Profile.module.css'


export default function Perfil() {
  return (
    <div className={s.container}>
  <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src='https://pps.whatsapp.net/v/t61.24694-24/291950885_930263775040732_9171693168587666331_n.jpg?ccb=11-4&oh=01_AVwiabokPwrns5je8W1We6gMhP4qUkm4NzWmJoCT9MA_Sw&oe=62E27FA1' className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">EDWIN FERNANDO ARIAS MONTOYA</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
 </div>
  )
}
