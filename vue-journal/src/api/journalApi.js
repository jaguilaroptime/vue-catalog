
import axios from 'axios'


const journalApi = axios.create({
    baseURL: 'https://vue-journal-99451-default-rtdb.firebaseio.com'
})


export default journalApi


