<template>
  <div class="my-10 mx-5">
    <h1 class="text-3xl text-gray-200 font-bold">Datos del usuario</h1>
  </div>
  <div class="max-w-sm w-full lg:max-w-full lg:flex">
    <div
      class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      title="Woman holding a mug"
    >
      <img class="object-cover" src="../../assets/img/image-user.jpg" />
    </div>
    <div
      class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-8">
        <div class="text-gray-400 font-bold text-xl mb-2">Usuario Usuario</div>
        <p class="text-gray-300 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="flex items-center">
        <div class="text-sm">
          <p class="text-gray-100 leading-none">correo@correo.com</p>
        </div>
      </div>
    </div>
  </div>
  <div class="my-6 flex items-center">
    <div>
      <button
        type="button"
        class="text-gray-300 hover:text-white border border-gray-600 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        Subir Imagen
      </button>
      <a
        class="text-red-300 hover:text-white border border-red-600 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-red-400 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-800"
        >Editar perfil</a
      >
    </div>
  </div>
  <form>
    <div>
    <form>
    </form>
      <label
        class="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-300"
        for="file_input"
        >Subir Imagen</label
      >
      <input
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
      />
    </div>
  </form>
</template>