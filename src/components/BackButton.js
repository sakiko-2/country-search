import {useNavigate} from 'react-router-dom'
import {ArrowLeftIcon} from '@heroicons/react/solid'

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center rounded-md border drop-shadow-lg px-9 py-1.5 bg-white"
    >
      <ArrowLeftIcon className="mr-1.5 -ml-1.5 h-5 w-5" />
      Back
    </button>
  )
}

export default BackButton
