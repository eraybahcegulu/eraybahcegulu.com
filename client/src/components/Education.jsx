import { Steps } from 'antd';

const Education = () => {
    return (
        <div className='hover:scale-125 transition-all font-bold hover:skew-y-6'>
            <h2 className='text-2xl font-bold'>EDUCATION</h2>
            <Steps
                className='steps-education text-xs'
                progressDot
                current={3}
                responsive={true}
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