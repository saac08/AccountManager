import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addAccount, editAccount } from "../../features/Accounts/accountsSlice"
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams, Link } from "react-router-dom"
import styles from './accountForm.module.css'

function AccountForm() {

    const [account, setAccount] = useState({
        title: '',
        link: '',
        password: ''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const accounts = useSelector(state => state.accounts)

    const handleChange = e => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (params.id) {
            dispatch(editAccount(account))
        } else {
            dispatch(addAccount({
                ...account,
                id: uuid(),
            }))
        }


        navigate('/')
    }

    useEffect(() => {
        if (params.id) {
            setAccount(accounts.find(account => account.id === params.id))
        }
    }, [])

    return (
        <div className={styles.contentContainer}>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <h3>Añadir Cuenta</h3>
                <div className={styles.inputContainer}>

                    <label className={styles.label} htmlFor="title">Nombre de la cuenta</label>
                    <input
                        className={styles.inputField}
                        name="title"
                        type="text"
                        placeholder="Ej: Cuenta de Google"
                        onChange={handleChange}
                        value={account.title} />
                </div>
                <div className={styles.inputContainer}>

                    <label className={styles.label} htmlFor="title">Link de la cuenta</label>
                    <input
                        className={styles.inputField}
                        name="link"
                        type="url"
                        placeholder="Ej: https://www.google.com"
                        onChange={handleChange}
                        value={account.link} />
                </div>
                <div className={styles.inputContainer}>

                    <label className={styles.label} htmlFor="title">Contraseña de la cuenta</label>
                    <input
                        className={styles.inputField}
                        name="password"
                        type="text"
                        placeholder="Ej: 123456"
                        onChange={handleChange}
                        value={account.password} />
                </div>
                <button className={styles.btnSave}>Guardar</button>
                <Link to={"/"} className={styles.btnCancel}>Cancel</Link>

            </form>
        </div>
    )
}

export default AccountForm