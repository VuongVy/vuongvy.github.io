<template>
  <DataViewPaginate class="min-h-[60vh]">
    <template #title>
      <div class="flex justify-between space-x-3 px-3">
        <h3 class="card-title font-bold">My published PCFs</h3>
        <NuxtLink to="/me/published/create" class="btn btn-sm btn-success">New PCF</NuxtLink>
      </div>
      <hr>
    </template>

    <table class="table">
      <thead>
        <tr>
          <th>PCF ID</th>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Amount</th>
          <th>Emission per Unit</th>
          <th>version</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>

        <tr class="hover">
          <th>abc1</th>
          <td>product1</td>
          <td>Door Card</td>
          <td>5</td>
          <td>300 tCO2</td>
          <td>1</td>
          <td>
            <a class="link link-success" @click="">Active</a>
          </td>
        </tr>

      </tbody>
    </table>
  </DataViewPaginate>
</template>

<script lang="ts" setup>
import DataViewPaginate from '~/components/DataViewPaginate.vue'
</script>