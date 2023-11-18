import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined, LoadingOutlined } from '@ant-design/icons';
import eraybahcegulu from "../eraybahcegulu.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Steps } from 'antd';
import { Spin } from 'antd';
import './Main.css';
import Contact from './Contact.jsx';
import Title from '../Title';


const Main = () => {

  return (

    <div className='bg-gray-400 header w-[1000px] h-max mt-5 mx-auto border-black border-2 rounded-md text-center'>
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

        <div className='text-left w-full flex mt-10'>
          <div className='ml-20 w-12/12'>
            <h2 className='font-black'>EDUCATION</h2>
            <Steps
              className='steps-education'
              progressDot
              current={3}
              direction="vertical"
              items={[
                {
                  title: 'Dumlupınar Üniversitesi • Bilgisayar Mühendisliği',
                  description: '2019-2023 • 3.00/4.00',
                },
                {
                  title: 'Doğuş Üniversitesi • Endüstri Mühendisliği',
                  description: '2018',
                },
                {
                  title: 'Kütahya Koleji',
                  description: '2017',
                },

              ]}
            />
          </div>

          <div className='ml-32 w-12/12 pr-20' >
            <h2 className='font-black'>EXPERIENCE</h2>
            <Steps
              className='steps-experience'
              progressDot
              current={2}
              direction="vertical"
              items={[
                {
                  title: 'Bilgi İşlem Daire Başkanlığı • Intern ',
                  description: '2023 Temmuz-Ağustos • DPÜ Rektörlüğü',

                },
                {
                  title: 'Kuartek Proje Tasarım • Intern',
                  description: '2022 Temmuz-Ağustos • Kütahya',
                },
              ]}
            />
          </div>
        </div>
        
        {/* <Contact></Contact> */}
       

        <div>
          <Spin size="large" />
          <p className='text-base text-black'> UPDATING </p>
        </div>

        <div className='w-auto h-auto text-center mt-10'>
          <h2 className='font-black'>TECHNOLOGIES I USE</h2>
          <div className='flex-auto'>

            <div className='flex justify-center'>
              <span className='m-5'>
                <strong> HTML </strong>
              </span>

              <span className='m-5'>
                <strong> CSS </strong>
              </span>

              <span className='m-5'>
                React
              </span>

              <span className='m-5'>
                Firebase
              </span>
            </div>

            <div className='flex justify-center'>
              <span className='m-5'>
                <strong> UI Frameworks </strong>
              </span>

              <span className='m-5'>
                Bootstrap
              </span>

              <span className='m-5'>
                TailwindCSS
              </span>

              <span className='m-5'>
                Ant Design
              </span>

              <span className='m-5'>
                Angular Material
              </span>
            </div>


            <div className='flex justify-center'>

              <span className='m-5'>
                <p> <strong> MEAN Stack </strong> </p>
              </span>

              <span className='m-5'>
                MongoDB
              </span>

              <span className='m-5'>
                ExpressJS
              </span>

              <span className='m-5'>
                Angular
              </span>

              <span className='m-5'>
                NodeJS
              </span>


            </div>

            <div className='flex justify-center'>

              <span className='m-5'>
                <strong> Flutter </strong>
              </span>

              <span className='m-5'>
                C# WinForms .Net
              </span>

              <span className='m-5'>
                Unity
              </span>

              <span className='m-5'>
                PHP
              </span>

              <span className='m-5'>
                Arduino
              </span>

            </div>

            <div className='flex justify-center'>

              <span className='m-5'>
                <strong>ASP.NET MVC</strong>
              </span>

              <span className='m-5'>
                Entity Framework
              </span>

              <span className='m-5'>
                MSSQL
              </span>

            </div>

            <div className='flex justify-center'>

              <span className='m-5'>
                <strong>Git Version Control</strong>
              </span>

            </div>
          </div>
        </div>

        <div className='comm mt-5'>
          <a href="https://github.com/eraybahcegulu" target="_blank" className='m-5'>
          <FontAwesomeIcon icon={faGithub} beat size="2xl" style={{color: "#3e77da",}} />
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
