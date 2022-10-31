import React, {useState} from 'react';

export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit(e){
    e.preventDefault();
  }
    return(
      <div className="grid h-screen place-items-center">
      <div className="xl:w-1/3 lg:w-2/5 md:w-3/5 sm:1/2 w-full">
        <form onSubmit={handleFormSubmit}>
        <h1 className="text-2xl font-medium pb-8">Log in to Your Account</h1>
        <div className="mb-6 m-8 justify-center items-center m-auto">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 m-auto">Your email
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-96 m-auto" placeholder="Email" required="" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </label>
          </div>
        <div className="mb-6 m-8 justify-center items-center m-auto">
          <label htmlFor='password'className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-96 m-auto" placeholder="Password" required="" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </label>
          </div>
        <button type="submit" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-48 m-auto">Log in</button>
      </form>
      <a className="text-black text-opacity-40 hover:underline mt-2 mb-4 w-full sm:mb-3 flex flex-col space-y-4" href="/register"> Don`t Have an Account ? Sign up</a>
      <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
  <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"/><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
  Sign in with Google
</button>
      </div>
      </div>
    );
}