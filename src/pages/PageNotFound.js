import image from '../assets/Error404/404page.png';

function PageNotFound() {
  return (
      <img
        className="mx-auto max-w-4xl md:w-2xl sm:w-full h-auto mt-8"
        src={image}
        alt="description"
      />
  );
}

export default PageNotFound;
