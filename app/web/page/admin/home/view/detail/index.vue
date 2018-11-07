<template>
  <div class="content" v-if="article">
    <h1>{{article.title}}</h1>
    <iframe v-if="article.url" :src="article.url" frameborder="0" width="100%" height="600"></iframe>
    <div class="marktext" v-else v-html="article.content"></div>
  </div>
</template>
<style>
  .content {
    font-size: 24px; 
    text-align: center
  }
  .content .marktext {
    margin-top: 24px;
  }
</style>
<script lang="ts" src="./index.ts"></script>
