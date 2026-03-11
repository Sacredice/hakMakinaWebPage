// import { useState } from "react";
// import { useForm } from "react-hook-form";

function ContactForm() {

  // const [isLoading, setIsLoading] = useState(false)
  // const { register, formState: { errors }, handleSubmit } = useForm();

  // const onSubmit = async (d) => {

  //   const formData = {
  //     name: d.first-name,
  //     surname: d.last-name,
  //     email: d.email,
  //     phoneNumber: d.phoneNumber,
  //     message: d.message,

  //   };
  //   try {
  //     setIsLoading(true);
  //     const response = await axios.post("/register", formData);
  //     console.log(response.data);
  //     navigate("/login");
  //   } catch (err) {
  //     console.log(`Error ${err.message}`);
  //     setErrSignUp(err);
  //     console.log(err);
  //   } finally {
  //     setIsLoading(false);
  //   }

  // };

  return (
    <form className='relative h-[calc(100vh-48px-36px)] overflow-hidden bg-blue-950 place-content-center '>
      <div className="border-b border-white/10 pb-12 max-w-[800px] mx-auto px-4">
        <h2 className="text-base/7 font-semibold text-white">Personal Information</h2>
        <p className="mt-1 text-sm/6 text-gray-400">Use a permanent address where you can receive mail.</p>

        <div className="mt-10 block sm:grid gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="block sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm/6 font-medium text-white">
              Ad
            </label>
            <div className="mt-2">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                required
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="block sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm/6 font-medium text-white">
              Soyadı
            </label>
            <div className="mt-2">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                required
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="email" className="block text-sm/6 font-medium text-white">
              Email adresi
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="col-span-4">
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                Adres
              </label>
              <div className="mt-2">
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="col-span-full">
            <label htmlFor="message" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
              Açıklama
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                defaultValue={''}
              />
            </div>
            <p className="mt-3 text-sm/6 text-gray-600 dark:text-gray-400">Write a few sentences about yourself.</p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6 max-w-[800px] px-4 mx-auto">
        <button type="button" className="text-sm/6 font-semibold text-white">
          İptal
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Kaydet
        </button>
      </div>
    </form>
  )
}

export default ContactForm