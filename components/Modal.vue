<template>
  <Teleport to="body">
    <dialog v-bind="$attrs" ref="dialog" class="modal">
      <div class="modal-box">

        <slot v-bind="{ show, close }">
          <h3 class="font-bold text-lg">Hello!</h3>
          <p class="py-4">Press ESC key or click the button below to close</p>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn">Close</button>
            </form>
          </div>
        </slot>

      </div>
    </dialog>
  </Teleport>
</template>

<script lang="ts" setup>
const dialog = ref<HTMLDialogElement>()

const show = () => dialog.value?.showModal()
const close = () => dialog.value?.close()

defineExpose({ show, close })
</script>