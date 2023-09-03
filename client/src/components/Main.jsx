import React, { useState } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import eraybahcegulu from "../eraybahcegulu.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ReactGA from 'react-ga4';
import { Steps } from 'antd';
import { Spin } from 'antd';

import Contact from './Contact.jsx';
import Title from '../Title';



ReactGA.initialize("G-5N3FNKYL58");

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

const Main = () => {

  return (


    <div className='bg-gray-400 header min-w-min h-max w-6/12 mt-5 m-auto border-black border-2 rounded-md text-center' >
      <Title title="Eray BAHÇEGÜLÜ" />

      <main className='items-center p-2'>
        <div className='avatar'>
          <Avatar shape="square" size={300} src={eraybahcegulu} icon={<UserOutlined />} />
        </div>
        <div className="logo m-auto mt-5">
          <h2 className='font-bold text-5xl px-2 py-2 '>
            ERAY BAHÇEGÜLÜ

          </h2>
        </div>

        <div className='text-left flex mt-10 ml-20'>
          <div className='w-2/4 '>
            <h2>EDUCATION</h2>
            <Steps
              progressDot
              current={2}
              direction="vertical"
              items={[
                {
                  title: 'Doğuş Üniversitesi • Endüstri Mühendisliği',
                  description: '2018',
                },
                {
                  title: 'Kütahya Dumlupınar Üniversitesi • Bilgisayar Mühendisliği',
                  description: '2019-2023 • 3.00/4.00',
                },
              ]}
            />
          </div>

          <div className='ml-25 w-2/4 pl-20'>
            <h2>EXPERIENCE</h2>
            <Steps
              progressDot
              current={2}
              direction="vertical"
              items={[
                {
                  title: 'Kuartek Proje Tasarım - Intern',
                  description: '2022 Temmuz-Ağustos, Kütahya',
                },
                {
                  title: 'Bilgi İşlem Daire Başkanlığı - Intern ',
                  description: '2023 Temmuz-Ağustos, KDPÜ Rektörlüğü',
                },
              ]}
            />
          </div>
        </div>

        <Contact></Contact>

        <div className='mt-10'>
          <Spin tip="UPDATING" >
            <div className="content" />
          </Spin>
        </div>

        <div className='w-auto h-auto text-center mt-20'>
          <h2>TECHNOLOGIES I USE</h2>
          <div className='flex-auto mt-2'>

            <span className='m-5'>
              Arduino
            </span>

            <span className='m-5'>
              HTML
            </span>

            <span className='m-5'>
              CSS
            </span>

            <span className='m-5'>
              WinForms
            </span>

            <span className='m-5'>
              Flutter
            </span>

            <span className='m-5'>
              React
            </span>

            <span className='m-5'>
              NodeJS
            </span>

            <span className='m-5'>
              ExpressJS
            </span>

            <span className='m-5'>
              Git
            </span>

            <span className='m-5'>
              MSSQL
            </span>

            <span className='m-5'>
              Unity
            </span>

          </div>

        </div>

        <div className='comm mt-5'>

          <a href="https://twitter.com/itsErayizm" target="_blank" className='m-5'>
            <FontAwesomeIcon icon={faXTwitter} beat size="2xl" style={{ color: "#3b64ab", }} />
          </a>


          <a href="https://www.instagram.com/eraybahcegulu/" target="_blank" className='m-5' >
            <FontAwesomeIcon icon={faInstagram} beat size="2xl" style={{ color: "#3b64ab", }} />
          </a>


          <a href="https://www.linkedin.com/in/eraybahcegulu/" target="_blank" className='m-5'>
            <FontAwesomeIcon icon={faLinkedinIn} beat size="2xl" style={{ color: "#3b64ab", }} />
          </a>


          <a href="https://github.com/eraybahcegulu" target="_blank" className='m-5'>
            <FontAwesomeIcon icon={faGithub} beat size="2xl" style={{ color: "#3b64ab", }} />
          </a>
        </div>

        <div className='mt-5' >
          ©2023 Created by Eray BAHÇEGÜLÜ
        </div>
      </main>
    </div>
  )
}

export default Main;