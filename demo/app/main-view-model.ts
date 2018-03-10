import { Observable } from 'tns-core-modules/data/observable';
import { AssaAbloy } from 'nativescript-assa-abloy';

export class HelloWorldModel extends Observable {
  public message: string;
  private assaAbloy: AssaAbloy;

  constructor() {
    super();
this.assaAbloy = new AssaAbloy();
this.assaAbloy.init();
  }
}
