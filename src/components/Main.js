import React from "react";
import './style.css'
import Resto from './Arsitag-Januari-04-Foto-2.jpeg'
import Makanan from './OIP (6).jpg'

const Main = ()=>{
    return(
        <main>
            <img src={Resto} />

            <h1>Makanan Yang Tersedia</h1>
            <div className="card">
            <img src={Makanan} />
                <h2>Nasi goreng</h2>
                <p>blablabla</p>
            </div>
            <div className="card">
            <img src={Makanan} />
                <h2>Nasi goreng</h2>
                <p>blablabla</p>
            </div>
            <div className="card">
                <img src={Makanan} />
                <h2>Nasi goreng</h2>
                <p>blablabla</p>
            </div>
        </main>
    )
}
export default Main