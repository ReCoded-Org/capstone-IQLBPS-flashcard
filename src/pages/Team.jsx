import React from 'react';
import TeamMember from '../components/TeamMember';
import data from '../services/TeamInfo.json';

const Team = () => {
  //   const userInfo = [
  //     {
  //         ID : 1,
  //         name: "Bonnie Green",
  //         position: "Front-end Developer",
  //         image: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
  //         social: {
  //           github: " https://github.com/Sarakhalil0",
  //           twitter: " https://my.learn.co/courses/518",
  //       }
  //     },
  //     {
  //         ID : 2,
  //         name: "Bonnie Green",
  //         position: "Front-end Developer",
  //         image: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
  //         social: {
  //           github: " https://github.com/Sarakhalil0",
  //           twitter: " https://my.learn.co/courses/518",
  //       }
  //     },
  //     {

  //        ID : 3,
  //        name: "Bonnie Green" ,
  //        position: "Front-end Developer",
  //        image: "https://flowbite.com/docs/images/people/profile-picture-3.jpg" ,
  //        social: {
  //         github: " https://github.com/Sarakhalil0",
  //         twitter: " https://my.learn.co/courses/518",
  //     }
  //     },
  //     {
  //         ID : 4,
  //         name:"Bonnie Green",
  //         position:"Front-end Developer",
  //         image: "https://flowbite.com/docs/images/people/profile-picture-3.jpg" ,
  //          social: {
  //         github: " https://github.com/Sarakhalil0",
  //         twitter: " https://my.learn.co/courses/518",
  //     }
  //       }
  // ]

  //

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our team
          </h2>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => {
            console.log(`ID`, item.ID, 'Item:', item);
            return (
              <TeamMember
                key={item.ID}
                name={item.name}
                image={item.image}
                position={item.position}
                social={item.social}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
