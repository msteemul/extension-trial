import React from 'react';
import { useForm } from 'react-hook-form';
import {InputField, Button} from '../global/index';
import {SignupFormProps} from '../../types'
import {signup} from '../../services/signup'

const Signup:React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },

    }= useForm<SignupFormProps>()

    const onSubmit = async ({ name,email, password }: SignupFormProps) => {
        console.log(name ,email, password)
        try{
            const user = await signup({ name, email, password })
            console.log('user', user)

        }catch(e){
            console.log(e)
        }

    }
    
    return (
        <>
         <div className='bg-gray-900 w-full h-full flex items-center justify-center p-1 flex-col '>
         <div className='outline rounded-md outline-slate-500 p-5'>
         <p className='text-white'>Create your account</p>
         <form className=' space-y-6 px-6 py-4' onSubmit={handleSubmit(onSubmit)}>
         <div className='flex flex-col justify-evenly w-full'>
         <InputField 
                label='name'  
                type='name' 
                placeholder='name' 
                {...register('name', {required: true})}
                />
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
            <Button type='submit' children='Signup' className='w-full'/>

         </form>
         </div>
         </div>
        </>
    )
}
export default Signup;