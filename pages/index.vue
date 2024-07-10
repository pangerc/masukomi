<template>
  <main class="min-h-screen city bg-cover bg-right relative">
    <div
      class="absolute inset-x-0 -top-40 z-9 transform-gpu overflow-hidden blur-3xl sm:-top-80 w-full h-full"
      aria-hidden="true"
    >
      <div
        class="relative bg-gradient-to-r from-black to-transparent opacity-90 w-1/2 h-full"
      />
    </div>
    <div
      class="absolute inset-16 z-10 border border-white/20 flex flex-col justify-between"
    >
      <!-- TOP SEGMENT -->
      <div class="w-full flex flex-col">
        <div class="w-full h-12 flex justify-between">
          <div
            class="w-8 h-8 border-l-2 border-t-2 border-white -margin-1"
          ></div>
          <div
            class="w-8 h-8 border-r-2 border-t-2 border-white -margin-1"
          ></div>
        </div>
        <div class="w-full h-12 flex justify-between">
          <p class="text-white pl-16">V-001</p>
          <p class="text-white pr-16">&copy;all rights reserved</p>
        </div>
      </div>
      <!-- LOGO SEGMENT -->
      <div
        class="pt-32 pl-16 w-full h-2/3 flex flex-col justify-start items-start"
      >
        <img src="/masukomi.svg" class="h-10" />
        <p class="text-white text-xl uppercase pt-6">
          When Everything <br />
          Else Fails
        </p>
      </div>
      <!-- BOTTOM SEGMENT -->
      <div class="w-full flex flex-col">
        <div class="w-full h-12 flex justify-center items-center">
          <a
            href="mailto:info@masukomi.io"
            class="text-white uppercase border border-white/20 px-9 py-3 hover:bg-red-700"
            >Book a call</a
          >
        </div>
        <div class="w-full h-12 flex justify-between">
          <div
            class="w-8 h-8 border-l-2 border-b-2 border-white -margin-1"
          ></div>
          <div
            class="w-8 h-8 border-r-2 border-b-2 border-white -margin-1"
          ></div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.city {
  background-image: url("/city.png");
}
</style>
