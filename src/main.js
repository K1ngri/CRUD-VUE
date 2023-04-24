import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBagShopping, faHome, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faHome, faBagShopping, faPenToSquare, faTrashCan)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
