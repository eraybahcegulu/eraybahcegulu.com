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


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: 'Bir ${label} giriniz.',
  number: {
    range: '${label} en fazla ${max} karakter olabilir.',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};

ReactGA.initialize("G-5N3FNKYL58");


ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});


const description = '';
const Main = () => {

  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <div className='bg-gray-400 header min-w-min h-max w-8/12 mt-5 m-auto border-black border-2 rounded-md text-center' >
      <main className=' items-center p-2 md:p-4'>
        <div className='avatar'>
          <Avatar shape="square" size={300} src={eraybahcegulu} icon={<UserOutlined />} />
        </div>
        <div className="logo m-auto mt-5">
          <h2 className='font-bold px-2 py-2 md:text-5xl'>
            <a href="">ERAY BAHÇEGÜLÜ</a>

          </h2>
        </div>

        <div className='about text-left flex m-auto mt-10 ml-10'>
          <div className='w-2/4'>
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

          <div className='ml-20 w-2/4 pl-20 '>
            <h2>EXPERIENCE</h2>
            <Steps
              progressDot
              current={2}
              direction="vertical"
              items={[
                {
                  title: 'Kuartek Proje Tasarım - Intern',
                  description: '2022, Kütahya',
                },
                {
                  title: 'Bilgi İşlem Daire Başkanlığı - Intern ',
                  description: '2023, Kütahya Dumlupınar Üniversitesi Rektörlüğü',
                },
              ]}
            />
          </div>
        </div>

        <div className='ml-20 mt-10'>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{
              maxWidth: 620,
            }}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={['user', 'name']}
              label="Ad"
              rules={[
                {
                  type: 'string',
                  required: true,
                  message: validateMessages.required,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item 
            name={['user', 'introduction']} 
            label="Mesaj" 
            rules={[
              {
                required: true,
                type: 'string', // Veri tipini belirtmek önemlidir
                max: 40,
                message: validateMessages.number.range, // `number.range` hatası iletisini kullanıyoruz
              },
            ]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
              }}
            >
        <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
          Gönder
        </Button>
            </Form.Item>
          </Form>
        </div>

        <div className='technologies w-auto h-auto text-center mt-12'>
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

        


        <div className='mt-10'>
          <Spin tip="Güncelleniyor" >
            <div className="content" />
          </Spin>
        </div>



        <div className='comm mt-20'>

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

      </main>
    </div>
  )
}

export default Main;
