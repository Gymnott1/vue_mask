<script setup>
import { ref } from 'vue'

const sidebarOpen = ref(false)
</script>

<template>
  <div class="min-h-screen flex flex-col">

    <!-- Navbar -->
    <header class="bg-gray-800 text-white flex items-center justify-between px-4 py-3">
      <div class="flex items-center gap-3">
        <!-- Mobile menu button -->
        <button
          class="md:hidden"
          @click="sidebarOpen = !sidebarOpen"
        >
          ☰
        </button>
        <h1 class="text-lg font-semibold">My Vue App</h1>
      </div>

      <nav class="hidden md:flex gap-6">
        <a href="#" class="hover:text-gray-300">Home</a>
        <a href="#" class="hover:text-gray-300">About</a>
        <a href="#" class="hover:text-gray-300">Contact</a>
      </nav>
    </header>

    <!-- Content Area -->
    <div class="flex flex-1">

      <!-- Sidebar -->
      <aside
        class="bg-gray-100 w-64 p-4 space-y-4
               fixed md:static inset-y-0 left-0
               transform md:translate-x-0 transition-transform duration-200
               z-20"
        :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <h2 class="font-bold text-gray-700 mb-4">Menu</h2>
        <ul class="space-y-2">
          <li class="hover:bg-gray-200 p-2 rounded cursor-pointer">Dashboard</li>
          <li class="hover:bg-gray-200 p-2 rounded cursor-pointer">Users</li>
          <li class="hover:bg-gray-200 p-2 rounded cursor-pointer">Settings</li>
        </ul>
      </aside>

      <!-- Overlay (mobile) -->
      <div
        v-if="sidebarOpen"
        class="fixed inset-0 bg-black bg-opacity-40 md:hidden"
        @click="sidebarOpen = false"
      ></div>

      <!-- Main Content -->
      <main class="flex-1 p-6 bg-white md:ml-0">
        <h2 class="text-2xl font-bold mb-4">Dashboard</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-4 border rounded shadow">Item 1</div>
          <div class="p-4 border rounded shadow">Item 2</div>
          <div class="p-4 border rounded shadow">Item 3</div>
          <div class="p-4 border rounded shadow">Item 4</div>
        </div>
      </main>

    </div>
  </div>
</template>

<style scoped>
/* No extra CSS needed */
</style>
