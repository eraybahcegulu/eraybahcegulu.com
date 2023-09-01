import React, { useState } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import eraybahcegulu from "../../eraybahcegulu.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ReactGA from 'react-ga4';
import { Steps } from 'antd';
import { Spin, Button, Form, Input } from 'antd';

import FirebaseComponent from './FirebaseComponent.jsx';

import { Link } from 'react-router-dom';






const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};



ReactGA.initialize("G-5N3FNKYL58");


ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});



const Main = () => {

  return (


    <div className='bg-gray-400 header min-w-min h-max w-6/12 mt-5 m-auto border-black border-2 rounded-md text-center' >


      <main className=' items-center p-2 md:p-4'>
       




        <div className='mt-5' >
          Test
        </div>



      </main>
    </div>
  )
}

export default Main;
