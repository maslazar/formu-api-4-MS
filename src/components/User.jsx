import React from 'react'
const imagenRandom = '/images/user-icon.png'

const User = ({ user, deleteUser, changeShowModal, setIsUserToUpdate }) => {
  const handleClickDelete = () => {
    deleteUser(user.id)
  }

  const handleClickUpdate = () => {
    changeShowModal()
    setIsUserToUpdate(user)
  }

  return (
    <section className='bg-fourth border-2 border-secondary p-6 rounded-xl'>
      <article>
        <p className='text-black font-medium text-2xl pb-2'>
          {user.first_name} {user.last_name}
        </p>
        <hr className='pb-2' />
        <div>
          <p className='text-primary'>CORREO</p>
          <span>{user.email}</span>
        </div>
        <div>
          <p className='text-primary pt-2'>CUMPLEAÑOS</p>
          <span>
            <span className='text-[#BFB78F]'>
              <i className='bx bxs-gift mr-2'></i>
            </span>
            {user.birthday || 'No fecha'}
          </span>
        </div>

        <div className=' pb-4 '>
          <p className='text-primary pt-2'> FOTO</p>
          <div className=''>
            <img
              className='rounded-lg w-[80px] h-[80px]  '
              src={user.image_url || imagenRandom}
              alt=''
            />
          </div>
        </div>
        <hr className='pb-3 pt-2' />
        <section className='flex justify-end items-center space-x-2 pb-0 text-2xl'>
          <div>
            <button onClick={handleClickDelete} className='text-blue_ref'>
              <i className='bx bxs-trash'></i>
            </button>
          </div>

          <div>
            <button onClick={handleClickUpdate} className='text-secondary'>
              <i className='bx bxs-message-square-edit'></i>
            </button>
          </div>
        </section>
      </article>
    </section>
  )
}

export default User
