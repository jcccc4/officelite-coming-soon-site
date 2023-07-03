import React from 'react'

type Props = {
    number:string,
    stat:string
}

function TimeCard({number, stat}: Props) {
  return (
    <div className='bg-[#333950] w-[72px] h-[92px] rounded-[4px] text-center'>
        <div className='text-time font-bold mt-[11px]'>{number}</div>
        <div className='text-timeName font-bold tracking-widest text-[#999CA7]'>{stat}</div>
    </div>
  )
}

export default TimeCard