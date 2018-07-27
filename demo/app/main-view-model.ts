import { Observable } from 'tns-core-modules/data/observable';
import {init, openWebView} from 'nativescript-awesome-webview';

export class HelloWorldModel extends Observable {
  public message: string;

  constructor() {
    super();
    init();
    openWebView({
      url: 'http://google.com',
      toolbarColor: '#2277aa',
      toolbarControlsColor: '#eebb99'
    });
  }
}
