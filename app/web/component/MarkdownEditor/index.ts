import 'font-awesome/css/font-awesome.min.css';
import 'simplemde/dist/simplemde.min.css';
import SimpleMDE from 'simplemde';
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component({
  name: 'simplemde-md'
})
export default class MarkDownEditor extends Vue {
  @Prop(String) id;
  @Prop({ type: Boolean, default: false }) autofocus;
  @Prop({ type: String, default: '' }) placeholder;
  @Prop({ type: Number, default: 400 }) height;
  @Prop({ type: Number, default: 10 }) zIndex;
  @Prop({ type: Array }) toolbar;

  simplemde: SimpleMDE = null;
  hasChange: boolean = false;

  // @Watch
  // value(val) {
  //   if (val === this.simplemde.value() && !this.hasChange) return
  //   this.simplemde.value(val);
  // }
  mounted() {
    this.simplemde = new SimpleMDE({
      element: document.getElementById(this.id || 'markdown-editor-' + +new Date()),
      autoDownloadFontAwesome: false,
      autofocus: this.autofocus,
      toolbar: this.toolbar,
      spellChecker: false,
      insertTexts: {
        link: ['[', ']( )']
      },
      // hideIcons: ['guide', 'heading', 'quote', 'image', 'preview', 'side-by-side', 'fullscreen'],
      placeholder: this.placeholder
    });
    // if (this.value) {
    //   this.simplemde.value(this.value)
    // }
    this.simplemde.codemirror.on('change', () => {
      if (this.hasChange) {
        this.hasChange = true;
      }
      this.$emit('input', this.simplemde.value());
    });
  }
  destroyed() {
    this.simplemde.toTextArea();
    this.simplemde = null;
  }
}