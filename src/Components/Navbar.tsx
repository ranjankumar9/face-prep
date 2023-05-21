import React from 'react'
import css from '../Styles/Navbar.module.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className={css.container}>
        <div className={css.nav1}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC3TrkG8MlQh2ludCFFBu07YXCpC5ywTCAZSJu04oi0IiqFzXuZUzlDINtteWz4JmtcrE&usqp=CAU" alt="user" />
        </div>
        <div className={css.nav2}>
            <p>Welcome To User Details</p>
        </div>
        <div className={css.nav3}>
            <button onClick={() => {
                navigate("/")
                localStorage.removeItem("login")
                }} >LogOut</button>
        </div>
    </div>
  )
}

export default Navbar