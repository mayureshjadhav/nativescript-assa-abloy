
declare const enum EnvironmentType {

	Unknown = 15,

	Staging = 5,

	Dev = 3,

	Test = 2,

	Demo = 1,

	Prod = 0
}

declare class MobileKeysApduCommand extends NSObject {

	static alloc(): MobileKeysApduCommand; // inherited from NSObject

	static new(): MobileKeysApduCommand; // inherited from NSObject

	cla: number;

	ins: number;

	lengthExpected: number;

	p1: number;

	p2: number;

	payloadData: NSData;

	usesLengthExpected: boolean;

	constructor(o: { class: number; instruction: number; param1: number; param2: number; });

	constructor(o: { rawData: NSData; });

	copyHeaderWithSecureMessagingChaining(secureMessaging: boolean, chaining: boolean): MobileKeysApduCommand;

	enableChaining(): void;

	enableSecureMessaging(): void;

	header(): NSData;

	initWithClassInstructionParam1Param2(cla: number, ins: number, p1: number, p2: number): this;

	initWithRawData(data: NSData): this;

	supportsSecureMessaging(): boolean;

	toBytes(): NSData;

	usesChaining(): boolean;

	usesSecureMessaging(): boolean;

	validateWithError(): boolean;
}

interface MobileKeysApduConnectionProtocol extends NSObjectProtocol {

	activeConnection(): boolean;

	enableTestVectors(enableTestVectors: boolean): void;

	postSessionTearDown(): boolean;

	postSessionTearDownWithOptionsWithError(options: NSDictionary<any, any>): boolean;

	preSessionSetupWithError(contactLess: boolean): boolean;

	preSessionSetupWithOptionsContactlessWithError(options: NSDictionary<any, any>, contactLess: boolean): boolean;

	processApdu(data: NSData): NSData;
}
declare var MobileKeysApduConnectionProtocol: {

	prototype: MobileKeysApduConnectionProtocol;
};

declare class MobileKeysApduResponse extends NSObject {

	static alloc(): MobileKeysApduResponse; // inherited from NSObject

	static new(): MobileKeysApduResponse; // inherited from NSObject

	data: NSData;

	statusWordData: NSData;

	constructor(o: { data: NSData; statusWord: NSData; });

	constructor(o: { rawData: NSData; });

	getData(): NSData;

	getExpectedLengthOfNextResponse(): string;

	getStatusWord(): SeosStatusWord;

	initWithDataStatusWord(payload: NSData, statusWordData: NSData): this;

	initWithRawData(data: NSData): this;

	isError(): boolean;

	isMoreData(): boolean;

	isOk(): boolean;

	status(): NSData;

	toBytes(): NSData;
}

declare class MobileKeysAuthenticationKeySet extends NSObject {

	static alloc(): MobileKeysAuthenticationKeySet; // inherited from NSObject

	static new(): MobileKeysAuthenticationKeySet; // inherited from NSObject

	encryptionAlgorithm: MobileKeysEncryptionAlgorithm;

	global: boolean;

	keyNumber: MobileKeysKeyNumber;

	symmetricKeyPair: MobileKeysSymmetricKeyPair;

	constructor(o: { keyNumber: MobileKeysKeyNumber; symmetricKeyPair: MobileKeysSymmetricKeyPair; encryptionAlgorithm: MobileKeysEncryptionAlgorithm; global: boolean; });

	authenticationKeysWithSelectionResult(result: MobileKeysSelectionResult): MobileKeysSymmetricKeyPair;

	initWithKeyNumberSymmetricKeyPairEncryptionAlgorithmGlobal(keyNumber: MobileKeysKeyNumber, symmetricKeyPair: MobileKeysSymmetricKeyPair, encryptionAlgorithm: MobileKeysEncryptionAlgorithm, global: boolean): this;

	keyRef(): number;
}

declare const enum MobileKeysEncryptionAlgorithm {

	OBILE_KEYS_ENCRYPTION_ALGO_ERROR = 0,

	OBILE_KEYS_ENCRYPTION_ALGO_AES_128 = 9
}

declare class MobileKeysEndpointInfo extends NSObject {

	static alloc(): MobileKeysEndpointInfo; // inherited from NSObject

	static new(): MobileKeysEndpointInfo; // inherited from NSObject

	allocatedFileSystemSize: number;

	currentTopOfFileSystem: number;

	encAlg: number;

	endpointId: number;

	environmentType: EnvironmentType;

