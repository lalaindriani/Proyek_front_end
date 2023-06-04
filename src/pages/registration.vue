<template>
  <div>
    <div class="font-bold text-4xl py-8" style="font-family: Georgia;">Registrasi Pegawai Toko</div>
    <div>
      <form @submit.prevent="submitForm">
        <label for="name">Nama:</label>
        <input type="text" id="name" v-model="name"><br><br>

        <label for="gender">Jenis Kelamin:</label>
        <input type="text" id="gender" v-model="gender"><br><br>

        <label for="address">Alamat:</label>
        <input type="text" id="address" v-model="address"><br><br>

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email"><br><br>

        <label for="phone">No. Telp:</label>
        <input type="telp" id="phone" v-model="phone"><br><br>

        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      // your data properties
      name: '',
      gender: '',
      address: '',
      email: '',
      phone: ''
    };
  },

  methods: {
    submitForm() {
      if (!this.name) {
        alert('Please enter your name.');
        return;
      }
      if (!this.gender) {
        alert('Please enter your gender.');
        return;
      }
      if (!this.address) {
        alert('Please enter your address.');
        return;
      }
      if (!this.email || !/^\S+@\S+\.\S+$/.test(this.email)) {
        alert('Please enter a valid email address.');
        return;
      }
      if (!this.phone || !/^\d+$/.test(this.phone)) {
        alert('Please enter a valid phone number.');
        return;
      }



      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(this.$data),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
      })
        .then(json => {
          console.log(json);
          alert('Thank you for sending the message.');
          this.name = '';
          this.gender = '';
          this.address = '';
          this.email = '';
          this.phone = '';
        })
        .catch(error => {
          if (error.response && error.response.data) {
            alert(error.response.data.error);
          } else {
            alert('An unexpected error occurred while submitting the form.');
          }
          console.error(error)
        });
    }
  }


};





</script>

<style></style>