<template>
  <Layout>
    <div class="login">
      <div class="login-form">
        <div class="login-header">
          <img src="../../../asset/images/logo.png" height="100" alt="">
          <p>easyjs</p>
        </div>
        <div class="login-info">
          <input
              placeholder="请输入用户名"
              suffix-icon="fa fa-user"
              v-model="username"
              style="margin-bottom: 18px"
          />

          <input
              placeholder="请输入密码"
              suffix-icon="fa fa-keyboard-o"
              v-model="password"
              type="password"
              style="margin-bottom: 18px"
          />
        </div>
        
        <button
            type="button"
            style="width: 100%;margin-bottom: 18px"
            onclick="javascript: location.href='/admin/'">登录</button>
        <div>
          <input type="checkbox" class="login-remember" v-model="remenber">记住密码
          <a href="/admin/" style="float: right;color: #3C8DBC;font-size: 14px">注册</a>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts" src="./login.ts"></script>