	fileSystemAppletVersion: string;

	hashAlg: number;

	readonly isSetup: boolean;

	javaCardVersion: string;

	lastServerSyncDate: Date;

	optionFlags: string;

	pushId: string;

	remainingEPROMSize: number;

	remainingTransientObjectSpace: number;

	seosAppletVersion: string;

	seosId: number;

	snmpBufferSize: number;

	snmpEngineId: string;

	snmpUserName: string;

	snmpUserStatus: boolean;

	toolsAppletVersion: string;

	getEnvironmentName(): string;
}

declare const enum MobileKeysErrorCode {

	Internal = 99,

	CorruptedStorage = 999,

	EndpointNotSetup = 107,

	SDKBusy = 401,

	DeviceNotEligible = 700,

	SDKIncompatible = 701,

	ServerUnreachable = 702,

	DeviceSetupFailed = 703,

	InvalidInvitationCode = 901,

	OpeningTypeNotPermitted = 1101,

	BluetoothLENotAvailable = 1103
}

declare var MobileKeysErrorDomain: string;

declare class MobileKeysGetDataApduCommand extends MobileKeysApduCommand {

	static alloc(): MobileKeysGetDataApduCommand; // inherited from NSObject

	static new(): MobileKeysGetDataApduCommand; // inherited from NSObject

	constructor(o: { tag: MobileKeysSeosTag; });

	constructor(o: { tag: MobileKeysSeosTag; secureMessaging: boolean; });

	constructor(o: { tag: MobileKeysSeosTag; selectorTag: NSData; secureMessaging: boolean; });

	initWithTag(tag: MobileKeysSeosTag): this;

	initWithTagSecureMessaging(tag: MobileKeysSeosTag, secureMessaging: boolean): this;

	initWithTagSelectorTagSecureMessaging(tag: MobileKeysSeosTag, selectorTag: NSData, secureMessaging: boolean): this;
}

declare const enum MobileKeysHashAlgorithm {

	OBILE_KEYS_HASH_ALGO_ERROR = 0,

	OBILE_KEYS_HASH_ALGO_HMAC_SHA1 = 6,

	OBILE_KEYS_HASH_ALGO_HMAC_SHA_256 = 7,

	OBILE_KEYS_HASH_ALGO_CMAC_AES = 9
}

declare var MobileKeysHttpErrorDomain: string;

declare const enum MobileKeysInfoType {

	BleNotSupported = 1,

	BleTurnedOff = 2,

	LocationServicesNotEnabled = 3,

	LocationServicesNotDetermined = 4,

	LocationServicesTurnedOff = 5,

	LocationMonitoringNotSupported = 6,

	LocationMonitoringTurnedOff = 7,

	PasscodeWarning = 8
}

declare class MobileKeysKey extends NSObject {

	static alloc(): MobileKeysKey; // inherited from NSObject

	static new(): MobileKeysKey; // inherited from NSObject

	active: boolean;

	additionalMetaData: NSDictionary<number, NSData>;

	beginDate: Date;

	cardNumber: string;

	configUrl: string;

	credentialType: number;

	endDate: Date;

	externalId: string;

	issuer: string;

	keyId: string;

	keyType: string;

	label: string;

	readbackUrl: string;

	isExpired(): boolean;

	supportsOTP(): boolean;

	uniqueIdentifier(): string;
}

