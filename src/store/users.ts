import { computed, reactive } from 'vue'
import * as Request from '@/request'

const state = reactive({
    name: '',
    username: '',
    error: ''
})

const getters = reactive({})

const actions = {}
export default { state, getters, ...actions }