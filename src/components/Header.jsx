import React from 'react'

const Header = ({ changeShowModal }) => {
  const handleClickShowModal = () => {
    changeShowModal()
  }

  return (
    <section className='flex justify-between space-x-8 items-center p-4 sm:font-semibold sm:text-2xl'>
      <h1 className='font-bold text-2xl'>Usuarios</h1>
      <button
        onClick={handleClickShowModal}
        className='bg-secondary font-medium p-2 flex items-center rounded-xl'
      >
        <i className='bx bxs-message-square-add'></i>Crear nuevo usuario
      </button>
    </section>
  )
}

export default Header
