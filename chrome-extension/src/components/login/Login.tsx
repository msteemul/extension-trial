import React from 'react';
import {InputField, Button} from '../global/index';
import { LoginFormProps } from '../../types';
import { useForm } from 'react-hook-form';


export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },

    }= useForm<LoginFormProps>()
    const onSubmit = async ({ email, password }: LoginFormProps) => {
        console.log(email, password)

    }
    const onChange = () =>{

    }
    
    return (
        <div className='bg-gray-900 w-full h-full flex items-center justify-center p-1 flex-col '>
            <div className='outline rounded-md outline-slate-500 p-5'>
        <p className='text-white'>Login to your account</p>
        <form className=' space-y-6 px-6 py-4' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col justify-evenly w-full'>
                <InputField 
                label='email'  
                type='email' 
                placeholder='email' 
                {...register('email', {required: true})}
                />
                <InputField 
                label='password'
                  type='password'
                    placeholder='password'
                    {...register('password', {required: true})}
                     />
            </div>
            <Button type='submit' children='Login' className='w-full'/>

        </form>
        </div>
        </div>
    )
}
export default Login;