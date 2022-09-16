import React from 'react'

export default function Space({h}) {
    const cn=`h-${h}`;
    // console.log(cn)
  return (
    <div className={cn}>
        <div className='m-1'></div>
    </div>
  )
}
