function FeaturePoints({ features }) {
  return (
    <div className="bg-primary-200 shadow-lg py-12 mx-auto mb-20 z-0 hover:z-10 max-w-6xl block rounded-lg h-1/6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md">
                    <img src={feature.icon} alt="" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-primary-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-800">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default FeaturePoints;
