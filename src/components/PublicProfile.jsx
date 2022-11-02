import { useState } from "react"
import UserSets from "./ProfileUserSets"

export default function PublicProfile(){
    const myPlaceHolderImage = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
    const myPlaceHolderUser = 'Sara Khalil'
    const placerHolderData = [
        {
            name:'Bonnie Green',
            job: 'CEO & Web Developer',
            about: 'Bonnie drives the technical strategy of the flowbite platform and brand.',
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" 
        },
        {
            name: 'Jese Leos',
            job: 'CTO',
            about: 'Jese drives the technical strategy of the flowbite platform and brand.',
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
            },
            
            {
                name: 'Michael Gough',
                job: 'Senior Front-end Developer',
                about: 'Michael drives the technical strategy of the flowbite platform and brand.',
                image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            },
            
            {
                name: 'Lana Byrd',
                job: 'Marketing & Sale',
                about: 'Lana drives the technical strategy of the flowbite platform and brand.',
                image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
            }
    ]

    const [popUpState,setPopUpState] = useState('hidden')

    function handlePopUp()
    {
        if (popUpState)
        {
            setPopUpState(null)
        }
        else 
        {
            setPopUpState('hidden')
        }
    }

    return(
        <section >
            <PopUp popUpState={popUpState} handlePopUp={()=>handlePopUp()} userName={myPlaceHolderUser} myImage={myPlaceHolderImage}/>

            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
                <div className="text-center text-gray-500 dark:text-gray-400">
                    <img className="my-4 border-4 border-primary-50 mx-auto mb-4 w-50 h-auto rounded-lg"
                    src={myPlaceHolderImage} 
                    alt={`${myPlaceHolderUser}Avatar`}/>
                    <div className="mb-4 mt-2 flex gap-2 justify-center mx-auto max-w-screen-xl text-center">
                        <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {myPlaceHolderUser}
                        </h3>
                    </div>
                    <div className="flex justify-center m-5">
                        <button id="defaultModalButton" 
                            data-modal-toggle="defaultModal"
                            className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" 
                            type="button"
                            onClick={handlePopUp}
                            >
                        Edit Profile
                        </button>
                        </div>
                        
                </div>
            </div>

            <br/>

            <div className="mx-auto max-w-screen-xl text-left ">
                <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                {myPlaceHolderUser} sets
                </h2>
            </div> 

            <hr className="mx-auto max-w-screen-xl"/>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-4">
                {
                    placerHolderData.map((item)=> ( 
                        <UserSets 
                        name={item.name} 
                        job= {item.job} 
                        about={item.about} 
                        image={item.image}/>
                        )
                        )
                }
                </div>  
            </div>
     </section>
     

    )
}


function PopUp({popUpState,userName,myImage,handlePopUp}){

    return(
        <section>
            <div id="defaultModal" tabIndex="-1" aria-hidden="true" className={ `${popUpState} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full`}>
                <div className="relative p-4 w-full max-w-lg h-full md:h-auto mx-auto">
                    <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Change Info
                            </h3>
                            <button type="button" onClick={handlePopUp} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            </div>
                        <form action=" ">
    
                            <div className="grid">
                                <img 
                                className="my-4 border-4 border-primary-50 mx-auto mb-4 h-auto rounded-lg"
                                src={myImage} 
                                alt={`${userName}Avatar`}
                                />
                                
                                <div className="grid sm:grid-cols-2   pl-2">
                                    <div className="my-auto">
                                    <button 
                                    type="button" 
                                    className=" text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"/></svg>
                                    Upload a  Photo
                                    </button>
                                    </div>
    
                                    <label htmlFor="name" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">
                                    post Image URL
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={userName} required=""/>
                                    </label>
    
                                </div>
    
                            </div>
    
                            <div className="grid gap-4 mb-4">
                                <div>
                                    <label htmlFor="name" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Change Username
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={userName} required=""/>
                                    </label>
                                </div>
                            </div>
                            <div className="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                                <button id="submit-button" type="submit" className="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Confirm Changes</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
            )
    }