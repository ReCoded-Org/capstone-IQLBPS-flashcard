/* eslint-disable react/button-has-type */
import React from 'react'
import { STUDENT_FEEDBACK } from '../../assets/feature/Features'

const UserFeedback = () => {
  return (
    
<section className="relative flex ">
    <div className="min-h-screen bg-white dark:bg-gray-900 md:w-3/4" />
    <div className="min-h-screen bg-blue-500 md:w-2/5" />
    <div className="flex flex-col justify-center w-full min-h-screen px-4 py-10 md:absolute ">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl xl:text-5xl dark:text-white">
            What our <span className="text-blue-500">Students</span> <br/> are saying
        </h1>

        <div className="grid w-full grid-cols-1 gap-8 mt-8 2xl:grid-cols-4 lg:mt-16 md:grid-cols-2 lg:grid-cols-3">
            
        { STUDENT_FEEDBACK.map((feedback) => (

         <div className="w-full p-8 bg-white rounded-md shadow-lg dark:bg-gray-800">
                <p className="leading-loose text-gray-500 dark:text-gray-400">

 {feedback.description}
                </p>

                <div className="flex items-center mt-6 -mx-2">
                    <img className="object-cover mx-2 rounded-full w-14 h-14" src={feedback.userimage} alt=""/>

                    <div className="mx-2">
                        <h1 className="font-semibold text-gray-800 dark:text-white">{feedback.username}</h1>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{feedback.userrole}</span>
                    </div>
                </div>
            </div>
            ))}
            

          
        </div>

   
    </div>
</section>

  )
}

export default UserFeedback