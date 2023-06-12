import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const ModalForm = ({
  isShowModal,
  createUser,
  isUserToUpdate,
  updateUser,
  resetModalForm,
  showAlertCancel,
}) => {
  const { register, handleSubmit, reset } = useForm()

  const submit = (data) => {
    if (!data.birthday) data.birthday = null

    if (!data.image_url) {
      data.image_url = null
    }

    if (isUserToUpdate) {
      updateUser(data, reset)
    } else {
      createUser(data, reset)
    }
  }

  const handleCloseModal = () => {
    resetModalForm(reset)
    showAlertCancel()
  }

  useEffect(() => {
    if (isUserToUpdate) {
      reset(isUserToUpdate)
    }
  }, [isUserToUpdate])

  return (
    <section
      className={`fixed top-0 left-0 right-0 h-screen bg-black/20 grid place-content-center ${
        isShowModal ? ' opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className='bg-primary border-2 border-secondary rounded-xl w-[280px] p-4 grid gap-6 relative'
      >
        <h3 className='font-bold text-3xl'>
          {isUserToUpdate ? 'Editar usuario' : 'Nuevo usuario'}
        </h3>

        <div className='grid'>
          <label htmlFor='' className='font-bold text-sm'>
            Nombre
          </label>
          <input
            placeholder='Ingresa tu nombre...'
            type='text'
            className='bg-gray-100 outline-none p-2'
            {...register('first_name')}
          />
        </div>
        <div className='grid'>
          <label htmlFor='' className='font-bold text-sm'>
            Apellido
          </label>
          <input
            placeholder='Ingresa tu apellido...'
            type='text'
            className='bg-gray-100 outline-none p-2'
            {...register('last_name')}
          />
        </div>
        <div className='grid'>
          <label htmlFor='' className='font-bold text-sm'>
            Correo
          </label>
          <input
            placeholder='Ingresa tu correo...'
            type='text'
            className='bg-gray-100 outline-none p-2'
            {...register('email')}
          />
        </div>
        <div className='grid'>
          <label htmlFor='' className='font-bold text-sm'>
            Contraseña
          </label>
          <input
            placeholder='Ingresa tu contraseña...'
            type='password'
            className='bg-gray-100 outline-none p-2'
            {...register('password')}
          />
        </div>
        <div className='grid'>
          <label htmlFor='' className='font-bold text-sm'>
            Cumpleaños
          </label>
          <input
            placeholder='Ingresa tu contraseña...'
            type='date'
            className='bg-gray-100 outline-none p-2'
            {...register('birthday')}
          />
        </div>

        <div className='grid'>
          <label htmlFor='' className='font-bold text-sm'>
            Imagen Usuario
          </label>
          <input
            placeholder='Ingresa URL de imagen...'
            type='text'
            className='bg-gray-100 outline-none p-2'
            {...register('image_url')}
          />
        </div>

        <button
          type='button'
          onClick={handleCloseModal}
          className='absolute top-2 right-2 text-2xl hover:text-secundary '
        >
          <i className='bx bxs-message-square-x'></i>
        </button>

        <button className='bg-secondary rounded-xl font-medium p-2'>
          {isUserToUpdate ? 'Guardar cambios' : 'Agregar nuevo usuario'}
        </button>
      </form>
    </section>
  )
}

export default ModalForm
