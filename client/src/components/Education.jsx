import { Steps } from 'antd';

const Education = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold'>EDUCATION</h2>
            <Steps
                className='steps-education'
                progressDot
                current={3}
                direction="vertical"
                items={[
                    {
                        title: 'Dumlupinar University • Computer Engineering',
                        description: '2019-2023 • 3.00/4.00',
                    },
                    {
                        title: 'Dogus University • Industrial Engineering',
                        description: '2018',
                    },
                    {
                        title: 'Kutahya Collage',
                        description: '2017',
                    },
                ]}
            />
        </div>
    )
}

export default Education