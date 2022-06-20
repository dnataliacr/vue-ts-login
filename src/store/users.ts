import { computed, reactive } from 'vue'
import * as Request from '@/request'

const state = reactive({
    name: '',
    username: '',
    error: ''
})

const getters = reactive({
    isLoggedIn: computed(() => state.username !== '')
})

const actions = {
    async login(username: string, password: string) {
        const user = await Request.login(username, password)
        if (user == null) {
            state.error = 'Could not find user.'
            return false
        }
        console.log(user, 'user')
        state.username = username
        state.name = user.name
        state.error = ''
        return true
    },
    async logout() {
        state.name = ''
        state.username = ''
    }
}
export default { state, getters, ...actions }