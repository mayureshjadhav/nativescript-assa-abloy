import { Configuration } from './assa-abloy.common';
export declare class AssaAbloy {
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here
    configuration: Configuration;
    init(): any;
    getMobileKeys(): any;
    loadKeys(): any;
    endpointSetup(invitationCode: any): void;
}
