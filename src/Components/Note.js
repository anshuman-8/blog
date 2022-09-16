import React from 'react'

const Note = ({children}) => {
  return (
    <div className='opacity-75 prose-h5:text-3xl '>
      <h5 className='px-3  pt-2'>Note: </h5>
      <p className='border-l-indigo-700 border-4 border-transparent italic mx-3 px-4'>{children}</p>
    </div>
  )
}

export default Note;
