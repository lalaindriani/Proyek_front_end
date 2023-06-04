<template>
  <div class="px-5">
    <div class="font-bold text-4xl py-6" style="font-family: Georgia;">Data Penjualan</div>
    <div class="py-5">
      <table class="border-collapse border-2 w-full">
        <thead>
          <tr>
            <th class="border-2 p-3">No</th>
            <th class="border-2 p-3">Tanggal Penjualan</th>
            <th class="border-2 p-3">Nama Barang</th>
            <th class="border-2 p-3">Jumlah Barang</th>
            <th class="border-2 p-3">Harga Barang</th>
            <th class="border-2 p-3">Total Harga Barang</th>
            <th class="border-2 p-3">Hapus Data</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in posts" :key="data.id">
            <td class="border-2 p-3">{{ data.id }}</td>
            <td class="border-2 p-3">{{ data.salesDate }}</td>
            <td class="border-2 p-3">{{ data.name }}</td>
            <td class="border-2 p-3">{{ data.quantity }}</td>
            <td class="border-2 p-3">{{ data.price }}</td>
            <td class="border-2 p-3">{{ data.total }}</td>
            <td class="border-2 p-3">
              <button class="px-4 py-2 border rounded bg-red-500 text-white hover:bg-red-400"
                @click="destory(data.id)">Hapus</button>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-center items-center space-x-2">
      <button class="px-4 py-2 border rounded bg-green-500 text-white hover:bg-green-400"
        @click="modelAdd = true">Tambahkan Data</button>
    </div>
    <!-- Pop up modal add new -->
    <div class="flex w-full h-full justify-center item-center" v-show="modelAdd">
      <!-- Background -->
      <div class="w-screen h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0 left-0" @click="(modelAdd = false)">
      </div>
      <!-- Form -->
      <div class="   flex justify-center items-center top-[30%] fixed sticky-0 left-[40%]">
        <div class=" md:w-auto  relative flex flex-col justify-center items-center bg-white  p-8">
          <div class="my-5">
            <h1 role="main" class="text-xl font-semibold text-center text-gray-800">Data Baru</h1>
          </div>
          <div class="mt-2 flex flex-col space-y-2">
            <input type="date"
              class="py-2 px-1 border-2 w-full text-gray-800 text-base leading-4 text-left mt-2 focus:outline-2"
              placeholder="Tanggal Penjualan" v-model="data.salesDate">
            <input type="text"
              class="py-2 px-1 border-2 w-full text-gray-800   text-base leading-4 text-left mt-2 focus:outline-2 "
              placeholder="Nama Barang" v-model="data.name">
            <input type="text"
              class="py-2 px-1 border-2 w-full text-gray-800 text-base leading-4 text-left mt-2 focus:outline-2"
              placeholder="Jumlah Barang" v-model="data.quantity">
            <input type="text"
              class="py-2 px-1 border-2 w-full text-gray-800 text-base leading-4 text-left mt-2 focus:outline-2"
              placeholder="Harga Penjualan" v-model="data.price">
            <input type="text"
              class="py-2 px-1 border-2 w-full text-gray-800 text-base leading-4 text-left mt-2 focus:outline-2"
              placeholder="Total Harga Penjualan" v-model="data.total">
          </div>
          <button class="mt-2 px-4 py-2 border rounded bg-blue-500 text-white hover:bg-blue-400"
            style="font-family: 'Monaco';" @click="addnew">Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      selectedFile: null,
      modelAdd: false,
      modelUpdate: false,
      data: {
        id: "",
        name: "",
        // description: ""
      }
    }
  },
  computed: {
    ...mapGetters({
      posts: 'post/posts'
    })
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    },
    uploadImage() {
      const formData = new FormData();
      formData.append('image', this.selectedFile);

      axios.post('http://localhost:3001/api/penjualan', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => {
          console.log(response.data);
          // console.log(response.data.imageUrl);
          // Handle the response as needed
        })
        .catch(error => {
          console.error(error);
          // Handle the error as needed
        });
    },

    addnew() {
      this.$store.dispatch('post/ADD_NEW', this.data).then(respone => {
        if (respone) {
          this.modelAdd = false;
          console.log("Data Berhasil Disimpan")
          // console.log(this.data.name)
          let datasInput = {
            id: this.data.id,
            name: this.data.name,
            price: this.data.price,
            quantity: this.data.quantity,
            salesDate: this.data.salesDate,
            total: this.data.total
          }
          axios.post('http://localhost:3001/api/penjualan', datasInput, {
            // headers: {
            //   'Content-Type': ':application/json;'
            // }
          })
            .then(response => {
              console.log(response.data);

              // Handle the response as needed
            })
            .catch(error => {
              console.error(error);
              // Handle the error as needed
            });
          // reset data 

        }
      })
    },
    edit(id) {
      this.modelUpdate = true;
      this.$store.dispatch('post/GET_POST', id).then(respone => {
        //set data model
        this.data.id = respone[0].id;
        this.data.name = respone[0].name;
        this.data.description = respone[0].description;
      })
    },
    updatePost() {
      this.$store.dispatch('post/UPDATE_POST', this.data).then(respone => {
        if (respone) {
          this.modelUpdate = false;
        }
      })
    },
    destory(id) {
      this.$store.dispatch('post/DELETE_POST', id).then(respone => {
        if (respone) {
          alert("Data ini akan dihapus permanen");
        }
      })
    }

  }
}
</script>