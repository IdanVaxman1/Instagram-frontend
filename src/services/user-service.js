import {storageService} from './async-storage.service'
import { userData } from './instush'


const STORAGE_USER_KEY = 'userDB'

export const userService = {
    query,
    getById
}

query()
function query() {
    let user = localStorage.getItem(STORAGE_USER_KEY)
    if(!user) localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(userData()))
    return storageService.query(STORAGE_USER_KEY)

}

async function getById(userId) {
      return await storageService.getUser(STORAGE_USER_KEY, userId)
    // console.log(STORAGE_USER_KEY ,userId );
}