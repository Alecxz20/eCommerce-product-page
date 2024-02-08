'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/assets/images/logo.svg'
import Link from 'next/link'
import { MdOutlineShoppingCart } from 'react-icons/md'
import avatar from '@/assets/images/image-avatar.png'
import productImage from '@/assets/images/image-product-1-thumbnail.jpg'
import garbage from '@/assets/images/icon-delete.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import { useAutoAnimate } from '@formkit/auto-animate/react'

interface MyLink {
  href: string
  title: string
}

type links = MyLink[]

const links: links = [
  {
    href: '#',
    title: 'Collections',
  },
  {
    href: '#',
    title: 'Men',
  },
  {
    href: '#',
    title: 'Woman',
  },
  {
    href: '#',
    title: 'About',
  },
  {
    href: '#',
    title: 'Contact',
  },
]

export default function Header() {
  const [isCart, setIsCart] = useState(false)
  const [isLateralMenu, setIsLateralMenu] = useState(false)
  const [animationParent] = useAutoAnimate()

  return (
    <header ref={animationParent}>
      {isLateralMenu && <MobileNavLinks setIsLateralMenu={setIsLateralMenu} />}
      <nav className="border-b-2 h-[80px] flex justify-between w-[90%] mx-auto">
        <div className="flex gap-10 items-center ">
          <div className="flex gap-4 items-center static">
            <GiHamburgerMenu
              className="sm:hidden h-7 w-7 cursor-pointer"
              onClick={() => setIsLateralMenu(true)}
            />

            <Image src={logo} alt="logo" className="h-5 cursor-pointer" />
          </div>
          <ul className="gap-4 h-[80px] hidden sm:flex">
            {links.map((item, index) => (
              <li
                key={index}
                className="text-gray-400 hover:text-black text-sm border-b-4 border-transparent hover:border-red-400 flex items-center transition-all"
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4 relative">
          <MdOutlineShoppingCart
            className="h-6 w-6 cursor-pointer"
            onClick={() => setIsCart(!isCart)}
          />
          {isCart && <CartUI />}

          <Image
            alt="avatar"
            src={avatar}
            className="h-10 w-10 rounded-full cursor-pointer ring-transparent ring-2 hover:ring-orange-400 transition-all"
          />
        </div>
      </nav>
    </header>
  )
}

function CartUI() {
  return (
    <div className="absolute top-20 right-0 p-2 w-[300px] flex flex-col gap-4 shadow-lg rounded-lg">
      <h3 className="font-bold text-lg">Cart</h3>
      <hr />
      <section className="flex gap-8 items-center text-gray-400 justify-between text-sm">
        <Image
          className="h-10 w-auto rounded-lg"
          alt="product image thumbnail"
          src={productImage}
        />
        <div>
          <p className="">Automn Limited Edition</p>
          <p>
            $125.00 x 4{' '}
            <span className="text-black font-semibold">$500.00</span>
          </p>
        </div>
        <div>
          <Image
            alt="trash can icon"
            src={garbage}
            className="cursor-pointer fill-red-600"
          />
        </div>
      </section>
      <button
        type="button"
        className="bg-orange-400 text-white rounded-lg py-2 pointer hover:bg-orange-500"
      >
        Checkout
      </button>
    </div>
  )
}

//SidebarLateral Menu
type MobileNavLinks = {
  setIsLateralMenu: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileNavLinks({ setIsLateralMenu }: MobileNavLinks) {
  function closeLateralMenu() {
    setIsLateralMenu(false)
  }
  return (
    <div className="flex h-screen w-full bg-black/40 absolute inset-0 transition-all z-20">
      <section className="h-full bg-white w-[250px] px-8 py-6">
        <IoClose onClick={closeLateralMenu} className="w-8 h-8" />
        <ul className="mt-8">
          {links.map((item, index) => (
            <li
              key={index}
              className="flex flex-col transition-all mt-6 font-bold"
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
