
//declare var MobileKeysManager:any;

export class AssaAbloy extends MobileKeysManager {
    _this: any;
    APP_ID: string;
    private mobileKeysManager: MobileKeysManager;
    LOCK_SERVICE_CODE_AAMK: any;
    LOCK_SERVICE_CODE_HID: any;

    init(){
         this._this = super.init();
        if (this._this) {
            this.mobileKeysManager = this.createInitializedMobileKeysManager();
            let _storyboard = UIStoryboard.storyboardWithNameBundle("Main", null);
            let _locationManager = CLLocationManager.alloc().init();
            let _lockServiceCodes = [ this.LOCK_SERVICE_CODE_AAMK, this.LOCK_SERVICE_CODE_HID ];
            let _seamlessOn = false;
            let _timeOfLastConnection = NSDate.dateWithTimeIntervalSince1970(1);
        }
console.log("Initialized");
        return this._this;
    }
    
    
    private createInitializedMobileKeysManager() {
        let version = this.APP_ID + "-" + NSBundle.mainBundle.infoDictionary["CFBundleShortVersionString"] + " (" + NSBundle.mainBundle.infoDictionary["CFBundleVersion"] + ")";
        //let config = { MobileKeysOptionApplicationId: this.APP_ID, MobileKeysOptionVersion: version};
        //let config = {MobileKeysOptionApplicationId: this.APP_ID, MobileKeysOptionVersion:version};
        let config = new (NSDictionary as any)([this.APP_ID, version], ['MobileKeysOptionApplicationId', 'MobileKeysOptionVersion');
        //let config = { [this.APP_ID] : "MobileKeysOptionApplicationId" , [version]: "MobileKeysOptionVersion"};
        //let config = NSDictionary.dictionaryWithObjectsForKeys( NSArray.arrayWithArray(["",""]),NSArray.arrayWithArray(["MobileKeysOptionApplicationId", "MobileKeysOptionVersion"]))
        //var dict = new NSDictionary([APPLICATION_ID, version], [MobileKeysOptionApplicationId, MobileKeysOptionVersion]);
        return MobileKeysManager.alloc().initWithDelegateOptions(this._this, config);
    }

    public getMobileKeys(): any {
        return this.mobileKeysManager.endpointInfo();
    }

    public loadKeys(): any {
        return this.mobileKeysManager.listMobileKeys();
    }

    public endpointSetup(invitationCode) {
        this.mobileKeysManager.setupEndpoint(invitationCode);
    }

}
