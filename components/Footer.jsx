import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Sound Market All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
      <p>Made With ❤ by Manuel Bautista</p>
      <a className="email" target='_blank' href="https://manuelbautista.netlify.app/">
        My Personal Portfolio 😉
      </a>
    </div>
  )
}

export default Footer