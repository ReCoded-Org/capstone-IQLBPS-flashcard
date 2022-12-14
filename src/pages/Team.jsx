import { useTranslation } from 'react-i18next';
import React from 'react';
import TeamMember from '../components/TeamMember';
import { teamInfo } from '../services/TeamInfo';

const Team = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {t("Our team")}
          </h2>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamInfo.map((item) => {
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
