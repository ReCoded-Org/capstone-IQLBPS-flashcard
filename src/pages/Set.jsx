import React from 'react'

export default function Set({name, question, answer}) {
  return (
    <div>
    <h2 className="text-2xl font-medium pb-8 text-center pt-6">
      {name}
    </h2>
    <div className="grid place-items-center">
    <div className="flex">
  <div className="cardContainer w-full h-96">
  <div className="front front-flip ">
  <div className="container h-96 p-4 flex flex-col gap-5 shadow-md rounded-xl text-center  overflow-y-auto">
  <div>
  <div contentEditable="false" translate="no" className="ProseMirror">
  <p>{question}</p>
  </div>
  </div>
  <div className="flex items-center justify-center flex-wrap gap-1">
  <div className="flex justify-center items-center">
  <div className="flex items-center justify-center gap-1 border border-black rounded-lg overflow-hidden ">
  <button className="group hover:bg-primary active:bg-primary p-1 transition-all duration-150" type="button">
  <div>
  <button type="button">
  <svg width="18" height="18" viewBox="0 0 28 28" fill="none" className="fill-current text-black group-hover:text-white" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M1.16675 14.0001C1.16675 21.0877 6.91243 26.8334 14.0001 26.8334C21.0877 26.8334 26.8334 21.0877 26.8334 14.0001C26.8334 6.91243 21.0877 1.16675 14.0001 1.16675C6.91243 1.16675 1.16675 6.91243 1.16675 14.0001ZM11.1871 7.00008C11.3693 7.00008 11.544 7.06845 11.6729 7.19013L19.6322 13.5413C19.9005 13.7947 19.9005 14.2055 19.6322 14.4589L11.6729 20.81C11.4046 21.0634 10.9696 21.0634 10.7013 20.81C10.5725 20.6883 10.5001 20.5233 10.5001 20.3512V7.64896C10.5001 7.29059 10.8077 7.00008 11.1871 7.00008Z"/>
  </svg>
  </button>
  </div>
  </button>
  </div>
  </div>
  </div>
  </div>
  <div className="back back-flip">
  <div className="container h-96 p-4 flex flex-col gap-5 shadow-md rounded-xl text-center  overflow-y-auto">
  <div>
  <div contentEditable="false" translate="no" className="ProseMirror">
  <p>{answer}</p>
  </div>
  </div>
  <div className="flex items-center justify-center flex-wrap gap-1 ">
  <img src="https://firebasestorage.googleapis.com/v0/b/educards-23b77.appspot.com/o/react%20back.jpeg?alt=media&amp;token=977be4cf-39d4-4c60-9b04-3921ec526038" alt="" className="w-48 h-48 object-contain border border-gray rounded-xl p-2"/>
  </div>
  <div className="flex justify-center items-center">
  <div className="flex items-center justify-center gap-1 border border-black rounded-lg overflow-hidden ">
  <button className="group hover:bg-primary active:bg-primary p-1 transition-all duration-150" type="button">
  <div>
  <button type='button'>
  <svg width="18" height="18" viewBox="0 0 28 28" fill="none" className="fill-current text-black group-hover:text-white" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M1.16675 14.0001C1.16675 21.0877 6.91243 26.8334 14.0001 26.8334C21.0877 26.8334 26.8334 21.0877 26.8334 14.0001C26.8334 6.91243 21.0877 1.16675 14.0001 1.16675C6.91243 1.16675 1.16675 6.91243 1.16675 14.0001ZM11.1871 7.00008C11.3693 7.00008 11.544 7.06845 11.6729 7.19013L19.6322 13.5413C19.9005 13.7947 19.9005 14.2055 19.6322 14.4589L11.6729 20.81C11.4046 21.0634 10.9696 21.0634 10.7013 20.81C10.5725 20.6883 10.5001 20.5233 10.5001 20.3512V7.64896C10.5001 7.29059 10.8077 7.00008 11.1871 7.00008Z"/>
  </svg>
  </button>
  </div>
  </button>
  </div>
  </div>
  </div>
  </div>
  </div>
  <div className='flex justify-center p-6'>
  <button type="button" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
  Previous
</button>
<button type="button" className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
  Next
</button>
</div>
<div className="flex justify-end p-3">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

</div>
  </div>
    </div>
</div>
</div>
  )
}