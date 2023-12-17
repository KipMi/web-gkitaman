'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
const apiURL = process.env.NEXT_PUBLIC_API_URL;

type FormValues = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { username, password } = data;

    const user = { username, password };

    console.log(user);

    try {
      const response = await axios.post(`${apiURL}/auth/login`, user);

      alert('Login Success');

      router.push('/admin/tabel-jemaat');
      console.log('Login submitted', response.data);
    } catch (error) {
      console.error('Error logging in', error);
    }
  };
  return (
    <div className="flex w-screen min-h-screen justify-center items-center">
      <form
        action=""
        className="border-2 rounded-md p-5 flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center my-5">Admin Login</h1>
        <label htmlFor="username" className="label">
          <span className="label-text">Username</span>
        </label>
        <input
          {...register('username', {
            required: 'Username is a required value',
          })}
          type="text"
          id="username"
          className="input input-bordered"
        />

        <label htmlFor="password" className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          {...register('password', {
            required: 'Password is a required value',
          })}
          type="password"
          id="password"
          className="input input-bordered"
        />

        <input type="submit" value="Login" className="btn btn-primary my-3" />
      </form>
    </div>
  );
};

export default LoginPage;
