import Vue from 'vue';
import Component from 'vue-class-component';

// @Component デコレータはクラスが Vue コンポーネントであることを示します
@Component({
  template: `
    <div>
      <button @click="onClick">Click!</button>
    </div>
  `
})
export default class MarketListComponent extends Vue {
  // 初期データはインスタンスプロパティとして宣言できます
  private message: string = 'Hello!';

  // コンポーネントメソッドはインスタンスメソッドとして宣言できます
  private onClick(): void {
    window.alert(this.message);
  }
}