declare const enum MobileKeysKeyNumber {

	OBILE_KEYS_KEY_0 = 0,

	OBILE_KEYS_KEY_1 = 1,

	OBILE_KEYS_KEY_2 = 2,

	OBILE_KEYS_KEY_3 = 3,

	OBILE_KEYS_KEY_4 = 4,

	OBILE_KEYS_KEY_5 = 5,

	OBILE_KEYS_KEY_6 = 6,

	OBILE_KEYS_KEY_7 = 7,

	OBILE_KEYS_KEY_8 = 8,

	OBILE_KEYS_KEY_9 = 9,

	OBILE_KEYS_KEY_10 = 10,

	OBILE_KEYS_KEY_11 = 11,

	OBILE_KEYS_KEY_12 = 12,

	OBILE_KEYS_KEY_13 = 13,

	OBILE_KEYS_KEY_14 = 14,

	OBILE_KEYS_KEY_15 = 15,

	OBILE_KEYS_KEY_16 = 16,

	OBILE_KEYS_KEY_17 = 17,

	OBILE_KEYS_KEY_18 = 18,

	OBILE_KEYS_KEY_19 = 19,

	OBILE_KEYS_KEY_20 = 20,

	OBILE_KEYS_KEY_21 = 21,

	OBILE_KEYS_KEY_22 = 22,

	OBILE_KEYS_KEY_23 = 23,

	OBILE_KEYS_KEY_24 = 24,

	OBILE_KEYS_KEY_25 = 25,

	OBILE_KEYS_KEY_26 = 26,

	OBILE_KEYS_KEY_27 = 27,

	OBILE_KEYS_KEY_28 = 28,

	OBILE_KEYS_KEY_29 = 29,

	OBILE_KEYS_KEY_30 = 30,

	OBILE_KEYS_KEY_31 = 31,

	OBILE_KEYS_KEY_0_GLOBAL = 64,

	OBILE_KEYS_KEY_1_GLOBAL = 65,

	OBILE_KEYS_KEY_2_GLOBAL = 0,

	OBILE_KEYS_KEY_3_GLOBAL = 0,

	OBILE_KEYS_KEY_4_GLOBAL = 0,

	OBILE_KEYS_KEY_5_GLOBAL = 0,

	OBILE_KEYS_KEY_6_GLOBAL = 0,

	OBILE_KEYS_KEY_7_GLOBAL = 0,

	OBILE_KEYS_KEY_8_GLOBAL = 0,

	OBILE_KEYS_KEY_9_GLOBAL = 0,

	OBILE_KEYS_KEY_10_GLOBAL = 0,

	OBILE_KEYS_KEY_11_GLOBAL = 0,

	OBILE_KEYS_KEY_12_GLOBAL = 0,

	OBILE_KEYS_KEY_13_GLOBAL = 0,

	OBILE_KEYS_KEY_14_GLOBAL = 0,

	OBILE_KEYS_KEY_15_GLOBAL = 0,

	OBILE_KEYS_KEY_16_GLOBAL = 0,

	OBILE_KEYS_KEY_17_GLOBAL = 0,

	OBILE_KEYS_KEY_18_GLOBAL = 0,

	OBILE_KEYS_KEY_19_GLOBAL = 0,

	OBILE_KEYS_KEY_20_GLOBAL = 0,

	OBILE_KEYS_KEY_21_GLOBAL = 0,

	OBILE_KEYS_KEY_22_GLOBAL = 0,

	OBILE_KEYS_KEY_23_GLOBAL = 0,

	OBILE_KEYS_KEY_24_GLOBAL = 0,

	OBILE_KEYS_KEY_25_GLOBAL = 0,

	OBILE_KEYS_KEY_26_GLOBAL = 0,

	OBILE_KEYS_KEY_27_GLOBAL = 0,

	OBILE_KEYS_KEY_28_GLOBAL = 0,

	OBILE_KEYS_KEY_29_GLOBAL = 0,

	OBILE_KEYS_KEY_30_GLOBAL = 0,

	OBILE_KEYS_KEY_31_GLOBAL = 0
}

declare class MobileKeysLastAuthenticationInfo extends NSObject {

	static alloc(): MobileKeysLastAuthenticationInfo; // inherited from NSObject

	static new(): MobileKeysLastAuthenticationInfo; // inherited from NSObject

	authenticationCounter: number;

	isModified: boolean;

	lastAuthenticatedMobileKey: MobileKeysKey;
}

declare class MobileKeysManager extends NSObject {

	static alloc(): MobileKeysManager; // inherited from NSObject

	static new(): MobileKeysManager; // inherited from NSObject

	constructor(o: { delegate: NSObject; options: NSDictionary<any, any>; });

	activateMobileKeyError(key: MobileKeysKey): boolean;

	apiVersion(): string;

	closestReaderWithinRangeOfOpeningType(openingType: MobileKeysOpeningType): MobileKeysReader;

	connectToReaderOpeningTypeError(reader: MobileKeysReader, openingType: MobileKeysOpeningType): void;

	dataForKeyOidTagError(oidString: string, tag: MobileKeysSeosTag): NSData;

	deactivateMobileKeyError(key: MobileKeysKey): boolean;

	defaultMobileKeysSeosProvider(): MobileKeysSeosProvider;

	deviceHasBluetoothTurnedOn(): boolean;

	deviceSupportsBluetoothLowEnergy(): boolean;

	endpointInfo(): MobileKeysEndpointInfo;

	generateOTPForKeyError(key: MobileKeysKey): string;

	healthCheck(): NSArray<any>;

