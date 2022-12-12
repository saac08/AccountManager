import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.css'

function Navbar() {
    return (
        <nav>
            <div className={styles.links}>
                <Link className={styles.linkItem} to={"/"}>Administrador</Link>
                <Link className={styles.linkItem}>Generador de contraseñas</Link>
            </div>
        </nav>
    )
}

export default Navbar