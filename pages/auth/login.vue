<template>
  <div class="grid place-content-center min-h-screen bg-gray-200">
    <Authenticator initial-state="login" :hide-sign-up="true" v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </Authenticator>
  </div>
</template>

<script lang="ts" setup>
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue'
import type { UseAuthenticator } from '~/global'

definePageMeta({ layout: 'auth' })

const auth = useAuthenticator() as UseAuthenticator

watch(() => auth.authStatus, value => {
  if (value === 'authenticated') {
    navigateTo('/home')
  }
})
</script>