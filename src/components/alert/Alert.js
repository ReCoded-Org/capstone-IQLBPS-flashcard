import icon from '../../assets/alert/alertIcon.svg';

function AlertInfo(title) {
  return (
    <div
      className="flex p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800 w-1/3 ml-3"
      role="alert"
    >
      <img className="flex-shrink-0 inline w-5 h-5 mr-3" src={icon} alt="" />
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">Info alert! </span>
        {title}
      </div>
    </div>
  );
}

function AlertError(title) {
  return (
    <div
      className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 w-1/3 ml-3"
      role="alert"
    >
      <img className="flex-shrink-0 inline w-5 h-5 mr-3" src={icon} alt="" />
      <span className="sr-only">Error</span>
      <div>
        <span className="font-medium">Error alert! </span>
        {title}
      </div>
    </div>
  );
}

function AlertSuccess(title) {
  return (
    <div
      className="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800 w-1/3 ml-3"
      role="alert"
    >
      <img className="flex-shrink-0 inline w-5 h-5 mr-3" src={icon} alt="" />
      <span className="sr-only">Success</span>
      <div>
        <span className="font-medium">Success alert! </span>
        {title}
      </div>
    </div>
  );
}

export default function Alert({ alert }) {
  switch (alert.type) {
    case 'error':
      return AlertError(alert.title);
    case 'info':
      return AlertInfo(alert.title);
    case 'success':
      return AlertSuccess(alert.title);
    default:
      return AlertInfo(alert.title);
  }
}