	initWithDelegateOptions(delegate: NSObject, options: NSDictionary<any, any>): this;

	isEndpointSetup(): boolean;

	isScanning(): boolean;

	lastAuthenticationInfo(): MobileKeysLastAuthenticationInfo;

	listMobileKeys(): NSArray<MobileKeysKey>;

	listReaders(): NSArray<MobileKeysReader>;

	otpCounterForKeyError(key: MobileKeysKey): number;

	putDataKeyOidTagError(data: NSData, oidString: string, tag: MobileKeysSeosTag): void;

	setSupportedOpeningTypes(openingTypes: NSArray<any>): void;

	setTimeoutConfiguration(timeoutConfiguration: MobileKeysTimeoutConfiguration): void;

	setupEndpoint(invitationCode: string): void;

	startReaderScanInModeSupportedOpeningTypesLockServiceCodesError(scanMode: MobileKeysScanMode, openingTypes: NSArray<any>, lockServiceCodes: NSArray<any>): void;

	startup(): void;

	stopReaderScan(): void;

	unregisterEndpoint(): void;

	updateEndpoint(): void;
}

interface MobileKeysManagerDelegate {

	mobileKeysDidConnectToReaderOpeningType(reader: MobileKeysReader, type: MobileKeysOpeningType): void;

	mobileKeysDidDisconnectFromReaderOpeningTypeOpeningResult(reader: MobileKeysReader, type: MobileKeysOpeningType, result: MobileKeysOpeningResult): void;

	mobileKeysDidFailToConnectToReaderOpeningTypeOpeningStatus(reader: MobileKeysReader, type: MobileKeysOpeningType, status: MobileKeysOpeningStatusType): void;

	mobileKeysDidFailToSetupEndpoint(error: NSError): void;

	mobileKeysDidFailToStartup(error: NSError): void;

	mobileKeysDidFailToUpdateEndpoint(error: NSError): void;

	mobileKeysDidSetupEndpoint(): void;

	mobileKeysDidStartup(): void;

	mobileKeysDidTerminateEndpoint(): void;

	mobileKeysDidUpdateEndpoint(): void;

	mobileKeysShouldAttemptToOpenOpeningType(reader: MobileKeysReader, type: MobileKeysOpeningType): boolean;

	mobileKeysShouldInteractWithScannedReader?(mobileKeysReader: MobileKeysReader): boolean;

	mobileKeysUserDidUnlockGesture?(): void;
}
declare var MobileKeysManagerDelegate: {

	prototype: MobileKeysManagerDelegate;
};

interface MobileKeysManagerExtendedDelegate extends MobileKeysManagerDelegate {
}
declare var MobileKeysManagerExtendedDelegate: {

	prototype: MobileKeysManagerExtendedDelegate;
};

declare class MobileKeysMasterAuthenticationKeySet extends MobileKeysAuthenticationKeySet {

	static alloc(): MobileKeysMasterAuthenticationKeySet; // inherited from NSObject

	static new(): MobileKeysMasterAuthenticationKeySet; // inherited from NSObject

	constructor(o: { keyNumber: MobileKeysKeyNumber; masterKeyData: NSData; oid: NSData; diversifier: NSData; encryptionAlgorithm: MobileKeysEncryptionAlgorithm; global: boolean; });

	initWithKeyNumberMasterKeyDataOidDiversifierEncryptionAlgorithmGlobal(keyNumber: MobileKeysKeyNumber, masterKey: NSData, oid: NSData, diversifier: NSData, encryptionAlgorithm: MobileKeysEncryptionAlgorithm, global: boolean): this;
}

declare class MobileKeysMotionRecognizer extends NSObject {

	static alloc(): MobileKeysMotionRecognizer; // inherited from NSObject

	static new(): MobileKeysMotionRecognizer; // inherited from NSObject

	internalDelegate: MobileKeysMotionRecognizerDelegate;

	queue: NSObject;

	constructor(o: { delegate: MobileKeysMotionRecognizerDelegate; });

	initWithDelegate(delegate: MobileKeysMotionRecognizerDelegate): this;

	isTrackingRotation(): boolean;

	startTrackingRotation(): void;

	stopTrackingRotation(): void;
}

interface MobileKeysMotionRecognizerDelegate extends NSObjectProtocol {

	userMadeUnlockGesture(): void;
}
declare var MobileKeysMotionRecognizerDelegate: {

	prototype: MobileKeysMotionRecognizerDelegate;
};

