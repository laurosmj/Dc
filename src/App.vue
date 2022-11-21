
<template>
    <div class="topnav" >
      <router-link to="/"> Home </router-link> 
      <router-link to="/music"> Music </router-link> 
      <router-link to="/member"> Member </router-link>      

      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <Component :is="Component"/>
        </transition>
      </router-view>

  </div>
</template>

<style setup>
  * {
    margin: 0;
    
  }
  .topnav{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgb(26, 24, 24);
    text-align: center;
    position: relative;
    overflow: hidden;
    font-size: 20px;
    padding: 19px 16px;
    
  }
  a {
    font-weight: bold;
    color: #f19f9f;
    text-decoration: none;
    margin-right: 1em;
  }
  a:hover, a.router-link-active {
    border-bottom: 2px solid #f5ebf1;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease-out;
  }
</style>
