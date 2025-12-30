<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/stores/auth'

const email = ref('')
const password = ref('')
const { login, googleLogin } = useAuth()
const router = useRouter()

const handleLogin = async () => {
  await login(email.value, password.value)
  router.push('/')
}

const handleGoogle = async () => {
  await googleLogin()
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-6 rounded shadow w-96">
      <h2 class="text-xl font-bold mb-4">Login</h2>

      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full border p-2 mb-3 rounded"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full border p-2 mb-3 rounded"
      />

      <button
        @click="handleLogin"
        class="w-full bg-blue-600 text-white p-2 rounded mb-2"
      >
        Login
      </button>

      <button
        @click="handleGoogle"
        class="w-full border p-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  </div>
</template>
