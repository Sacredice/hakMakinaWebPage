
interface FormSubmitIndicatorProps {
  isLoading: boolean;
  isError: boolean
  isSuccess: boolean
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>
}

function FormSubmitIndicator({ isLoading, isSuccess, isError, setIsSubmit }: FormSubmitIndicatorProps) {
  return (
    <div className='absolute grid top-[50%] left-[50%] -translate-x-1/2 -translate-y-[58%] z-10 w-[320px] h-[200px] bg-gray-300 sm:w-[500px] sm:h-[350px] text-black text-[18px] sm:text-[24px] place-content-center rounded-[8px]'>
      {isLoading &&
        <div className='pb-[18px] sm:pb-[28px]'>
          <div className="w-12 h-12 border-[5px] border-blue-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className='text-center mt-2 sm:mt-4'>Yükleniyor...</p>
        </div>
      }
      {!isLoading && !isSuccess && isError &&
        <div className="pb-[18px] sm:pb-[28px]">
          <div className="bg-error bg-cover bg-center bg-contain w-[48px] h-[48px] mx-auto"></div>
          <p className="text-center text-red-700 mt-2 sm:mt-4">Bir hata oluştu daha sonra tekrar deneyin!</p>
        </div>
      }
      {!isLoading && !isError && isSuccess &&
        <div className="pb-[18px] sm:pb-[28px]">
          <div className="bg-success bg-cover bg-center bg-contain w-[48px] h-[48px] mx-auto"></div>
          <p className="text-center text-green-700 mt-2 sm:mt-4">Formunuz kaydedildi.</p>
        </div>
      }
      <div className="flex justify-center sm:mt-2">
        <button onClick={() => setIsSubmit(false)} className="w-[150px] sm:w-[200px] center mx-3 px-1 sm:px-2 py-1 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Ok
        </button>
      </div>
    </div >
  )
}

export default FormSubmitIndicator