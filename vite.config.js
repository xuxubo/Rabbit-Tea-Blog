import { defineConfig, rollupVersion } from 'vite'
import rabbitTEA from 'rabbit-tea-vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        rabbitTEA(),
        tailwindcss()
    ],
    server:{
        proxy:{
            "/raw" :{
                target:" https://raw.gitcode.com/weixin_41992365/MoonBitBlog",
                changeOrigin:true,
            },
        },
    },

})