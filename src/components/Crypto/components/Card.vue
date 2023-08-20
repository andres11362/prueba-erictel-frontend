<template>
  <div class="relative">
    <div class="absolute w-9 left-8">
        <img class="object-contain" src="../../../assets/img/Bitcoin.svg" />
    </div>
    <a
      href="#"
      class="grid grid-cols-2 gap-x-px grid-rows-2 gap-y-3 m-4 max-w-sm p-6 bg-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5
        class="mb-2 text-1 font-bold tracking-tight text-gray-200 dark:text-white"
      >
        Bitcoin
      </h5>
      <p
        class="font-normal text-2xl text-gray-200 hover:text-gray-700 dark:text-gray-400 justify-self-end"
      >
        $15.000
      </p>
      <p class="font-normal text-sm text-gray-200 hover:text-gray-700 dark:text-gray-400">eth</p>
      <p
        class="font-normal text-sm text-gray-200 hover:text-gray-700 dark:text-gray-400 justify-self-end"
      >
        -1.9%
      </p>
    </a>
  </div>
</template>

<script>
export default {
  name: "CardCrypto",
};
</script>