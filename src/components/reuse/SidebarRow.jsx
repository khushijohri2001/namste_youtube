import React from 'react'
import { Link } from 'react-router-dom';

const SidebarRow = ({path, icon, name, onClickHandler}) => {
  return (
    <>
    <Link to={path}>
      <li className="p-1 px-4 flex items-center max-sm:justify-center" onClick={onClickHandler}>
       {icon}
        <span className="ml-5 max-sm:hidden">{name}</span>
      </li>
    </Link>
    </>
  )
}

export default SidebarRow;