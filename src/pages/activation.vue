<template>
    <div>
      <div class="px-5">
      <div class="font-bold text-4xl py-8 " style="font-family: Georgia;">Upload Gambar</div>
      <input type="file" ref="fileInput" accept="image/*" @change="handleFileChange" />
      <button @click="uploadFile">Upload</button>
    </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        selectedFile: null,
      };
    },
    methods: {
      handleFileChange(event) {
        this.selectedFile = event.target.files[0];
      },
      async uploadFile() {
        const formData = new FormData();
        formData.append('image', this.selectedFile);
  
        try {
          const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY0BtYWlsLmNvbSIsImlkIjoiNjQ1Y2M1ZDhmYTM5ZmE2ODg0NjA2YWU5IiwiaWF0IjoxNjgzODAxNTk3LCJleHAiOjE2ODM4ODc5OTd9.gv6s2gAju_6GKuBXMDJtD5TwGpKPNsxX6EtcdxJpi60'; // Replace with your actual JWT token
          const response = await axios.post('https://express-passport-jwt-production.up.railway.app/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`,
            },
          });
  
          console.log(response.data); // Handle the API response here
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  