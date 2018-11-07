<template>
  <Layout>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </Layout>
</template>
<script lang="ts" src="./index.ts"></script>
