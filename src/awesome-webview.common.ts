import { Observable } from '@nativescript/core/data/observable';
import * as app from '@nativescript/core/application';
import * as dialogs from '@nativescript/core/ui/dialogs';


export interface AwesomeWebviewOptions {
  url: string;
  showTitle?: boolean;
  toolbarColor?: string;
  toolbarControlsColor?: string;
  isClosed?: Function;
}
