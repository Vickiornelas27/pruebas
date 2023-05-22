'use client'
import React from 'react'
import Image from 'next/image'
import { Navbar, Link, Text, Avatar, Dropdown, Input} from "@nextui-org/react";
import { SearchIcon } from './SearchIcon';


//Se crea el objeto rutas
const rutas = [
  {
    ruta: '/',
    label: 'Inicio'
  },
  {
    ruta: '/infantil',
    label: 'Infantil'
  },
  {
    ruta: '/servicios',
    label: 'Servicios'
  },
  {
    ruta: '/about',
    label: 'About'
  },
  {
    ruta: '/libros',
    label: 'Libros'
  }
]

const Navbarr = () => {

  return (
  
      <Navbar isBordered variant="sticky" >
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
              
            },
          }}
        >
          <Image src="https://scontent.ftij2-1.fna.fbcdn.net/v/t1.18169-9/1441409_10152091536306639_2104613663_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SD8aLRSM4-IAX-yXF32&_nc_ht=scontent.ftij2-1.fna&oh=00_AfBToqqUnQ_22IWDfLn7oXJ4yPU5UMcLTCDTk40HMCrIug&oe=6469AC46" 
          width={80}
          height={0}
          className=' rounded-full  '
          alt="Logo" />
         
         
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="primary"
          hideIn="xs"
          variant="highlight-rounded"
        >
         {rutas.map(({ ruta, label }) => (
          <Navbar.Link href={ruta} key={ruta}>
            {label}
          </Navbar.Link>
        ))}
      </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
         <Input
              clearable
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              
              
              placeholder="Search..."
            />
         
           
              
        </Navbar.Content>
        <Navbar.Collapse>
        {rutas.map(({ ruta, label }) => (
          <Navbar.CollapseItem key={ruta} isActive={false}>
            <Link color="inherit" href={ruta}>
              {label}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>
  
 

  )
}

export default Navbarr
