import { Configuration } from './assa-abloy.common';
declare var com: any;

const OpeningTrigger = com.assaabloy.mobilekeys.api.ble.OpeningTrigger;
const TapOpeningTrigger = com.assaabloy.mobilekeys.api.ble.TapOpeningTrigger;
const ScanConfiguration = com.assaabloy.mobilekeys.api.ble.ScanConfiguration;
const ApiConfiguration = com.assaabloy.mobilekeys.api.ApiConfiguration;
const MobileKeysApi = com.assaabloy.mobilekeys.api.MobileKeysApi;
const MobileKey = com.assaabloy.mobilekeys.api.MobileKey;

export class AssaAbloy {
    private mobileKeysFactory: any;
    configuration: Configuration;
    init() {
        let tap = Array.create(OpeningTrigger, 1);
        tap[0] = new TapOpeningTrigger(this);
        let scanConfiguration = new ScanConfiguration.Builder(tap, this.configuration.LOCK_SERVICE_CODE_AAMK).build();

        let apiConfiguration = new ApiConfiguration.Builder().setApplicationId(this.configuration.APP_ID).setApplicationDescription(this.configuration.APP_ID_DESCRIPTION).build();
        this.mobileKeysFactory = MobileKeysApi.getInstance();
        this.mobileKeysFactory.initialize(this, apiConfiguration, scanConfiguration);
    }

    public getMobileKeys(): any {
        return this.mobileKeysFactory.getMobileKeys();
    }

    public loadKeys(): any {
        return this.mobileKeysFactory.getMobileKeys().listMobileKeys();
    }

    public endpointSetup(invitationCode) : void{
        this.mobileKeysFactory.getMobileKeys().endpointSetup(this, invitationCode);
    }
}