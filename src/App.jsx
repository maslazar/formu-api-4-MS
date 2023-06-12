import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import UserForm from './components/UserForm'
import axios from 'axios'
import swal from 'sweetalert'
import UserList from './components/UserList'
import './components/styles/stylesAlerts.css'

const BASE_URL = 'https://users-crud.academlo.tech'

const DEFAULT_VALUES = {
  birthday: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  image_url: '',
}

function App() {
  const [isUserToUpdate, setIsUserToUpdate] = useState(null)
  const [isShowModal, setIsShowModal] = useState(false)
  const [users, setUsers] = useState([])

  const changeShowModal = () => setIsShowModal(!isShowModal)

  const getAllUsers = () => {
    const url = BASE_URL + '/users/'

    axios
      .get(url)
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err))
  }

  const createUser = (data, reset) => {
    const url = BASE_URL + '/users/'

    axios
      .post(url, data)
      .then(() => {
        getAllUsers()
        resetModalForm(reset)
        changeShowModal()
        showAlertUserCreated()
      })
      .catch(() => {})
  }

  const resetModalForm = (reset) => {
    setIsShowModal(false)
    reset(DEFAULT_VALUES)
    setIsUserToUpdate(null)
  }

  const deleteUser = (id) => {
    const url = BASE_URL + `/users/${id}/`

    axios.delete(url)
    swal({
      title: 'Eliminar',
      text: '¿Confirma, deseas eliminar el usuario?',
      icon: 'warning',
      buttons: ['No', 'Si'],
    })
      .then((res) => {
        if (res) {
          getAllUsers()
          swal({
            text: 'Usuario eliminado',
            icon: 'success',
          })
        } else {
          swal({
            text: 'Usuario no eliminado',
            icon: 'error',
          })
        }
      })
      .catch((err) => console.log(err))
  }

  const updateUser = (data, reset) => {
    const url = BASE_URL + `/users/${isUserToUpdate.id}/`

    axios
      .patch(url, data)
      .then(() => {
        getAllUsers()
        resetModalForm(reset)
        showEditUserAlertSucces()
      })
      .catch((err) => console.log(err))
  }

  const showAlertUserCreated = () => {
    swal({
      title: 'Usuario creado',
      icon: 'success',
      button: 'Ok',
    })
  }

  const showAlertCancel = () => {
    swal({
      title: '¡Acción cancelada!',
      icon: 'error',
      button: 'Ok',
    })
  }

  const showEditUserAlertSucces = () => {
    swal({
      title: 'Usuario editado con éxito',
      icon: 'success',
      button: 'OK',
    })
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <main className='font-["Roboto"] pb-60 bg-primary'>
      <Header changeShowModal={changeShowModal} />
      <UserForm
        isShowModal={isShowModal}
        createUser={createUser}
        isUserToUpdate={isUserToUpdate}
        updateUser={updateUser}
        resetModalForm={resetModalForm}
        showAlertCancel={showAlertCancel}
      />

      <UserList
        users={users}
        deleteUser={deleteUser}
        changeShowModal={changeShowModal}
        setIsUserToUpdate={setIsUserToUpdate}
      />
    </main>
  )
}

export default App
