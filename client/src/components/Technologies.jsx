import { Card, Divider } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const Technologies = () => {
    return (
        <Card>
            <h2 className='text-xl font-black'>TECHNOLOGIES I USE</h2>
            <Divider plain> <DownOutlined /> </Divider>
            <div className='flex flex-col gap-10 mt-10 mb-10'>
                <ul className='xl:flex flex-row justify-center md:gap-10'>
                    <li>
                        <strong className='font-extrabold'>Git</strong>
                    </li>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        Firebase
                    </li>
                </ul>
                <ul className='xl:flex flex-row justify-center gap-10'>
                    <li>
                        <strong>MERN - MEAN Stacks</strong>
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        Angular
                    </li>
                    <li>
                        MongoDB
                    </li>
                    <li>
                        ExpressJS
                    </li>
                    <li>
                        NodeJS
                    </li>
                </ul>
                <ul className='xl:flex flex-row justify-center gap-10'>
                    <li>
                        <strong>CSS Frameworks</strong>
                    </li>
                    <li>
                        TailwindCSS
                    </li>
                    <li>
                        Ant Design
                    </li>
                    <li>
                        Bootstrap
                    </li>
                    <li>
                        NG-ZORRO
                    </li>
                    <li>
                        Angular Material
                    </li>
                </ul>
                <ul className='xl:flex flex-row justify-center gap-10'>
                    <li>
                        <strong>Flutter</strong>
                    </li>
                    <li>
                        C# WinForms .Net
                    </li>
                    <li>
                        Unity
                    </li>
                    <li>
                        PHP
                    </li>
                    <li>
                        Arduino
                    </li>
                </ul>
                <ul className='xl:flex flex-row justify-center gap-10'>
                    <li>
                        <strong>ASP.NET MVC</strong>
                    </li>
                    <li>
                        Entity Framework
                    </li>
                    <li>
                        MSSQL
                    </li>
                </ul>
            </div>
            <Divider plain> <UpOutlined /> </Divider>
        </Card>
    )
}

export default Technologies