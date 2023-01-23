import React, { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import Link from "next/link"

import Image from 'next/image';
import { loader } from '../util';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import styles from '../styles/Navbar.module.css'
import next from 'next';

const Menu = () => (
  <>
    <Link href='/blog/blog'><p>About</p></Link>
    <Link href='/blog/blog'><p>Projects</p></Link>
    <Link href='/blog/blog'><p>Contact</p></Link>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={styles.site__navbar}>
      <div className={styles.site__navbar_links}>
        <div className={styles.site__navbar_links_logo}>
          <Image
            loader={loader}
            alt='Site logo'
            src='next.png'
            height='1'
            width='1'
          />
        </div>
        <div className={styles.site__navbar_links_container}>
          <Menu />
        </div>
        <div className= {styles.site__navbar_social_container}>
          <div className={styles.site__navbar_social} href="https://google.com">
            <AiFillGithub size="3rem" />
          </div>
          <div className={styles.site__navbar_social} href="https://google.com">
            <AiFillLinkedin size="3rem" />
          </div>
          <div className={styles.site__navbar_social} href="https://google.com">
            <AiFillInstagram size="3rem" />
          </div>
        </div>
      </div>
      <div className={styles.site__navbar_menu}>
        <Hamburger color='white' size={27} toggled={toggleMenu} toggle={setToggleMenu} />
        {toggleMenu && (
          <div className={styles.site__navbar_menu_container}>
            <div className={styles.site__navbar_menu_container_links} onClick={() => setToggleMenu(false)}>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar