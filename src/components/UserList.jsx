import React from 'react'
import User from './User'

const UserList = ({
  users,
  deleteUser,
  changeShowModal,
  setIsUserToUpdate,
}) => {
  return (
    <section className='grid gap-8 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1024px] mx-auto pt-16'>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          changeShowModal={changeShowModal}
          setIsUserToUpdate={setIsUserToUpdate}
        />
      ))}
    </section>
  )
}

export default UserList
