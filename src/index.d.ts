
export declare class AssaAbloy {
  // define your typings manually
  // or..
  // take the ios or android .d.ts files and copy/paste them here
  _this: any;
    APP_ID: string;
    private mobileKeysManager;
    LOCK_SERVICE_CODE_AAMK: any;
    LOCK_SERVICE_CODE_HID: any;
    init(): any;
    private createInitializedMobileKeysManager();
    getMobileKeys(): any;
    loadKeys(): any;
    endpointSetup(invitationCode: any): void;
}
