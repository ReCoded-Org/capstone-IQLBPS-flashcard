import Card from "./Card"

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
            image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.ng"
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
            },
            {
                name: 'Lana Byrd',
                job: 'Marketing & Sale',
                about: 'Lana drives the technical strategy of the flowbite platform and brand.',
                image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
            }
    ]

    return(
        <section className='dark:bg-gray-900'>

            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 lg:grid-cols-1 ">
                <div className="text-center text-gray-500 dark:text-gray-400">
                    <img className="my-4 border-4 border-primary-50 mx-auto mb-4 w-50 h-auto rounded-full"
                    src={myPlaceHolderImage} 
                    alt={`${myPlaceHolderUser}Avatar`}/>
                    <div className="mb-4 mt-2 flex gap-2 justify-center mx-auto max-w-screen-xl text-center">
                        <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {myPlaceHolderUser}
                        </h3>
                    </div>
                        
                </div>
            </div>

            <br/>

            <div className=" max-w-screen-xl text-left mx-auto ">
                <h2 className="mb-4 mx-5 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                {myPlaceHolderUser} sets
                </h2>
                <hr className="mx-5 max-w-screen-xl"/>
            </div> 



            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="grid gap-8 mb-6 lg:mb-16 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2">
            {
                placerHolderData.map((item)=> ( 
                    <Card 
                    coverImage={item.image}
                    title={item.name} 
                    description={item.about} 
                    />
                    )
                    )
                }
                
            </div>
            </div>


     </section>
     

    )
}
