<template>
    <div>
      <form @submit.prevent="onSubmit">
        <input type="file" ref="fileInput" @change="onFileChange" />
        <button type="submit">Upload</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        file: null
      }
    },
    methods: {
      onFileChange(event) {
        this.file = event.target.files[0];
      },
      onSubmit() {
        const formData = new FormData();
        formData.append('file', this.file);
        // Kirim formData ke API menggunakan axios atau fetch
      }
    }
}
</script>