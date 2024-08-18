<template>
  <div class="card card-compact bg-base-100 shadow">
    <div class="card-body">
      <slot name="title">
        <h3 class="card-title" v-if="title">{{ title }}</h3>
      </slot>

      <div class="overflow-x-auto" v-bind="$attrs">
        <slot />
      </div>
    </div>

    <hr>
    <div class="py-3 px-4 flex justify-between">
      <span></span>

      <div class="flex text-sm opacity-90">
        <div class="mt-1.5">
          Row Per Page:
          <select v-model="selected" class="select select-xs">
            <option v-for="item in perPage" :value="item" :selected="item === take">{{ item }}</option>
          </select>
        </div>

        <div class="flex space-x-2">
          <button class="btn btn-sm btn-circle btn-ghost">
            <Icon name="fe:arrow-left" class="size-5" @click="emit('prev')" />
          </button>
          <span class="mt-1.5">1-3 of 3</span>
          <div class="btn btn-sm btn-circle btn-ghost" @click="emit('next')">
            <Icon name="fe:arrow-right" class="size-5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'

const props = defineProps({
  title: { type: String },
  perPage: { type: Array as PropType<number[]>, default: () => [10, 20, 30, 40, 50, 100, 200] },
  take: { type: Number, default: 20 }
})

const selected = ref(props.take)

const emit = defineEmits<{
  next: [],
  prev: [],
  take: [number]
}>()

watch(selected, value => emit('take', value))
</script>