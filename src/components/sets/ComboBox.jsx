import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const ComboBox = ({ data, register, setCategory, newSet, errors, setId } ) => {
  const [selected, setSelected] = useState([data[0]]);
  const [query, setQuery] = useState('');

  const filteredData =
    query === ''
      ?  data
      :  data.filter((el) =>
          el.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );
      const onChange =(set)=>{
        setId(set.id);
        setSelected(set);
      }
  return (
    <div className="w-full">
      <Combobox value={selected} onChange={onChange}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="bg-gray-50 w-full border border-gray-300 py-2 pl-3 pr-10 text-sm leading-5 focus:ring-0"
              displayValue={(el) => el.name}
              placeholder = "Search for set"
              {...register('categories', {
                required: 'Please enter category',
              })}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredData.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredData.map((el) => (
                  <Combobox.Option
                    key={el.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active
                          ? 'bg-primary-600 text-white'
                          : 'text-primary-900'
                      }`
                    }
                    value={el}
                    onClick={(e) =>
                       newSet &&  setCategory(e.target.outerText)
                    }
                  >
                    {({ sel, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            sel ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {el.name}
                        </span>
                        {active ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-primary-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      { errors.categories && (
        <div className="text-sm font-medium text-red-500">
          { errors.categories.message}
        </div>
      )}
    </div>
  );
};
export default ComboBox;
