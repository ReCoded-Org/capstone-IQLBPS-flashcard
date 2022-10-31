import Comment from "./Comment"
import CommentPost from "./CommentPost"


export default function CommentsSection( ){

    const MyPlaceholderData = [
        {   
            ID : 1,
            name: "Michael Gough",
            date: "Feb. 8, 2022",
            text: "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
            userImg: "https://flowbite.com/docs/images/people/profile-picture-2.jpg"
        },
        {
            ID : 2,
            name: "Bonnie Green",
            date: "Mar. 12, 2022",
            text: "The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.",
            userImg: "https://flowbite.com/docs/images/people/profile-picture-3.jpg"
        },
        {
            ID : 3,
            name: 'Helene Engels',
            date: "Jun. 23, 2022",
            text: "Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.",
            userImg: "https://flowbite.com/docs/images/people/profile-picture-4.jpg"
        },
        {
            ID : 4,
            name: 'Lorem ipsum',
            date: "Dec. 15, 1002BC",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis ad eius totam ex odio ipsum deleniti non sint earum, incidunt cumque provident repellat molestias laboriosam facilis? Fugit, rem natus.",
            userImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png?20220226140232"
        } 
    ]

    return(
<section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
    <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Comments</h2>
        </div>

        {
            MyPlaceholderData.map((item)=>{
                return(
                    <Comment 
                    key={item.ID}
                    userName={item.name} 
                    date={item.date}
                    commentText={item.text}
                    userImg={item.userImg}/>
                    )
                })
        }
        
        <CommentPost/>
            
    </div>
</section>
    )
}