declare class MobileKeysOpeningResult extends NSObject {

	static alloc(): MobileKeysOpeningResult; // inherited from NSObject

	static new(): MobileKeysOpeningResult; // inherited from NSObject

	status: MobileKeysOpeningStatusType;

	statusPayload: NSData;

	description(): string;
}

declare const enum MobileKeysOpeningStatusType {

	Success = 0,

	BluetoothCommunicationFailed = 1,

	TimedOut = 2,

	OutOfRange = 3,

	Busy = 4,

	MotionNotSupported = 5,

	TapNotSupported = 6,

	MobileKeyNotFound = 7,

	ReaderAntiPassback = 8,

	ReaderFailure = 9,

	BluetoothCommunicationFailedWithDeadLock = 10,

	DeviceTimedOutEarly = 11,

	DeviceTimedOutApdu = 12,

	DeviceTimedOutFragment = 13,

	ReaderTimedOutBle = 14,

	ReaderTimedOutApdu = 15,

	ReaderTimedOutFragment = 16
}

declare const enum MobileKeysOpeningType {

	Unknown = 0,

	Proximity = 1,

	Motion = 2,

	Seamless = 4,

	ApplicationSpecific = 8
}

declare var MobileKeysOptionApplicationId: string;

declare var MobileKeysOptionBeaconUUID: string;

declare var MobileKeysOptionVersion: string;

declare function MobileKeysPreconditionCheckTriggered(message: string): void;

declare var MobileKeysPreconditionFailedException: string;

declare class MobileKeysPrivacyKeySet extends NSObject {

	static alloc(): MobileKeysPrivacyKeySet; // inherited from NSObject

	static new(): MobileKeysPrivacyKeySet; // inherited from NSObject

	encryptionAlgorithm: MobileKeysEncryptionAlgorithm;

	keyNumber: MobileKeysKeyNumber;

	symmetricKeyPair: MobileKeysSymmetricKeyPair;

	usesPrivacy: boolean;

	constructor(o: { keyNumber: MobileKeysKeyNumber; symmetricKeyPair: MobileKeysSymmetricKeyPair; encryptionAlgorithm: MobileKeysEncryptionAlgorithm; });

	constructor(o: { withoutPrivacyWithKeyNumber: MobileKeysKeyNumber; });

	initWithKeyNumberSymmetricKeyPairEncryptionAlgorithm(keyNumber: MobileKeysKeyNumber, symmetricKeyPair: MobileKeysSymmetricKeyPair, encryptionAlgorithm: MobileKeysEncryptionAlgorithm): this;

	initWithWithoutPrivacyWithKeyNumber(keyNumber: MobileKeysKeyNumber): this;

	keyRef(): number;
}

declare class MobileKeysPutDataApduCommand extends MobileKeysApduCommand {

	static alloc(): MobileKeysPutDataApduCommand; // inherited from NSObject

	static new(): MobileKeysPutDataApduCommand; // inherited from NSObject

	constructor(o: { tag: MobileKeysSeosTag; andData: NSData; });

	constructor(o: { tag: MobileKeysSeosTag; andData: NSData; secureMessaging: boolean; });

	initWithTagAndData(tag: MobileKeysSeosTag, data: NSData): this;

	initWithTagAndDataSecureMessaging(tag: MobileKeysSeosTag, data: NSData, secureMessaging: boolean): this;
}

declare class MobileKeysReader extends NSObject implements NSCopying {

	static alloc(): MobileKeysReader; // inherited from NSObject

	static new(): MobileKeysReader; // inherited from NSObject

	readonly lastRSSIUpdate: Date;

	localName: string;

	name: string;

	supportedOpeningTypes: NSArray<any>;

	uuid: string;

	constructor(o: { name: string; uuid: string; protocolVersion: MobileKeysReaderProtocolVersion; rssiValueForOpeningTypes: NSDictionary<any, any>; });

