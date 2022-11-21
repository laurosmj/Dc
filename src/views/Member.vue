<template>
    <main>
        <h6> MEMBERS </h6>
        <div class="card-columns">
<div class="card">
  <img src="src/img/p4.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4> Kim Jisoo </h4> 
    <p>Role: Lead vocalist, Visual <br> Nickname: Chichoo <br> Birthday: January 3, 1995 <br>
        Zodiac Sign: Capricorn <br> Birthplace: Seoul, South Korea <br> Height: 162cm <br> Weight: 45 kg</p> 
  </div>
</div>
<div class="card">
  <img src="src/img/p5.jpg" alt="Avatar" style="width:100%">
  <div class="container">
    <h4> Jennie Ruby Jane Kim </h4> 
    <p>Role: Main Rapper, Lead Vocalist <br> Birthday: January 16, 1996 <br> Zodiac Sign: Capricorn <br>
        Birthplace: South Korea <br> Height: 163cm </p> 
  </div>
</div>
<div class="card">
  <img src="src/img/p3.jpg" alt="Avatar" style="width:100%">
  <div class="container">
    <h4> Lalisa Manoban </h4> 
    <p>Role: Main Dancer, Lead Rapper, Sub-Vocalist, Maknae <br> Birthday: March 27, 1997 <br>
        Birthplace: Bangkok<br> Height: 167cm</p> 
  </div>
</div>
<div class="card">
  <img src="src/img/p2.jpg" alt="Avatar" style="width:100%">
  <div class="container">
    <h4> Park Chaeyoung </h4> 
    <p> Role: Main Vocalist, Lead Dancer <br> Birthday: February 11, 1997 <br>
        Zodiac Sign: Aquarius <br> Birthplace: New Zealand <br> Height: 168cm </p> 
  </div>
</div>

</div>
    </main>
</template>
<style>
    main {
        margin: 5px 5px 5px 5px;
        background-color: rgb(243, 196, 235);      
        font-family: "Times New Roman", Times, serif;
    } 
    h6 {
        font-size: 40px;
    }
    .card-columns {
        columns: 4;
        -webkit-columns: 4;
        -moz-columns: 4;
    }
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 80%;
        padding: 10px;
        background-color: aquamarine;
        margin-left: 10px;
        margin-bottom: 10%;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .container {
        padding: 2px 16px;
    }
    
</style>