<template>
  <div class="card shadow bg-base-100">
    <h3 class="card-title m-4">PCF Details</h3>
    <hr>
    <div class="card-body">

      <div class="flex justify-between">
        <div class="leading-9 [&>p>strong]:mr-1.5">
          <p><strong>PCF ID:</strong>1</p>
          <p><strong>Product ID:</strong>1</p>
          <p><strong>Product Name:</strong>something</p>
          <p><strong>Amount:</strong>5</p>
          <p><strong>Emission per Unit:</strong>3000 tCO2</p>
          <p><strong>Version:</strong>1</p>
          <p><strong>Status:</strong>Active</p>
          <p><strong>Additional Info:</strong>N/a</p>
        </div>

        <div class="text-center mr-20">
          <div class="avatar">
            <div class="max-w-[250px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>

          <p class="mt-3 opacity-65">This PCF belong to company A</p>
        </div>

      </div>
    </div>
    <hr>

    <div class="text-center py-4">
      <button class="btn btn-primary text-white">
        <Icon name="material-symbols:download" class="size-7" />
        Download PCF Details
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
await new Promise(r => setTimeout(r, 2000))
</script>
