<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">

    <!-- Navbar -->
    <header class="bg-gray-800 text-white flex justify-between px-4 py-3">
      <h1 class="font-bold">Vue Dashboard</h1>

      <nav class="hidden md:flex gap-6">
        <RouterLink to="/" class="hover:text-gray-300">Dashboard</RouterLink>
        <RouterLink to="/users" class="hover:text-gray-300">Users</RouterLink>
        <RouterLink to="/settings" class="hover:text-gray-300">Settings</RouterLink>
      </nav>
    </header>

    <div class="flex flex-1">

      <!-- Sidebar -->
      <aside class="w-64 bg-gray-100 p-4 hidden md:block">
        <ul class="space-y-2">
          <li>
            <RouterLink
              to="/"
              class="block p-2 rounded hover:bg-gray-200"
              active-class="bg-gray-300 font-semibold"
            >
              Dashboard
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/users"
              class="block p-2 rounded hover:bg-gray-200"
              active-class="bg-gray-300 font-semibold"
            >
              Users
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/settings"
              class="block p-2 rounded hover:bg-gray-200"
              active-class="bg-gray-300 font-semibold"
            >
              Settings
            </RouterLink>
          </li>
        </ul>
      </aside>

      <!-- Page Content -->
      <main class="flex-1 p-6 bg-white">
        <router-view />
      </main>

    </div>
  </div>
</template>
