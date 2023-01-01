import React from 'react'


const SidePanel = (props) => {
  const title = props.post.title;
  const titles=props.post.contentsTitle;
  
  return (
    <div className='bg-slate-400/20 overflow-y-auto h-36 mt-10 ml-10 rounded-lg px-3 pl-5 py-3 backdrop-blur-md' title="Contents">
      <a className='font-semibold hover:underline mb-3' href="#" >
        {title}
      </a>
      {titles.map((title,index)=>(
        <div className='ml-3 mb-2 hover:underline'>
          <a href={"#"+title[0]}>
            {title[1]}
          </a>
        </div>
          
      ))}
    </div>
  )
}

export default SidePanel
