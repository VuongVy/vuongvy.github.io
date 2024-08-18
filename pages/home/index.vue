
<template>

  <DataViewPaginate title="Recent Processed Requests">
    <table class="table table-sm">
      <!-- head -->
      <thead>
        <tr>
          <th>ID</th>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Data Owner</th>
          <th>Version</th>
          <th>Date Processed</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody class="cursor-pointer">

        <tr class="hover" @click="navigateTo('/home/123')">
          <th>abc1</th>
          <td>product1</td>
          <td>Door Card</td>
          <td>Company A</td>
          <td>1</td>
          <td>07/005/2024</td>
          <td>
            <span class="font-bold text-primary">Approved</span>
          </td>
        </tr>

        <tr class="hover" @click="navigateTo('/home/123')">
          <th>abc1</th>
          <td>product1</td>
          <td>Windshield</td>
          <td>Company B</td>
          <td>1</td>
          <td>07/005/2024</td>
          <td>
            <span class="font-bold text-error">Denied</span>
          </td>
        </tr>
      </tbody>
    </table>
  </DataViewPaginate>
</template>

<script lang="ts" setup>
import DataViewPaginate from '~/components/DataViewPaginate.vue'
</script>