<template>
  <div class="relative">
    <router-link
      :to="{ name: 'IndCur', params: { id: item.id }}"
      class="grid grid-cols-2 gap-x-px grid-rows-2 gap-y-3 m-4 max-w-sm p-6 bg-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5
        class="mb-2 text-1 font-bold tracking-tight text-gray-200 dark:text-white"
      >
        {{ item.name }}
      </h5>
      <p
        class="font-normal text-2xl text-gray-200 hover:text-gray-700 dark:text-gray-400 justify-self-end"
      >
       {{ `$ ${item?.quote?.USD?.price.toFixed(2)}` }}
      </p>
      <p class="font-normal text-sm text-gray-200 hover:text-gray-700 dark:text-gray-400">
        {{ item.slug }}
      </p>
      <p
        class="font-normal text-sm text-gray-200 hover:text-gray-700 dark:text-gray-400 justify-self-end"
      >
      {{ `${item?.quote?.USD?.percent_change_7d.toFixed(2)}%` }}
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CardCrypto",
  props: {
    item: Object,
    index: Number
  }
};
</script>