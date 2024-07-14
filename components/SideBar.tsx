"use client"
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Footer from './Footer'
import PlaidLink from './PlaidLink'

const SideBar = ({user}: SiderbarProps) => {
    const path = usePathname();
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link className="mb-12 mt-5 flex cursor-pointer items-center gap-2" href="/">
                <Image src='/icons/logo.svg' width={34} height={34} alt='Logo' className='size-[24px] max-xl:size-14'/>
            <h1 className='sidebar-logo'>Dhan Sanchay</h1>
            </Link>

            {sidebarLinks.map((link) => {
                const isActive = path === link.route || path.startsWith(`${link.route}/`);
                return (
                    <Link key={link.label} href={link.route} className={cn('sidebar-link',{'bg-bank-gradient':isActive})}>
                        <div className='relative size-6'>
                            <Image src={link.imgURL} fill alt={link.label} className={cn({
                                'brightness-50 invert-0': isActive
                            })}/>
                        </div>
                        <p className={cn('sidebar-label',{
                            '!text-white': isActive
                        })}> {link.label}</p>
                    </Link>
                )
            })}

            <PlaidLink user={user} />
        </nav>
        <Footer user={user}  />
    </section>
  )
}

export default SideBar