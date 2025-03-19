"use client";

export default function registerPage(){
  return (
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <a className="block text-white" href="#">
                <span className="sr-only">Home</span>
                <svg
                    className="h-8 sm:h-10"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                </svg>
              </a>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Smart Logistic
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.
              </p>
            </div>
          </section>

          <main
              className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <a
                    className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                    href="#"
                >
                  <span className="sr-only">Home</span>
                  <svg
                      className="h-8 sm:h-10"
                      viewBox="0 0 28 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                  </svg>
                </a>
              </div>
              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Bienvenido a Smart Logistic
              </h1>
              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                quibusdam aperiam voluptatum.
              </p>
              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                    Nombre
                  </label>

                  <input
                      type="text"
                      id="FirstName"
                      name="first_name"
                      className="border h-8 mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-xs"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                    Apellido
                  </label>

                  <input
                      type="text"
                      id="LastName"
                      name="last_name"
                      className="border h-8 mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-xs"
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                  <input
                      type="email"
                      id="Email"
                      name="email"
                      className="border mt-1 h-8 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-xs"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Contraseña </label>

                  <input
                      type="password"
                      id="Password"
                      name="password"
                      className="border h-8 mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-xs"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                    Confirmar contraseña
                  </label>

                  <input
                      type="password"
                      id="PasswordConfirmation"
                      name="password_confirmation"
                      className="border h-8 mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-xs"
                  />
                </div>
                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                    and
                    <a href="#" className="text-gray-700 underline">privacy policy</a>.
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                      className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden"
                  >
                    Crear cuenta
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    ¿Ya tienes una cuenta?
                    <a href="#" className="text-blue-500 "> Inicia sesión</a>.
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
  );
}