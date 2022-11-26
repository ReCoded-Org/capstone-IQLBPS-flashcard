import { useTranslation } from 'react-i18next';

function FeatureCard({ feature }) {
  const { t } = useTranslation();
  return (
    <section className="bg-amber-100 shadow-lg mx-auto mb-20 z-0 hover:z-10 max-w-6xl block rounded-lg h-1/6">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-orange-600">
            {t(feature.name)}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-black">
            {t(feature.description)}
          </p>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
          <img src={feature.image} alt="test" />
        </div>
      </div>
    </section>
  );
}

export default FeatureCard;
