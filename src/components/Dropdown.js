import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Dropdown = ({options, handleSelect, region}) => (
  <Menu as="div" className="relative inline-block w-60 z-40">
    <Menu.Button className="flex justify-between items-center w-60 rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-sm font-medium text-[color:var(--mostly-black-blue)] hover:bg-gray-50 dark:bg-[color:var(--dark-blue)] dark:border-[color:var(--very-dark-blue)] dark:hover:bg-slate-700 dark:text-white dark:focus:border-indigo-500 dark:focus:outline-0">
      <span className="flex grow-1">
        Filter by Region
        {region && `:  ${region}`}
      </span>
      <ChevronDownIcon
        className="-mr-1 ml-2 h-5 w-5 flex grow-0"
        aria-hidden="true"
      />
    </Menu.Button>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="origin-top-right absolute right-0 mt-1 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-[color:var(--dark-blue)] dark:border-[color:var(--mostly-black-blue)] dark:shadow-black">
        <div className="py-1">
          {options.map((item, i) => (
            <Menu.Item onClick={() => handleSelect(item)} key={i}>
              {({active}) => (
                // eslint-disable-next-line
                <a
                  href="#"
                  className={classNames(
                    active
                      ? 'bg-gray-100 text-[color:var(--mostly-black-blue)] dark:bg-[color:var(--very-dark-blue)] dark:text-white'
                      : 'text-gray-700 dark:bg-[color:var(--dark-blue)] dark:text-white',
                    'block px-4 py-2 text-sm',
                  )}
                >
                  {item}
                </a>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
)

export default Dropdown
