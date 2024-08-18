<template>
  <div>
    <div class="flex space-x-5 mx-auto max-w-6xl">
      <div class="card card-compact bg-base-100 w-full shadow">
        <div class="card-body">
          <div class="flex">
            <img src="/arrow-check.svg" alt="">

            <div class="flex flex-col text-center w-full mt-2">
              <h3 class="text-primary font-bold text-4xl">24</h3>
              <p class="text-lg font-semibold">PCFs Published</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card card-compact bg-base-100 w-full shadow">
        <div class="card-body">
          <div class="flex">
            <img src="/mail-plus.svg" alt="">

            <div class="flex flex-col text-center w-full mt-2">
              <h3 class="text-warning font-bold text-4xl">24</h3>
              <p class="text-lg font-semibold">Requests Sent</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card card-compact bg-base-100 w-full shadow">
        <div class="card-body">
          <div class="flex">
            <img src="/archive-clock.svg" alt="">

            <div class="flex flex-col text-center w-full mt-2">
              <h3 class="text-red-800 font-bold text-4xl">15</h3>
              <p class="text-lg font-semibold">Requests Received</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <NuxtPage class="mt-5" :transition="{ name: 'slide-right', mode: 'out-in' }" />
  </div>
</template>
