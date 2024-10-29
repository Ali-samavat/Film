/**
 * @type {import('vite').UserConfig}
 */
const config = {
    build:{
        rollupOptions:{
            input:{
                html:"./index.html",
                js:"./script/script.js",
               about:"./script/main.js",
            
            }
        }
    }
  }
  
  export default config