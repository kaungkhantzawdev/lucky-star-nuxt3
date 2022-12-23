// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false, // Disable Server Side rendering
    app: {
        head: {
          charset: 'utf-8',
          viewport: 'width=device-width, initial-scale=1',
          title: 'Lucky Star',
          meta: [
            // <meta name="description" content="My amazing site">
            { name: 'description', content: 'My amazing site.' }
          ],
          link: [
            { rel: 'icon', href: '/vendor/images/logo-icon.png' },
            { rel: 'stylesheet', href: '/vendor/extra-libs/c3/c3.min.css'},
            { rel: 'stylesheet', href: '/vendor/libs/chartist/dist/chartist.min.css'},
            { rel: 'stylesheet', href: '/vendor/extra-libs/jvector/jquery-jvectormap-2.0.2.css'},
            { rel: 'stylesheet', href: '/dist/css/style.min.css'},
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0'}
          ],
          // script: [
          //   { src: '/assets/libs/jquery/dist/jquery.min.js' },
          //   { src: '/assets/libs/popper.js/dist/umd/popper.min.js' },
          //   { src: '/assets/libs/bootstrap/dist/js/bootstrap.min.js' },
          //   { src: '/dist/js/app-style-switcher.js' },
          //   { src: '/dist/js/feather.min.js' },
          //   { src: '/assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js' },
          //   { src: '/dist/js/sidebarmenu.js' },
            //custom js
          //   { src: '/dist/js/custom.min.js' },

          // ],
        }
      },

  
})

