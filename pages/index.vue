<template>
  <main class="min-h-screen city bg-cover bg-right relative">
    <div
      class="absolute inset-16 border border-white/20 flex flex-col justify-between"
    >
      <!-- TOP SEGMENT -->
      <div class="w-full flex flex-col">
        <div class="w-full h-12 flex justify-between">
          <div
            class="w-12 h-12 border-l-2 border-t-2 border-white -margin-1"
          ></div>
          <div
            class="w-12 h-12 border-r-2 border-t-2 border-white -margin-1"
          ></div>
        </div>
        <div class="w-full h-12 flex justify-between">
          <p class="text-white pl-16">V-001</p>
          <p class="text-white pr-16">&copy;all rights reserved</p>
        </div>
      </div>
      <!-- LOGO SEGMENT -->
      <div class="pt-32 pl-16 w-full flex flex-col justify-start items-start">
        <img src="/masukomi.svg" class="h-10" />
        <p class="text-white text-xl uppercase pt-6">
          When Everything <br />
          Else Fails
        </p>
      </div>
      <!-- BOTTOM SEGMENT -->
      <div class="w-full flex flex-col">
        <div class="w-full h-12 flex justify-center items-center">
          <a href="mailto:info@masukomi.io" class="text-white uppercase"
            >Book a call</a
          >
        </div>
        <div class="w-full h-12 flex justify-between">
          <div
            class="w-12 h-12 border-l-2 border-b-2 border-white -margin-1"
          ></div>
          <div
            class="w-12 h-12 border-r-2 border-b-2 border-white -margin-1"
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
