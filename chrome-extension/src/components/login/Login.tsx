import React from 'react';
import {InputField, Button} from '../global/index';


const Login:React.FC = () => {
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('working')
    }
    const onChange = () =>{

    }
    
    return (
        <div className='bg-gray-900 w-full h-full flex items-center justify-center'>
        <form className=' space-y-6 px-6 py-4' onSubmit={onSubmit}>
            <div className='flex flex-col justify-evenly w-full'>
                <InputField label='email'  type='email' name='email' placeholder='email' onChange={onChange}/>
                <InputField label='password'  type='password' name='password' placeholder='password' onChange={onChange}/>

            
            </div>
            <Button type='submit' children='Login' className='w-full'/>

        </form>
        </div>
    )
}
export default Login;