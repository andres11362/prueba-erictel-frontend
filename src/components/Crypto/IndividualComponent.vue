<template>
  <div class="m-10 grid grid-cols-1 content-center">
    <div class="my-10 mx-5">
      <h1 class="text-3xl text-gray-200 font-bold">Datos importantes</h1>
    </div>
    <div
      class="w-full flex flex-col bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div class="bg-gray-700 text-gray-300 text-lg px-6 py-4">Bitcoin</div>

      <div class="px-6 py-4 border-t border-gray-200">
        <div class="border rounded-lg p-4 bg-gray-200">
          Here is a short comment about this employee.
        </div>
      </div>
      <div class="px-6 py-4 border-t border-gray-200">
        <div class="border rounded-lg p-4 bg-gray-200">
          Here is a short comment about this employee.
        </div>
      </div>
      <div class="px-6 py-4 border-t border-gray-200">
        <div class="border rounded-lg p-4 bg-gray-200">
          Here is a short comment about this employee.
        </div>
      </div>

      <div class="bg-gray-700 px-6 py-4">
        <div class="flex items-center pt-3">
          <div
            class="w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white"
          >
            <img src="../../assets/img/Bitcoin.svg" />
          </div>
          <div class="ml-4">
            <p class="font-bold text-gray-500">Tony Nguyen</p>
            <p class="text-sm text-gray-300 mt-1">Instructor</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";

export default {
  name: "IndivualComponent",
  setup() {
    const router = useRouter();
    router.push("/currency");
  },
  props: {},
};
</script>