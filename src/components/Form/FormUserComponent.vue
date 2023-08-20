<template>
  <form class="w-full rounded-2xl bg-gray-600 p-10">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Nombre
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-300 border border-pink-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Nombre"
        />
        <p class="text-pink-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          Correo electronico
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-300 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          placeholder="correo@correo.com"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Contraseña
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-300 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="password"
          placeholder="*************"
        />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          Confirmar contraseña
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-300 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="password"
          placeholder="*************"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2"
          for="grid-password"
        >
          Descripción
        </label>
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Escribe tu descripción"
        ></textarea>
      </div>
    </div>
    <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Registrese
        </button>
      </div>
  </form>
</template>

<script>
export default {
  name: "FormRegister",
};
</script>