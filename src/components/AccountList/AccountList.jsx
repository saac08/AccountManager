import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteAccount } from "../../features/Accounts/accountsSlice"
import styles from './accountList.module.css'
import { FaExternalLinkAlt } from 'react-icons/fa'

function AccountList() {

    const accounts = useSelector(state => state.accounts)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteAccount(id))
    }

    return (
        <div className={styles.contentContainer}>
            <header className={styles.header}>
                <h1>Total de cuentas: <span className={styles.numberAccounts}>{accounts.length}</span></h1>
                <Link to={"/create-account"} className={styles.btnAñadirCuentas}>Añadir Cuenta </Link>
            </header>
            <div className={styles.cardContainer}>
                {accounts.map((account) => (
                    <div key={account.id} className={styles.cardItem}>
                        <header className={styles.cardHeader}>
                            <h3>{account.title}</h3>
                        </header>
                        <a className={styles.link} href={account.link} target="_blank">{account.link} <FaExternalLinkAlt /></a>
                        <p><span>Contraseña:</span> {account.password}</p>
                        <div className={styles.actionButtons}>
                            <Link className={styles.editButton} to={`/edit-account/${account.id}`}>Editar</Link>
                            <button className={styles.deleteButton} onClick={() => handleDelete(account.id)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AccountList