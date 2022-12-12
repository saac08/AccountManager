import { Route, Routes, HashRouter } from 'react-router-dom'
import AccountForm from "./components/AccountForm/AccountForm"
import AccountList from "./components/AccountList/AccountList"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (<>
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<AccountList />} />
          <Route path='/create-account' element={<AccountForm />} />
          <Route path='/edit-account/:id' element={<AccountForm />} />
        </Routes>
      </HashRouter>
    </div>
  </>
  )
}

export default App
