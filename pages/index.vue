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
      class="absolute inset-4 md:inset-16 z-10 border border-white/20 flex flex-col justify-between"
    >
      <!-- TOP SEGMENT -->
      <div class="w-full flex flex-col">
        <div class="w-full h-4 md:h-8 flex justify-between">
          <div
            class="w-4 h-4 md:w-8 md:h-8 border-l-2 border-t-2 border-white -margin-1"
          ></div>
          <div
            class="w-4 h-4 md:w-8 md:h-8 border-r-2 border-t-2 border-white -margin-1"
          ></div>
        </div>
        <div class="w-full h-12 flex justify-between">
          <p class="text-white pl-4 md:pl-16 text-xs md:text-sm lg:text-normal">
            V-001
          </p>
          <p class="text-white pr-4 md:pr-16 text-xs md:text-sm lg:text-normal">
            &copy;all rights reserved
          </p>
        </div>
      </div>
      <!-- LOGO SEGMENT -->
      <div
        class="pt-32 px-4 md:pl-16 w-full h-2/3 flex flex-col items-center justify-start md:items-start"
      >
        <img src="/masukomi.svg" class="h-7" />
        <p class="text-white text-normal uppercase pt-6 leading-6">
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
        <div class="w-full h-4 md:h-8 flex justify-between mt-4 md:mt-0">
          <div
            class="w-4 h-4 md:w-8 md:h-8 border-l-2 border-b-2 border-white -margin-1"
          ></div>
          <div
            class="w-4 h-4 md:w-8 md:h-8 border-r-2 border-b-2 border-white -margin-1"
          ></div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.city {
  background-image: url("/city3.jpg");
}
</style>
