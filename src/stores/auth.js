import { ref } from 'vue'
import { auth } from '@/firebase'
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged
} from 'firebase/auth'

const user = ref(null)

onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser
})

export function useAuth() {
    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password)

    const register = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password)

    const logout = () => signOut(auth)

    const googleLogin = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    return { user, login, register, logout, googleLogin }
}