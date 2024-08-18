<template>
  <div>
    <img src="/logo.svg" />

    <ul class="menu p-4 font-semibold text-stone-600">
      <li v-for="link, path of links">
        <details v-if="link.children">
          <summary>
            <Icon v-if="link.icon" :name="link.icon" class="size-7" /> 
            {{ link.name }}
          </summary>
          <ul>
            <li v-for="sub, uri of link.children">
              <NuxtLink :to="`/${path}/${uri}`" :class="active(`/${path}/${uri}`)">{{ sub.name }}</NuxtLink>
            </li>
          </ul>
        </details>

        <NuxtLink v-else :to="`/${path}`" :class="active(`/${path}`)">
          <Icon v-if="link.icon" :name="link.icon" class="size-7" /> 
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
type Links = {
  [key: string]: {
    name: string
    icon?: string
    children?: Links
  }
}

const links: Links = {
  home: { name: 'Home', icon: 'ic:outline-home' },
  me: {
    name: 'My PCFs', icon: 'ic:outline-home',
    children: {
      published: { name: 'My Publised PCFs' },
      incoming: { name: 'Incoming Requests' }
    }
  },
  browse: { name: 'Browse PCFs', icon: 'hugeicons:discover-circle' }
}

// export const useBreadcrumbs = () => {
//   const route = useRoute()

//   const discover = (path: string, _links?: Links) => {
//     _links ??= links
//     const breadcrumbs = new Array<Links['']>()

//     path = path.replace(/^\//, '')

//     for (const [key, value] of Object.entries(links)) {
//       if (! path.startsWith(key)) {
//         continue
//       }

//       breadcrumbs.push(value)

//       if (value.children) {
//         const sub = discover(path.replace(key, ''), value.children)
//         sub.length && breadcrumbs.push(...sub)
//       }
//     }

//     return breadcrumbs
//   }

//   return computed(() => discover(route.path))
// }
</script>

<script lang="ts" setup>
const route = useRoute()

const active = (uri: string) => {
  return route.path.startsWith(uri) ? 'text-primary bg-green-200/80' : ''
}

</script>