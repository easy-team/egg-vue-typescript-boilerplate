<template>
  <div class="simplemde-container" :style="{height:height+'px',zIndex:zIndex}">
    <textarea :id="id">
    </textarea>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style scoped>
.simplemde-container>>>.CodeMirror {
  min-height: 150px;
  line-height: 20px;
}

.simplemde-container>>>.CodeMirror-scroll {
  min-height: 450px;
}

.simplemde-container>>>.CodeMirror-code {
  padding-bottom: 40px;
}

.simplemde-container>>>.editor-statusbar {
  display: none;
}

.simplemde-container>>>.CodeMirror .CodeMirror-code .cm-link {
  color: #1890ff;
}

.simplemde-container>>>.CodeMirror .CodeMirror-code .cm-string.cm-url {
  color: #2d3b4d;
}

.simplemde-container>>>.CodeMirror .CodeMirror-code .cm-formatting-link-string.cm-url {
  padding: 0 2px;
  color: #E61E1E;
}
.simplemde-container >>> .editor-toolbar.fullscreen,
.simplemde-container >>> .CodeMirror-fullscreen {
  z-index: 1003;
}
</style>
