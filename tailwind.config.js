/** {import('tailwindcss').config} */

export default{
      content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
    theme:{
        extend:{
            colors:{
                main:'#7a6ad8'
            },
            
            shadows:{
            boxShadow:' 0px 0px 10px rgba(0,0,0,0.15)!important'
            },
        }
    }
}
