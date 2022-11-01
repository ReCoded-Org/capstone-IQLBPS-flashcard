import icon from '../../assets/alert/alertIcon.svg';


export default function Alert({ type, title }) {
    let color = ''
  switch (type) {
    case 'error':
      color='red';
      break;
    case 'info':
      color='blue';
      break;
    case 'success':
      color='green';
      break;
    default:
      break;
  }

  return (
    <div className='w-full flex absolute mt-12 justify-center '>
    <div
      className={`opacity-95 flex p-4 mb-4 text-sm text-${color}-700 bg-${color}-100 rounded-lg dark:bg-${color}-200 dark:text-${color}-800 w-1/3`}
      role="alert"
    >
      <img className="flex-shrink-0 inline w-5 h-5 mr-3" src={icon} alt="" />
      <span className="sr-only">{type}</span>
      <div>
        <span className="font-medium">{type} alert! </span>
        {title}
      </div>
    </div>
    </div>
  );
}
