export default function UserSets({name,job,about,image}){
    return(
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex flex-col dark:bg-gray-800 dark:border-gray-700">
              <a href=" ">
                  <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" 
                  src={image}
                  alt={`${name} Avatar`}
                  />
              </a>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href=" ">{name}</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">{job}</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{about}</p>
              </div>
          </div> 

    )
}