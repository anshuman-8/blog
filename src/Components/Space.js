import React from 'react'

export default function Space({p}) {
    const cn=`py-${p}`;
    // console.log(cn)
  return (
    <div className={cn}>
        <div className='m-1'></div>
    </div>
  )
}