	constructor(o: { name: string; uuid: string; protocolVersion: MobileKeysReaderProtocolVersion; supportedOpeningTypes: NSArray<any>; rssiValueForOpeningTypes: NSDictionary<any, any>; requiresTimeoutFreeSession: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	description(): string;

	initWithNameUuidProtocolVersionRssiValueForOpeningTypes(name: string, uuid: string, version: MobileKeysReaderProtocolVersion, rssiValuesForOpeningTypes: NSDictionary<any, any>): this;

	initWithNameUuidProtocolVersionSupportedOpeningTypesRssiValueForOpeningTypesRequiresTimeoutFreeSession(name: string, uuid: string, version: MobileKeysReaderProtocolVersion, supportedOpeningTypes: NSArray<any>, rssiValuesForOpeningTypes: NSDictionary<any, any>, requiresTimeoutFreeSession: boolean): this;

	isInRangeFor(openingType: MobileKeysOpeningType): boolean;

	meanRssi(): number;

	rssiHistory(): NSArray<MobileKeysRssiMeasurement>;

	rssiList(): NSArray<MobileKeysRssiMeasurement>;

	supportsOpeningType(openingType: MobileKeysOpeningType): boolean;
}

declare const enum MobileKeysReaderProtocolVersion {

	BleProtocolLegacy = 0,

	BleProtocolV1 = 1,

	BleProtocolUnknown = 65535
}

declare class MobileKeysRssiMeasurement extends NSObject {

	static alloc(): MobileKeysRssiMeasurement; // inherited from NSObject

	static new(): MobileKeysRssiMeasurement; // inherited from NSObject

	readonly measuredAtIntervalSince1970: number;

	readonly rssiValue: number;
}

declare const enum MobileKeysScanMode {

	OptimizePerformance = 0,

	OptimizePowerConsumption = 1
}

declare class MobileKeysSelectAidCommand extends MobileKeysApduCommand {

	static alloc(): MobileKeysSelectAidCommand; // inherited from NSObject

	static isSelectAid(command: MobileKeysApduCommand): boolean;

	static isSoftSeosAid(aidData: NSData): boolean;

	static isSupportedSeosAid(aidData: NSData): boolean;

	static new(): MobileKeysSelectAidCommand; // inherited from NSObject

	constructor(o: { customAid: NSData; });

	constructor(o: { seosAid: void; });

	initWithCustomAid(aidData: NSData): this;

	initWithSeosAid(): this;
}

declare class MobileKeysSelectionResult extends NSObject {

	static alloc(): MobileKeysSelectionResult; // inherited from NSObject

	static new(): MobileKeysSelectionResult; // inherited from NSObject

	diversifier: NSData;

	encAlgorithm: MobileKeysEncryptionAlgorithm;

	hashAlgorithm: MobileKeysHashAlgorithm;

	selectedOid: NSData;

	constructor(o: { hashAlgorithm: MobileKeysHashAlgorithm; encAlgorithm: MobileKeysEncryptionAlgorithm; selectedAdf: NSData; diversifier: NSData; });

	initWithHashAlgorithmEncAlgorithmSelectedAdfDiversifier(hashAlgorithm: MobileKeysHashAlgorithm, encAlgorithm: MobileKeysEncryptionAlgorithm, selectedAdf: NSData, diversifier: NSData): this;
}

declare const enum MobileKeysSelectionType {

	ADF = 0,

	GDF = 1,

	ExtendedADF = 2,

	EmptySeos = 3,

	None = 4
}

declare class MobileKeysSeosProvider extends NSObject {

	static alloc(): MobileKeysSeosProvider; // inherited from NSObject

	static new(): MobileKeysSeosProvider; // inherited from NSObject

	constructor(o: { connection: MobileKeysApduConnectionProtocol; });

	closeSeosSession(): boolean;

	currentSessionClient(): string;

	establishCardSessionUsingTerminalSessionCardSideParametersCardKeyNumberTerminalKeyNumberWithError(terminalSession: MobileKeysSeosSession, cardSideParameters: MobileKeysSessionParameters, cardKeyNumber: MobileKeysKeyNumber, terminalKeyNumber: MobileKeysKeyNumber): MobileKeysSeosSession;

	establishSessionWithParamsDescriptionWithError(sessionParameters: MobileKeysSessionParameters, description: string): MobileKeysSeosSession;

	initWithConnection(apduConnection: MobileKeysApduConnectionProtocol): this;

	isOpen(): boolean;

	isOpenForClient(sessionIdentifier: MobileKeysSessionClientIdentifier): boolean;

	isRemoteSession(): boolean;

	openRemoteSessionWithSelectAidDescriptionWithError(shouldSelectAid: boolean, description: string): boolean;

	openRemoteSessionWithSelectAidWithError(requireSelectAid: boolean): boolean;

	openSessionWithParamsDescriptionWithError(sessionParameters: MobileKeysSessionParameters, description: string): NSData;

	openSessionWithParamsWithError(sessionParameters: MobileKeysSessionParameters): NSData;

	processApduCommandWithError(apduCommand: MobileKeysApduCommand): MobileKeysApduResponse;

	reselectWithParamsWithError(sessionParameters: MobileKeysSessionParameters): NSData;
}

declare class MobileKeysSeosSession extends NSObject {

	static alloc(): MobileKeysSeosSession; // inherited from NSObject

	static new(): MobileKeysSeosSession; // inherited from NSObject

	currentlySelectedOid: NSData;

	sessionParameters: MobileKeysSessionParameters;

	usesSecureMessaging: boolean;

	constructor(o: { apduConnection: MobileKeysApduConnectionProtocol; });

	constructor(o: { apduConnection: MobileKeysApduConnectionProtocol; sessionParameters: MobileKeysSessionParameters; sessionSemaphore: NSObject; });

	activeConnection(): boolean;

	closeSessionWithError(): boolean;

	initWithApduConnection(apduConnection: MobileKeysApduConnectionProtocol): this;

	initWithApduConnectionSessionParametersSessionSemaphore(apduConnection: MobileKeysApduConnectionProtocol, sessionParameters: MobileKeysSessionParameters, sessionSemaphore: NSObject): this;

	processApduCommandAutoSplitLargeApduCommandsAutoJoinMultipleApduResponsesWithError(command: MobileKeysApduCommand, autoSplit: boolean, autoJoin: boolean): MobileKeysApduResponse;

	processApduCommandIgnoreChainingWithError(command: MobileKeysApduCommand, ignoreChaining: boolean): MobileKeysApduResponse;

	processApduCommandWithError(apduCommand: MobileKeysApduCommand): MobileKeysApduResponse;
}

declare const enum MobileKeysSeosSessionType {

	Contact = 1,

	Contactless = 2
}

declare class MobileKeysSeosTag extends NSObject {

	static alloc(): MobileKeysSeosTag; // inherited from NSObject

	static new(): MobileKeysSeosTag; // inherited from NSObject

	tag: number;

	tagNumber: number;

	constructor(o: { tagNumber: number; });

	initWithTagNumber(tagNumber: number): this;

	isConstructed(): boolean;

	toBytes(): NSData;

	toTagDescriptorExtendedHeader(selectorTag: NSData): NSData;

	toTagDescriptorSelectAll(): NSData;
}

declare const enum MobileKeysSessionClientIdentifier {

	Unspecified = 1,

	Ble = 2,

	Tsm = 3,

	Readback = 4,

	Internal = 5,

	ThirdParty = 6
}

declare class MobileKeysSessionParameters extends NSObject {

	static alloc(): MobileKeysSessionParameters; // inherited from NSObject

	static encryptionAlgorithmForNumber(number: number): MobileKeysEncryptionAlgorithm;

	static hashAlgorithmForNumber(number: number): MobileKeysHashAlgorithm;

	static new(): MobileKeysSessionParameters; // inherited from NSObject

	static numberForEncryptionAlgorithm(algorithm: MobileKeysEncryptionAlgorithm): number;

	static numberForHashAlgorithm(algorithm: MobileKeysHashAlgorithm): number;

	static parametersForMobileKeysBle(): MobileKeysSessionParameters;

	static parametersForMobileKeysCache(): MobileKeysSessionParameters;

	static parametersForMobileKeysReadback(): MobileKeysSessionParameters;

	static parametersForMobileKeysTsm(): MobileKeysSessionParameters;

	static parametersForNoSecurityWithSelectAidContacless(shouldSelectAid: boolean, contactless: boolean): MobileKeysSessionParameters;

	static parametersWithContactless(contactless: boolean): MobileKeysSessionParameters;

	apduConnectionPostSessionTeardownOptions: NSDictionary<any, any>;

	apduConnectionPreSessionSetupOptions: NSDictionary<any, any>;

	autoJoinMultipleApduResponses: boolean;

	autoSplitLargeApduCommands: boolean;

	contactless: boolean;

	mobileKeysAuthenticationKeySet: MobileKeysAuthenticationKeySet;

	mobileKeysKekKey: MobileKeysSymmetricKeyPair;

	mobileKeysPrivacyKeySet: MobileKeysPrivacyKeySet;

	mobileKeysSelectionType: MobileKeysSelectionType;

	mobileKeysSessionClientIdentifier: MobileKeysSessionClientIdentifier;

	oidSelectionList: NSArray<NSData>;

	requireSelectAid: boolean;

	timeoutInMilliSeconds: number;

	useTestVectors: boolean;

	constructor(o: { contactless: boolean; });

	constructor(o: { mobileKeysSelectionType: MobileKeysSelectionType; });

	constructor(o: { mobileKeysSelectionType: MobileKeysSelectionType; mobileKeysPrivacyKeySet: MobileKeysPrivacyKeySet; });

	constructor(o: { mobileKeysSelectionType: MobileKeysSelectionType; mobileKeysPrivacyKeySet: MobileKeysPrivacyKeySet; mobileKeysAuthenticationKeySet: MobileKeysAuthenticationKeySet; });

	initWithContactless(contactless: boolean): this;

	initWithMobileKeysSelectionType(mobileKeysSelectionType: MobileKeysSelectionType): this;

	initWithMobileKeysSelectionTypeMobileKeysPrivacyKeySet(mobileKeysSelectionType: MobileKeysSelectionType, mobileKeysPrivacyKeySet: MobileKeysPrivacyKeySet): this;

	initWithMobileKeysSelectionTypeMobileKeysPrivacyKeySetMobileKeysAuthenticationKeySet(mobileKeysSelectionType: MobileKeysSelectionType, mobileKeysPrivacyKeySet: MobileKeysPrivacyKeySet, mobileKeysAuthenticationKeySet: MobileKeysAuthenticationKeySet): this;

	setSingleOidSelection(singleOid: NSData): void;
}

declare class MobileKeysSymmetricKeyPair extends NSObject {

	static alloc(): MobileKeysSymmetricKeyPair; // inherited from NSObject

	static new(): MobileKeysSymmetricKeyPair; // inherited from NSObject

	encAlg: MobileKeysEncryptionAlgorithm;

	encKey: NSData;

	macKey: NSData;

	constructor(o: { encKey: NSData; macKey: NSData; });

	constructor(o: { macKey: NSData; encKey: NSData; encAlg: MobileKeysEncryptionAlgorithm; });

	initWithEncKeyMacKey(encKey: NSData, macKey: NSData): this;

	initWithMacKeyEncKeyEncAlg(macKey: NSData, encKey: NSData, encAlg: MobileKeysEncryptionAlgorithm): this;
}

declare class MobileKeysTimeoutConfiguration extends NSObject {

	static alloc(): MobileKeysTimeoutConfiguration; // inherited from NSObject

	static new(): MobileKeysTimeoutConfiguration; // inherited from NSObject

	maxConnectionTime: number;

	maxTimeBetweenApdus: number;

	maxTimeBetweenFragments: number;
}

declare var SeosMobileKeysSDKVersionNumber: number;

declare var SeosMobileKeysSDKVersionString: interop.Reference<number>;

declare const enum SeosStatusWord {

	APDU_STATUS_WORD_NO_ERROR = 36864,

	APDU_STATUS_WORD_APPLET_SELECT_FAILED = 27033,

	APDU_STATUS_WORD_BYTES_REMAINING = 24832,

	APDU_STATUS_WORD_CLA_NOT_SUPPORTED = 28160,

	APDU_STATUS_WORD_COMMAND_NOT_ALLOWED = 27014,

	APDU_STATUS_WORD_CONDITIONS_NOT_SATISFIED = 27013,

	APDU_STATUS_WORD_CORRECT_LENGTH = 27648,

	APDU_STATUS_WORD_DATA_INVALID = 27012,

	APDU_STATUS_WORD_FILE_FULL = 27268,

	APDU_STATUS_WORD_FILE_INVALID = 27011,

	APDU_STATUS_WORD_FILE_NOT_FOUND = 27266,

	APDU_STATUS_WORD_FUNC_NOT_SUPPORTED = 27265,

	APDU_STATUS_WORD_INCORRECT_P1P2 = 27270,

	APDU_STATUS_WORD_INS_NOT_SUPPORTED = 27904,

	APDU_STATUS_WORD_RECORD_NOT_FOUND = 27267,

	APDU_STATUS_WORD_SECURITY_STATUS_NOT_SATISFIED = 27010,

	APDU_STATUS_WORD_SECURE_MESSAGING_INCORRECT = 27016,

	APDU_STATUS_WORD_UNKNOWN = 28416,

	APDU_STATUS_WORD_WRONG_DATA = 27264,

	APDU_STATUS_WORD_WRONG_LENGTH = 26368,

	APDU_STATUS_WORD_WRONG_P1P2 = 27392
}
