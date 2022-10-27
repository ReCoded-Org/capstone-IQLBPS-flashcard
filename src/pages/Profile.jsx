import React from 'react'

const Profile = () => {
  return ( 
    <section>
    <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
    <div className="text-center text-gray-500 dark:text-gray-400">
        <img className="mx-auto mb-4 w-36 h-36 rounded-full"
         src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" 
         alt="Bonnie Avatar"/>
        <h3 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           sara khalil 
        </h3>   
    </div>
     </div>
     <h3 className='ml-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
      sara khalil sets
     </h3>
     <br/>
     <hr/>

     { /* <div> cards should be here</div> */}
     </section>

  )
}

export default Profile
