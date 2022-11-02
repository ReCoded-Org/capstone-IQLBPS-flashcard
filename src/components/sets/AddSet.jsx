/* eslint-disable react/destructuring-assignment */
import { t } from 'i18next';
import { useForm } from 'react-hook-form';
import ComboBox from './ComboBox';

const categoriesData = [
  { id: 1, name: 'Math' },
  { id: 2, name: 'Algebra' },
  { id: 3, name: 'Geometry' },
  { id: 4, name: 'Chemisty' },
  { id: 5, name: 'Physics' },
  { id: 6, name: 'Biology' },
  { id: 7, name: 'History' },
];

const AddSet = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmitHandler = (data) => {
    props.handleFormVisibility();
    props.onAddingSet({
      id: Math.floor(Math.random() * 1000),
      name: data.name,
      image: data.image,
      description: data.description,
      categories: data.categories,
    });
  };

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <button
        type="button"
        className="text-white bg-primary-900 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btn-primary w-100 mb-3 float-right"
        onClick={() => {
          props.handleFormVisibility();
        }}
      >
        {t('CANCEL')}
      </button>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <h1 className="text-xl font-bold ml-2">{t('New Set')}</h1>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={t("Set's Name")}
              {...register('name', { required: t('Please enter you name') })}
            />
            {errors.name && (
              <div className="text-red-500">{errors.name.message}</div>
            )}
          </label>
        </div>
        <div className="mb-6">
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            <input
              type="file"
              id="image"
              accept=".jpeg,.png,.jpg"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register('image', { required: t('Please upload an image') })}
            />
            {errors.image && (
              <div className="text-red-500">{errors.image.message}</div>
            )}
          </label>
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            <input
              type="text"
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={t('Description')}
              {...register('description', {
                required: t('Please enter description'),
              })}
            />
            {errors.description && (
              <div className="text-red-500">{errors.description.message}</div>
            )}
          </label>
        </div>
        <div className="mb-6">
          <ComboBox data={categoriesData} register={register} errors={errors} />
        </div>
        <button
          type="submit"
          className="sm:ml-20 text-white bg-primary-900 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-9/12 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btn-primary w-100"
        >
          {t('Submit')}
        </button>
      </form>
    </div>
  );
};

export default AddSet;