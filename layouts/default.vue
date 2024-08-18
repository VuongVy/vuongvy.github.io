<template>
  <div v-if="auth.authStatus === 'authenticated'" data-theme="retro" class="drawer lg:drawer-open">
    <input :id="drawerID" type="checkbox" v-model="drawer" class="drawer-toggle" />
    <div class="drawer-content bg-base-200">
      <Navbar />

      <div class="p-5">
        <NuxtPage /> 
      </div>
    </div> 
    <div class="drawer-side">
      <label :for="drawerID" aria-label="close sidebar" class="drawer-overlay"></label>

      <Sidebar class="w-80 min-h-full bg-base-100" />
    </div>
  </div>

  <NuxtLoadingIndicator :height="4" />
</template>

<script lang="ts" setup>
import { useAuthenticator } from '@aws-amplify/ui-vue'
import Sidebar from './default/Sidebar.vue'
import Navbar from './default/Navbar.vue'
import type { UseAuthenticator } from '~/global'

const drawerID = 'navbar-drawer'
const drawer = ref(false)

provide('sidebar:toggle', () => drawer.value = !drawer.value)

const auth = useAuthenticator() as UseAuthenticator

watch(() => auth.authStatus, async (value) => {
  if (value === 'unauthenticated') {
    navigateTo('/auth/login')
  }
})
</script>