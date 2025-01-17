import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* add icons to the library */
library.add(faCircleChevronRight, faCircleChevronLeft)


const app = createApp(App)
const vuetify = createVuetify()
/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)

app.config.productionTip = false

app.use(vuetify,axios,VueAxios)

app.mount('#app')


