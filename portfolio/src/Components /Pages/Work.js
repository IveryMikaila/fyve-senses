import React from 'react'
import { client_list } from '../Data/Clients';
import '../../Styles/Work.css'

const Work = () => {

  return (
    <div>
      <h1 className='client-heading'>WORK</h1>

<div className='client-list'>
{client_list.map((client)=>{
return(<div className='client-card' >
<a href={client.path}>
  <div className={client.class}></div>
</a>
<h2>{client.name}</h2>
</div>)
})}
</div>
    </div>
  )
}

export default Work;