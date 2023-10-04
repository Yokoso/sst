import React from 'react';
import Link from 'next/link';


export default function Navbar(props) {

    const renderedNavList = props.navbarList.map(item => {
        return <Link href="#" key={item}><li className='p-3'>{ item }</li></Link>
    });

    return (
        <nav className='flex list-none'>
            { renderedNavList }
        </nav>
  );
}
