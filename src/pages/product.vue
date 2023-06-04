<template>
    <div class="product-container">
      <div class="font-bold text-4xl py-3" style="font-family: Georgia;">Product</div>
      <div class="font leading-tight mb-5" style="font-family: Georgia;">Haloo, Selamat datang...</div>
      <div class="image-container">
        <img class="product-image" src="@/assets/image/kaca.jpg" alt="Gambar Product">
        <div class="image-caption">
          <p>Kaca</p>
        </div>
      </div>
      <div class="image-container">
        <img class="product-image" src="@/assets/image/kacarias.jpg" alt="Foto Baru">
        <div class="image-caption">
          <p>Kaca Rias</p>
        </div>
        </div>
        <div class="image-container">
        <img class="product-image" src="@/assets/image/kacadinding.jpg" alt="Foto Baru">
        <div class="image-caption">
          <p>Kaca Dinding</p>
        </div>
        </div>
        <div class="image-container">
        <img class="product-image" src="@/assets/image/kacadinding2.jpg" alt="Foto Baru">
        <div class="image-caption">
          <p>Kaca Dinding</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    
  }
  </script>
  
<style>
.product-container {
    text-align: center;
  }
  
.product-image {
    width: 200px;
    height: 200px;
    border: 1px solid #fff;
    border-radius: 7px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease; /* Efek transisi saat gambar berubah skala */
  }
  
.image-container {
    position: relative;
    /*tampilan gambar horizontal*/
    display: inline-block; 
    margin-right: 30px; /*jarak gambar*/
    margin-bottom: 20px;
    cursor: pointer; /*kode untuk mengubah kursor*/
  }
  
.image-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 8px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    padding: 8px;
  } 
  
.image-caption p {
    margin: 0; /* Menghilangkan margin bawaan pada elemen <p> */
    font-size: 16px;
  }
    /* Efek transisi saat gambar diberi hover */
    .image-container:hover .product-image {
    transform: scale(1.1);
  }
</style>