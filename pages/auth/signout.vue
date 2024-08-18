<template>
  <Authenticator />
</template>

<script lang="ts" setup>
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue'
import type { UseAuthenticator } from '~/global'
import { signOut } from 'aws-amplify/auth'

definePageMeta({ layout: 'auth' })

const auth = useAuthenticator() as UseAuthenticator

watch(() => auth.authStatus, async value => {
  if (value === 'authenticated') {
    await signOut()
  }

  if (value === 'unauthenticated') {
    navigateTo('/auth/login')
  }
})
</script>