import React from 'react'

const Note = ({children, ctx}) => {
  return (
    <div className='border-start border-5 opacity-75 '>
      <h5 className='px-3 py-2'>Note: </h5>
      <p className='fst-italic fs-6 px-4'>{children}</p>
    </div>
  )
}

export default Note;
