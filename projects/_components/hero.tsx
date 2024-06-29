

export default function L() {
  return (
    <div>
      <div className="relative items-center w-full gap-12 p-8 mx-auto lg:inline-flex mt-24 max-w-7xl rounded-3xl">
    <div className="max-w-xl mx-auto text-center">
      <div>
        <span className="inline-flex items-center">
          <span className="px-6 py-2 text-base font-bold text-[#fff] uppercase rounded-lg bg-white/10">Backgrounds</span>
        </span>
        <p className="mt-8 text-5xl font-extrabold tracking-tight text-[#fff]">
          Find backgrounds for your aplicattions in next.
        </p>
        <p className="max-w-xl mt-4 text-lg lg:text-xl text-[#dbdbdb]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Impedit dolore sapiente nam dolorum. 
        </p>
      </div>
      <div className="flex flex-col justify-center gap-3 mt-10 sm:flex-row">
        <form className="w-full lg:w-auto bg-black/5 border-2 border-white/40 lg:mx-auto p-1.5 rounded-2xl">
          <div className="w-full lg:flex lg:items-center">
            <div className="shrink">
              <input aria-label="Email address" className="block w-full p-3 text-[#fff] bg-transparent border border-transparent 
              appearance-none focus:border-slate-500 focus:outline-none focus:ring-slate-500 placeholder:text-slate-200 
              rounded-xl sm:text-sm" placeholder="Email address" type="email" />
            </div>
            
            <button className="w-full lg:w-auto 0 active:bg-slate-600 active:text-white/80 before:transition-colors bg-white 
            flex-none font-medium hover:bg-indigo-900 hover:text-white inline-flex justify-center lg:ml-4 outline-2 
            outline-offset-2 px-6 py-1.5 relative rounded-xl text-indigo-500" type="submit">
              <span>Join us!</span>
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>


    <div className="relative items-center w-full py-12 pb-12 mx-auto  max-w-7xl">
      <svg className="absolute -mt-24 blur-3xl" fill="none" viewBox="0 0 400 400" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_10_20)">
          <g filter="url(#filter0_f_10_20)">
            <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#000"></path>
            <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#000"></path>

          </g>
        </g>
        <defs>
        <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="720.666" id="filter0_f_10_20" width="720.666" x="-160.333" y="-160.333">
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
            <feGaussianBlur result="effect1_foregroundBlur_10_20" stdDeviation="80.1666"></feGaussianBlur>

            <feGaussianBlur result="effect1_foregroundBlur_10_20" stdDeviation="80.1666"></feGaussianBlur>

            <feGaussianBlur result="effect1_foregroundBlur_10_20" stdDeviation="80.1666"></feGaussianBlur>

            <feGaussianBlur result="effect1_foregroundBlur_10_20" stdDeviation="80.1666"></feGaussianBlur>
          </filter>
        </defs>
      </svg>
      <img alt="" className="relative object-cover w-full rounded-3xl shadow-2xl lg:rounded-4xl" src="https://brightlight.lexingtonthemes.com/assets/dashboard.svg" />
      {/*
      white:
      https://brightlight.lexingtonthemes.com/assets/dashboard.svg

      black: 
      https://brightlight.lexingtonthemes.com/assets/dashboardDouble.svg
      */}
  </div>
    </div>
  )
}