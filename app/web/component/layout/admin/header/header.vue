<template>
  <div style="height:100%">
     <header class="header">
      <div class="top-left-bar" :class="{ 'top-left-bar-hidden': collapse, 'top-left-bar-show': !collapse }">
          <span>{{ site.name }}</span>
      </div>
      <span class="header-btn" @click="collapse=!collapse"><i class="el-icon-menu"></i></span>
      <div class="right">
                <span class="header-btn">
                    <el-badge :value="3" class="badge">
                        <i class="el-icon-message"></i>
                    </el-badge>
                </span>
        <span class="header-btn">
                    <i class="el-icon-bell"></i>
                </span>
        <el-dropdown>
                    <span class="header-btn">
                        Admin<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
    <LeftMenu :collapse="collapse"></LeftMenu>
  </div>
</template>
<style>
</style>
<script lang="ts" src="./header.ts"></script>
