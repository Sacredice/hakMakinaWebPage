
interface FormSubmitIndicatorProps {
  isLoading: boolean;
  isError: boolean
  isSuccess: boolean
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>
}

function FormSubmitIndicator({ isLoading, isSuccess, isError, setIsSubmit }: FormSubmitIndicatorProps) {
  return (
    <div className='absolute grid top-[50%] left-[50%] -translate-x-1/2 -translate-y-[58%] z-10 w-[320px] h-[200px] bg-gray-300 sm:w-[500px] sm:h-[350px] text-black sm:text-[24px] place-content-center rounded-[8px]'>
      {isLoading &&
        <div className='pb-[28px]'>
          <p className='text-center'>Yükleniyor...</p>
          <div className="w-12 h-12 border-[5px] border-blue-400 mt-4 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      }
      {!isLoading && !isSuccess && isError &&
        <div className="pb-[28px]">
          <p className="text-[22px] text-red-700 mb-[16px]">Bir hata oluştu daha sonra tekrar deneyin!</p>
          <div className="bg-error bg-cover bg-center bg-contain w-[48px] h-[48px] mx-auto"></div>
        </div>
      }
      {!isLoading && !isError && isSuccess &&
        <div className="pb-[28px]">
          <p className="text-green-700 mb-[16px]">Formunuz kaydedildi.</p>
          <div className="bg-success bg-cover bg-center bg-contain w-[48px] h-[48px] mx-auto"></div>
        </div>
      }
      <div className="flex justify-center mt-2">
        <button onClick={() => setIsSubmit(false)} className="w-[150px] sm:w-[200px] center mx-3 px-1 sm:px-2 py-1 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Ok
        </button>
      </div>
    </div >
  )
}

export default FormSubmitIndicator