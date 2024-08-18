<template>
  <div class="flex justify-between px-5 py-3">
    <div></div>

    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle ring-1 ring-black/40">
        <Icon name="gridicons:user" class="size-7" />
      </div>
      <div class="dropdown-content z-[1] shadow bg-base-100 rounded-box min-w-52 max-w-72" tabindex="0">
        <div class="px-5 py-3">
          <p><strong>Username</strong></p>
          <p>{{ auth.user?.signInDetails.loginId }}</p>
        </div>
        <hr>
        <ul class="menu p-2">
          <li><a>Profile</a></li>
          <li><a>Settings</a></li>
          <li class="text-error" @click="auth.signOut()"><a>Logout</a></li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthenticator } from '@aws-amplify/ui-vue'
import type { UseAuthenticator } from '~/global'

const auth = useAuthenticator() as UseAuthenticator
</script>