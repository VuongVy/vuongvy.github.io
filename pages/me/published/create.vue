<template>
  <div>
    <div class="card bg-base-100 max-w-2xl w-full mx-auto card-compact">
      <div class="px-5 py-3 border-b">
        <h3 class="card-title">Create new PCF</h3>
      </div>

      <div class="card-body">
        <div class="form-control">
          <label class="label">Product ID</label>
          <select class="select select-bordered">
            <option value="product">Product</option>
          </select>
        </div>

        <div class="form-control">
          <label class="label">Product Name</label>
          <select class="select select-bordered">
            <option value="product">Car Seat</option>
          </select>
        </div>

        <div class="form-control">
          <label class="label">Amount</label>
          <input type="number" class="input input-bordered" />
        </div>

        <div class="form-control">
          <label class="label">Emission per Unit</label>
          <input type="text" class="input input-bordered" value="20 tCO2" />
        </div>

        <div class="form-control">
          <label class="label">Additional Information</label>

          <div v-for="info of additional" class="grid grid-cols-2 gap-3 mb-3">
            <input class="input input-bordered" type="text" v-model="info.name">
            <input class="input input-bordered" type="text" v-model="info.value">
          </div>

          <label class="label cursor-pointer text-blue-600`" @click="additional.push({ name: '', value: '' })">
            + Add more Information
          </label>
        </div>

      </div>

      <div class="border-t card-actions p-5 justify-end space-x-5">
        <button class="btn btn-error btn-sm">Cancel</button>
        <button class="btn btn-success btn-sm">Submit</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const additional = reactive([
  { name: 'Data quality', value: '80%' }
])

</script>