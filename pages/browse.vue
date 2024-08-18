
<template>
  <h3 class="text-2xl font-semibold mx-1">Browse PCFs Page</h3>

  <transition name="fade" appear>
    <div role="alert" class="alert bg-green-200 shadow my-3">
      <Icon name="fa:paper-plane" class="text-success size-7" />
      
      <span>Your request has been sent. A notification will be sent to the DO shortly. Please be patient!!!</span>
      
      <button class="btn btn-sm btn-ghost btn-circle">
        <Icon name="ic:close" class="size-6" />
      </button>
    </div>
  </transition>

  <DataViewPaginate class="min-h-[60vh]">
    <template #title>
      <div class="flex space-x-3">
        <h3 class="card-title">Available PCFs</h3>
        <label class="input input-bordered input-sm flex items-center gap-2">
          <input type="text" class="grow" placeholder="Search" @keypress.enter="console.log('searching')"/>
          <Icon name="ic:search" />
        </label>
      </div>
    </template>

    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Data Owner</th>
          <th>Version</th>
          <th>Published</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
<!-- 
        <tr class="hover">
          <th>abc1</th>
          <td>product1</td>
          <td>Door Card</td>
          <td>Company A</td>
          <td>1</td>
          <td>07/005/2024</td>
          <td>
            <a class="link" @click="requestAccess">Request Access</a>
          </td>
        </tr> -->

        <tr v-for="item in pcfs" class="hover">
          <th>{{ item.pcfId }}</th>
          <td>---</td>
          <td>{{ item.productName }}</td>
          <td>---</td>
          <td>{{ item.version }}</td>
          <td>{{ item.datePublished.split('-').reverse().map(it => +it).join('/') }}</td>
          <td>
            ---
            <!-- <span class="text-yellow-500">Pending</span> -->
          </td>
        </tr>
      </tbody>
    </table>
  </DataViewPaginate>

  <Modal ref="requestDialog" v-slot="{ close }">
    <h3 class="text-2xl font-semibold opacity-80 mb-3">Requesting Access</h3>

    <div class="py-5 border-y space-y-3">
      <p><strong>PCF ID:</strong> abc3</p>
      <p><strong>Please provide the reason why you need to access the PCF:</strong></p>
      <textarea v-model="request.content" class="textarea w-full textarea-bordered" placeholder="Message here..."></textarea>
    </div>

    <div class="modal-action">
      <button class="btn btn-error text-white" @click="close">Close</button>
      <button class="btn btn-success text-white" @click="close">Submit</button>
    </div>
  </Modal>
</template>

<script lang="ts" setup>
import DataViewPaginate from '~/components/DataViewPaginate.vue'
import Modal from '~/components/Modal.vue'
import { useMande, type PCF } from '~/composables/useMande'

const requestDialog = ref<InstanceType<typeof Modal>>()
const request = reactive({ content: '' })
const api = await useMande()

const pcfs = ref(new Array<PCF>())

const requestAccess = () => {
  requestDialog.value?.show()
}

onMounted(async () => {
  api.get<{ pcfs: PCF[] }>('/pcf', { query: { dataOwnerId: '', approvedRecipients: '' } })
    .then(data => pcfs.value = data.pcfs)
})
</script>