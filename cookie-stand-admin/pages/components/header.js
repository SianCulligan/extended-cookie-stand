import React from 'react';
import Link from 'next/link'

function Header(props){
    return(
      <header className="flex items-center justify-between p-4 text-black bg-green-500">
        <h1 className="text-2xl">{props.title}</h1>
        <nav className="pt-1 pb-1 pl-2 pr-2 text-xs bg-gray-100 rounded-sm">
          <Link href="./overview">
            <a>Overview</a> 
          </Link>        
          </nav>
      </header>
    )
    }

export default Header;

