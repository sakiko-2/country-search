import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Dropdown = ({options, handleSelect, region}) => (
  <Menu as="div" className="relative z-40 inline-block w-60">
    <Menu.Button className="flex w-60 items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-[color:var(--mostly-black-blue)] shadow-sm hover:bg-gray-50 dark:border-[color:var(--very-dark-blue)] dark:bg-[color:var(--dark-blue)] dark:text-white dark:hover:bg-slate-700 dark:focus:border-indigo-500 dark:focus:outline-0">
      <span className="grow-1 flex">
        Filter by Region
        {region && `:  ${region}`}
      </span>
      <ChevronDownIcon
        className="-mr-1 ml-2 flex h-5 w-5 grow-0"
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
      <Menu.Items className="absolute right-0 mt-1 w-60 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:border-[color:var(--mostly-black-blue)] dark:bg-[color:var(--dark-blue)] dark:shadow-black">
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
