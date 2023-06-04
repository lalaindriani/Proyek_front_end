<template>
  <div class="h-screen   bg-gray-800" id="side-bar" :class="dataOpenSideBar == true ? 'side-bar-visible' : 'side-bar-close'">
    <div class="bg-orange-400 h-[60px] flex justify-center items-center ">
      <div class="text-xl font-bold text-center flex items-center justify-center text-black h-full bg-white-350" v-show="dataOpenSideBar">TOKO MEUBEL<br>JAYA</div>
      <img src="https://s3.amazonaws.com/media.eremedia.com/uploads/2017/01/23143044/github4.jpg" v-show="!dataOpenSideBar" class="p-1 w-8 h-8 rounded-full ring-2 ring-gray-100 dark:ring-gray-500 " alt="Avatar" />
    </div>
    <div class="flex flex-col justify-between h-[calc(100vh-3rem)] bg-gray-900">
      <div class="menu-man text-left px-2 whitespace-nowrap ">
        <div class="profile flex justify-center items-center text-center p-2 ">
          <div class="text-center  text-white" v-show="dataOpenSideBar">
            <img src="https://s3.amazonaws.com/media.eremedia.com/uploads/2017/01/23143044/github4.jpg" class="p-1 w-24 h-24 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mb-5" alt="Avatar" />
            <h5 class="text-xl font-bold leading-tight mb-2">MEUBEL<br>JAYA</h5>
          </div>
        </div>
        <div class="   py-3 rounded-sm cursor-pointer text-gray-300 hover:text-white">
          <router-link to="/" class="px-2 flex space-x-2"><span class="pi pi-microsoft" v-tooltip.right="'Dashboard'"></span> <span v-show="dataOpenSideBar">Dashboard</span></router-link>
        </div>
        <div class="   py-3 rounded-md cursor-pointer  text-gray-300 hover:text-white">
          <router-link to="/user" class="px-2 flex space-x-2"><span class="pi pi-user " v-tooltip.right="'User'"></span> <span v-show="dataOpenSideBar">User</span></router-link>
        </div>
        <div class="   py-3 rounded-md cursor-pointer  text-gray-300 hover:text-white">
          <router-link to="/product" class="px-2 flex space-x-2"><span class="pi pi-cart-plus " v-tooltip.right="'Product'"></span> <span v-show="dataOpenSideBar">Product</span></router-link>
        </div>
        <div class="  py-3 rounded-md cursor-pointer text-gray-300 hover:text-white">
          <router-link to="/registration" class="px-2 flex space-x-2"><span class="pi pi-whatsapp  " v-tooltip.right="'Registration'"></span> <span v-show="dataOpenSideBar">Registration</span></router-link>
        </div>
        <div class="  py-3 rounded-md cursor-pointer text-gray-300 hover:text-white">
          <router-link to="/activation" class="px-2 flex space-x-2"><span class="pi  pi-check-circle " v-tooltip.right="'Activation'"></span> <span v-show="dataOpenSideBar">Activation</span></router-link>
        </div>
      </div>
      </div>
      </div>
      </template>

<script>
export default {
  props: {
    dataOpenSideBar: Boolean
  },

}
</script>

<style>
.p-tooltip-text {
  font-size: 10px !important;
}

#side-bar {
  overflow: hidden;
  transition: 300ms;
}

.side-bar-visible {
  width: 250px !important;
}

.side-bar-close {
  width: 50px !important;
}
</style>