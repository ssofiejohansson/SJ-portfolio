import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import './style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'

library.add(faLinkedinIn, faGithub, faEnvelope, faFileLines)
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.mount('#app')
