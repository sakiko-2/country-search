import {useNavigate} from 'react-router-dom'
import {ArrowLeftIcon} from '@heroicons/react/solid'

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center rounded-md border drop-shadow-lg px-9 py-1.5 bg-white dark:bg-[color:var(--dark-blue)] dark:border-[color:var(--mostly-black-blue)] dark:drop-shadow-[0_2px_2px_rgba(0,0,0,1)] dark:focus:outline-0 dark:focus:border-indigo-500"
    >
      <ArrowLeftIcon className="mr-1.5 -ml-1.5 h-5 w-5" />
      Back
    </button>
  )
}

export default BackButton
