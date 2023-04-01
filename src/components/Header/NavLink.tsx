import React, { useState } from "react"
import useVerticalScrollEvent  from '@/hooks/useVerticalScrollEvent';

type Props = {
  id: string
  children: any
}

const NavLink = ({ id, children }: Props) => {
  const [active, setActive] = useState(false)

  useVerticalScrollEvent((evt:any) => {
    const element = document.getElementById(id) as HTMLElement
    if (
        element &&
        evt.currentTarget.scrollY >= element.offsetTop - 60 &&
        evt.currentTarget.scrollY <= element.offsetTop + element.offsetHeight - 60
      ) {
        setActive(true)
      } else {
        setActive(false)
      }
  })
      
  return (
    <li className={active ? `active` : ``}>
      <a href={`#${id}`}>{children}</a>
    </li>
  )
}

export default NavLink