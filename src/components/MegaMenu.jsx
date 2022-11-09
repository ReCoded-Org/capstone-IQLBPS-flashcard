import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const MenuColumn = ({ children, isLast }) => {
  return (
    <div
      className={
        isLast
          ? 'p-4 text-gray-900 dark:text-white'
          : 'p-4 pb-0 text-gray-900 md:pb-4 dark:text-white'
      }
    >
      <ul className="space-y-4">{children}</ul>
    </div>
  );
};

const MenuItem = ({ name, href }) => {
  return (
    <li>
      <Link
        to={href}
        className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
      >
        {name}
      </Link>
    </li>
  );
};

const MegaMenu = ({ list }) => {
  return (
    <div
      id="mega-menu-dropdown"
      className="grid absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700"
    >
      {list.map((group, index) => (
        <MenuColumn key={uuidv4()} isLast={list.length === index}>
          {group.map((item) => (
            <MenuItem key={item} name={item.name} href={item.href} />
          ))}
        </MenuColumn>
      ))}
    </div>
  );
};

export default MegaMenu;
