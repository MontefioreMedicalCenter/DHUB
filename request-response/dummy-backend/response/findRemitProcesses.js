module.exports = [
	{
		batchCntrlNum: null,
		deliveryLogs: [
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver UHC HB split-out 835s from Payee Split process', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.HB_EPIC', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.HB_EPIC', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '13' }, fileId: 4073258, filename: '/Oscar.20220208150148.combined.835.SPLIT.HB_EPIC_63_of_137', id: null, instanceId: 4073257, messageProps: null, postFileId: 4073258, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: 'MustBeX12Prod', deliveryConfigId: 'LINUX.JMS.DISPATCH.CBR', deliveryDescr: 'Deliver EDI 835 to CBR', deliveryFailureAction: null, deliveryMode: 'JMS', deliveryOptions: 'Set.RouteList=xsplit.SplitDynamicMain~Set.SplitKey=HB_EPIC,PB_EPIC,HH_EPIC,CMO,HSR,FPP,MMG,HOMEHEALTH,DOSA,SATP,CERC~Set.ProfileId=TEST.MMC.DELIVER.UHC.SPLIT835', deliverySuccessAction: null, id: { deliveryControlId: 'MMC.DELIVER.GENERIC.835.CBR', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.GENERIC.835', receivingSystem: 'CBR', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '1' }, fileId: 4073257, filename: 'Oscar.20220208150148.combined.835', id: null, instanceId: 4073257, messageProps: null, postFileId: 4073257, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver UHC PB split-out 835s from Payee Split process', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.PB_EPIC', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.PB_EPIC', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '14' }, fileId: 4073259, filename: '/Oscar.20220208150148.combined.835.SPLIT.PB_EPIC_74_of_137', id: null, instanceId: 4073257, messageProps: null, postFileId: 4073259, status: null }
		],
		errMsg: null,
		filename: 'Oscar.20220208150148.combined.835',
		id: { facilityId: 'MHS', fileId: 4073257, serviceAreaId: 'MMC' },
		origBatchSize: null,
		percentComplete: null,
		pollControl: { activeFlag: null, configId: null, deliveryMode: null, deliveryProfile: 'MMC.DELIVER.GENERIC.835', id: null, initialProps: null, pollControlDescr: null, pollLogs: null, processName: null, processReceiver: 'MMC', processSender: 'Generic', processTransType: null, stepMask: '1,3,13', stepNo: null, systemId: null },
		pollStatusProps: null,
		status: ';13=Completed;1=Completed;14=Completed;3=Pending',
		totalRequest: null,
		totalResponse: null
	},
	{
		batchCntrlNum: null,
		deliveryLogs: [
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver UHC HB split-out 835s from Payee Split process', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.HB_EPIC', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.HB_EPIC', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '13' }, fileId: 4073260, filename: '/ELDER.302932439.020822.835.SPLIT.HB_EPIC_208_of_458', id: null, instanceId: 4073256, messageProps: null, postFileId: 4073260, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: 'MustBeX12Prod', deliveryConfigId: 'LINUX.JMS.DISPATCH.CBR', deliveryDescr: 'Deliver EDI 835 to CBR', deliveryFailureAction: null, deliveryMode: 'JMS', deliveryOptions: 'Set.RouteList=xsplit.SplitDynamicMain~Set.SplitKey=HB_EPIC,PB_EPIC,HH_EPIC,CMO,HSR,FPP,MMG,HOMEHEALTH,DOSA,SATP,CERC~Set.ProfileId=TEST.MMC.DELIVER.UHC.SPLIT835', deliverySuccessAction: null, id: { deliveryControlId: 'MMC.DELIVER.GENERIC.835.CBR', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.GENERIC.835', receivingSystem: 'CBR', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '1' }, fileId: 4073256, filename: 'ELDER.302932439.020822.835', id: null, instanceId: 4073256, messageProps: null, postFileId: 4073256, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver UHC PB split-out 835s from Payee Split process', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.PB_EPIC', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.PB_EPIC', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '14' }, fileId: 4073262, filename: '/ELDER.302932439.020822.835.SPLIT.PB_EPIC_248_of_458', id: null, instanceId: 4073256, messageProps: null, postFileId: 4073262, status: null }
		],
		errMsg: null,
		filename: 'ELDER.302932439.020822.835',
		id: { facilityId: 'MHS', fileId: 4073256, serviceAreaId: 'MMC' },
		origBatchSize: null,
		percentComplete: null,
		pollControl: { activeFlag: null, configId: null, deliveryMode: null, deliveryProfile: 'MMC.DELIVER.GENERIC.835', id: null, initialProps: null, pollControlDescr: null, pollLogs: null, processName: null, processReceiver: 'MMC', processSender: 'Generic', processTransType: null, stepMask: '1,3,13', stepNo: null, systemId: null },
		pollStatusProps: null,
		status: ';13=Completed;1=Completed;14=Completed;3=Pending',
		totalRequest: null,
		totalResponse: null
	},
	{
		batchCntrlNum: null,
		deliveryLogs: [
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver UHC HB split-out 835s from Payee Split process', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.HB_EPIC', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.HB_EPIC', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '13' }, fileId: 4073248, filename: '/AETNA.20220205120033.combined.835.SPLIT.HB_EPIC_91_of_163', id: null, instanceId: 4073247, messageProps: null, postFileId: 4073248, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver UHC PB split-out 835s from Payee Split process', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.PB_EPIC', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.PB_EPIC', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '14' }, fileId: 4073250, filename: '/AETNA.20220205120033.combined.835.SPLIT.PB_EPIC_70_of_163', id: null, instanceId: 4073247, messageProps: null, postFileId: 4073250, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: 'MustBeX12Prod', deliveryConfigId: 'LINUX.JMS.DISPATCH.CBR', deliveryDescr: 'Deliver EDI 835 to CBR', deliveryFailureAction: null, deliveryMode: 'JMS', deliveryOptions: 'Set.RouteList=xsplit.SplitDynamicMain~Set.SplitKey=HB_EPIC,PB_EPIC,HH_EPIC,CMO,HSR,FPP,MMG,HOMEHEALTH,DOSA,SATP,CERC~Set.ProfileId=TEST.MMC.DELIVER.UHC.SPLIT835', deliverySuccessAction: null, id: { deliveryControlId: 'MMC.DELIVER.GENERIC.835.CBR', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.GENERIC.835', receivingSystem: 'CBR', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '1' }, fileId: 4073247, filename: 'AETNA.20220205120033.combined.835', id: null, instanceId: 4073247, messageProps: null, postFileId: 4073247, status: null }
		],
		errMsg: null,
		filename: 'AETNA.20220205120033.combined.835',
		id: { facilityId: 'MHS', fileId: 4073247, serviceAreaId: 'MMC' },
		origBatchSize: null,
		percentComplete: null,
		pollControl: { activeFlag: null, configId: null, deliveryMode: null, deliveryProfile: 'MMC.DELIVER.GENERIC.835', id: null, initialProps: null, pollControlDescr: null, pollLogs: null, processName: null, processReceiver: 'MMC', processSender: 'Generic', processTransType: null, stepMask: '1,3,13', stepNo: null, systemId: null },
		pollStatusProps: null,
		status: ';13=Completed;14=Completed;1=Completed;3=Pending',
		totalRequest: null,
		totalResponse: null
	},
	{
		batchCntrlNum: null,
		deliveryLogs: [
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: 'MustBeX12Prod', deliveryConfigId: 'LINUX.JMS.DISPATCH.CBR', deliveryDescr: 'Deliver EDI 835 to CBR', deliveryFailureAction: null, deliveryMode: 'JMS', deliveryOptions: 'Set.RouteList=xsplit.SplitDynamicMain~Set.SplitKey=HB_EPIC,PB_EPIC,HH_EPIC,CMO,HSR,FPP,MMG,HOMEHEALTH,DOSA,SATP,CERC~Set.ProfileId=TEST.MMC.DELIVER.UHC.SPLIT835', deliverySuccessAction: null, id: { deliveryControlId: 'MMC.DELIVER.GENERIC.835.CBR', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.GENERIC.835', receivingSystem: 'CBR', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '1' }, fileId: 4073246, filename: 'MedicareA.20220205144023.combined.835', id: null, instanceId: 4073246, messageProps: null, postFileId: 4073246, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver UHC HB split-out 835s from Payee Split process', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.HB_EPIC', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.HB_EPIC', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '13' }, fileId: 4073251, filename: '/MedicareA.20220205144023.combined.835.SPLIT.HB_EPIC_1092_of_1092', id: null, instanceId: 4073246, messageProps: null, postFileId: 4073251, status: null }
		],
		errMsg: null,
		filename: 'MedicareA.20220205144023.combined.835',
		id: { facilityId: 'MHS', fileId: 4073246, serviceAreaId: 'MMC' },
		origBatchSize: null,
		percentComplete: null,
		pollControl: { activeFlag: null, configId: null, deliveryMode: null, deliveryProfile: 'MMC.DELIVER.GENERIC.835', id: null, initialProps: null, pollControlDescr: null, pollLogs: null, processName: null, processReceiver: 'MMC', processSender: 'Generic', processTransType: null, stepMask: '1,3,13', stepNo: null, systemId: null },
		pollStatusProps: null,
		status: ';1=Completed;13=Completed;3=Pending',
		totalRequest: null,
		totalResponse: null
	},
	{
		batchCntrlNum: null,
		deliveryLogs: [
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver UHC PB split-out 835s from Payee Split process', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.DOSA', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.DOSA', receivingSystem: 'DOSA', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '17' }, fileId: 4073238, filename: '/CMO036198_1_20220205061000_5010.835.SPLIT.DOSA_7_of_7', id: null, instanceId: 4073237, messageProps: null, postFileId: 4073238, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: 'MustBeX12Prod', deliveryConfigId: 'LINUX.JMS.DISPATCH.CBR', deliveryDescr: 'Deliver EDI 835 to CBR', deliveryFailureAction: null, deliveryMode: 'JMS', deliveryOptions: 'Set.RouteList=xsplit.SplitDynamicMain~Set.SplitKey=HB_EPIC,PB_EPIC,HH_EPIC,CMO,HSR,FPP,MMG,HOMEHEALTH,DOSA,SATP,CERC~Set.ProfileId=TEST.MMC.DELIVER.UHC.SPLIT835', deliverySuccessAction: null, id: { deliveryControlId: 'MMC.DELIVER.GENERIC.835.CBR', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.GENERIC.835', receivingSystem: 'CBR', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '1' }, fileId: 4073237, filename: 'CMO036198_1_20220205061000_5010.835', id: null, instanceId: 4073237, messageProps: null, postFileId: 4073237, status: null }
		],
		errMsg: null,
		filename: 'CMO036198_1_20220205061000_5010.835',
		id: { facilityId: 'MHS', fileId: 4073237, serviceAreaId: 'MMC' },
		origBatchSize: null,
		percentComplete: null,
		pollControl: { activeFlag: null, configId: null, deliveryMode: null, deliveryProfile: 'MMC.DELIVER.GENERIC.835', id: null, initialProps: null, pollControlDescr: null, pollLogs: null, processName: null, processReceiver: 'MMC', processSender: 'Generic', processTransType: null, stepMask: '1,3,13', stepNo: null, systemId: null },
		pollStatusProps: null,
		status: ';17=Completed;1=Completed;3=Pending;13=Pending',
		totalRequest: null,
		totalResponse: null
	},
	{
		batchCntrlNum: null,
		deliveryLogs: [
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: 'MustBeX12Prod', deliveryConfigId: 'LINUX.JMS.DISPATCH.CBR', deliveryDescr: 'Deliver EDI 835 to CBR', deliveryFailureAction: null, deliveryMode: 'JMS', deliveryOptions: 'Set.RouteList=xsplit.SplitDynamicMain~Set.SplitKey=HB_EPIC,PB_EPIC,HH_EPIC,CMO,HSR,FPP,MMG,HOMEHEALTH,DOSA,SATP,CERC~Set.ProfileId=TEST.MMC.DELIVER.UHC.SPLIT835', deliverySuccessAction: null, id: { deliveryControlId: 'MMC.DELIVER.GENERIC.835.CBR', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.GENERIC.835', receivingSystem: 'CBR', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '1' }, fileId: 4073236, filename: '5010835.20220205.9314', id: null, instanceId: 4073236, messageProps: null, postFileId: 4073236, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver UHC HB split-out 835s from Payee Split process', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.HB_EPIC', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.HB_EPIC', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '13' }, fileId: 4073243, filename: '/5010835.20220205.9314.SPLIT.HB_EPIC_5_of_2563', id: null, instanceId: 4073236, messageProps: null, postFileId: 4073243, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver UHC PB split-out 835s from Payee Split process', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.PB_EPIC', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.PB_EPIC', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '14' }, fileId: 4073244, filename: '/5010835.20220205.9314.SPLIT.PB_EPIC_2558_of_2563', id: null, instanceId: 4073236, messageProps: null, postFileId: 4073244, status: null }
		],
		errMsg: null,
		filename: '5010835.20220205.9314',
		id: { facilityId: 'MHS', fileId: 4073236, serviceAreaId: 'MMC' },
		origBatchSize: null,
		percentComplete: null,
		pollControl: { activeFlag: null, configId: null, deliveryMode: null, deliveryProfile: 'MMC.DELIVER.GENERIC.835', id: null, initialProps: null, pollControlDescr: null, pollLogs: null, processName: null, processReceiver: 'MMC', processSender: 'Generic', processTransType: null, stepMask: '1,3,13', stepNo: null, systemId: null },
		pollStatusProps: null,
		status: ';1=Completed;13=Completed;14=Completed;3=Pending',
		totalRequest: null,
		totalResponse: null
	},
	{
		batchCntrlNum: null,
		deliveryLogs: [
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver UHC HHA split-out 835s from Payee Split process', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.HOMEHEALTH', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.HOMEHEALTH', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '12' }, fileId: 4073241, filename: '/CMO835_EMDEON_20220203_20220205.X12.SPLIT.HOMEHEALTH_9_of_1422', id: null, instanceId: 4073235, messageProps: null, postFileId: 4073241, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: 'MustBeX12Prod', deliveryConfigId: 'LINUX.JMS.DISPATCH.CBR', deliveryDescr: 'Deliver EDI 835 to CBR', deliveryFailureAction: null, deliveryMode: 'JMS', deliveryOptions: 'Set.RouteList=xsplit.SplitDynamicMain~Set.SplitKey=HB_EPIC,PB_EPIC,HH_EPIC,CMO,HSR,FPP,MMG,HOMEHEALTH,DOSA,SATP,CERC~Set.ProfileId=TEST.MMC.DELIVER.UHC.SPLIT835', deliverySuccessAction: null, id: { deliveryControlId: 'MMC.DELIVER.GENERIC.835.CBR', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.GENERIC.835', receivingSystem: 'CBR', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '1' }, fileId: 4073235, filename: 'CMO835_EMDEON_20220203_20220205.X12', id: null, instanceId: 4073235, messageProps: null, postFileId: 4073235, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver UHC HSR split-out 835s from Payee Split process', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.HSR', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.HSR', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '2,3,5' }, fileId: 4073240, filename: '/CMO835_EMDEON_20220203_20220205.X12.SPLIT.HSR_9_of_1422', id: null, instanceId: 4073235, messageProps: null, postFileId: 4073240, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver UHC HB split-out 835s from Payee Split process', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.HB_EPIC', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.HB_EPIC', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '13' }, fileId: 4073239, filename: '/CMO835_EMDEON_20220203_20220205.X12.SPLIT.HB_EPIC_1404_of_1422', id: null, instanceId: 4073235, messageProps: null, postFileId: 4073239, status: null }
		],
		errMsg: null,
		filename: 'CMO835_EMDEON_20220203_20220205.X12',
		id: { facilityId: 'MHS', fileId: 4073235, serviceAreaId: 'MMC' },
		origBatchSize: null,
		percentComplete: null,
		pollControl: { activeFlag: null, configId: null, deliveryMode: null, deliveryProfile: 'MMC.DELIVER.GENERIC.835', id: null, initialProps: null, pollControlDescr: null, pollLogs: null, processName: null, processReceiver: 'MMC', processSender: 'Generic', processTransType: null, stepMask: '1,3,13', stepNo: null, systemId: null },
		pollStatusProps: null,
		status: ';12=Completed;1=Completed;2=Completed;3=Completed;5=Completed;13=Completed',
		totalRequest: null,
		totalResponse: null
	},
	{
		batchCntrlNum: null,
		deliveryLogs: [
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: 'MustBeX12Prod', deliveryConfigId: 'LINUX.JMS.DISPATCH.CBR', deliveryDescr: 'Deliver EDI 835 to CBR', deliveryFailureAction: null, deliveryMode: 'JMS', deliveryOptions: 'Set.RouteList=xsplit.SplitDynamicMain~Set.SplitKey=HB_EPIC,PB_EPIC,HH_EPIC,CMO,HSR,FPP,MMG,HOMEHEALTH,DOSA,SATP,CERC~Set.ProfileId=TEST.MMC.DELIVER.UHC.SPLIT835', deliverySuccessAction: null, id: { deliveryControlId: 'MMC.DELIVER.GENERIC.835.CBR', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.GENERIC.835', receivingSystem: 'CBR', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '1' }, fileId: 4073230, filename: 'Amerigroup.20220207122015.combined.835', id: null, instanceId: 4073230, messageProps: null, postFileId: 4073230, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver UHC PB split-out 835s from Payee Split process', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.PB_EPIC', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.PB_EPIC', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '14' }, fileId: 4073234, filename: '/Amerigroup.20220207122015.combined.835.SPLIT.PB_EPIC_6_of_6', id: null, instanceId: 4073230, messageProps: null, postFileId: 4073234, status: null }
		],
		errMsg: null,
		filename: 'Amerigroup.20220207122015.combined.835',
		id: { facilityId: 'MHS', fileId: 4073230, serviceAreaId: 'MMC' },
		origBatchSize: null,
		percentComplete: null,
		pollControl: { activeFlag: null, configId: null, deliveryMode: null, deliveryProfile: 'MMC.DELIVER.GENERIC.835', id: null, initialProps: null, pollControlDescr: null, pollLogs: null, processName: null, processReceiver: 'MMC', processSender: 'Generic', processTransType: null, stepMask: '1,3,13', stepNo: null, systemId: null },
		pollStatusProps: null,
		status: ';1=Completed;14=Completed;3=Pending;13=Pending',
		totalRequest: null,
		totalResponse: null
	},
	{
		batchCntrlNum: null,
		deliveryLogs: [
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver UHC PB split-out 835s from Payee Split process', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.PB_EPIC', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.PB_EPIC', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '14' }, fileId: 4073233, filename: '/WELLCARE.20220208104121.combined.835.SPLIT.PB_EPIC_18_of_72', id: null, instanceId: 4073228, messageProps: null, postFileId: 4073233, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: 'MustBeX12Prod', deliveryConfigId: 'LINUX.JMS.DISPATCH.CBR', deliveryDescr: 'Deliver EDI 835 to CBR', deliveryFailureAction: null, deliveryMode: 'JMS', deliveryOptions: 'Set.RouteList=xsplit.SplitDynamicMain~Set.SplitKey=HB_EPIC,PB_EPIC,HH_EPIC,CMO,HSR,FPP,MMG,HOMEHEALTH,DOSA,SATP,CERC~Set.ProfileId=TEST.MMC.DELIVER.UHC.SPLIT835', deliverySuccessAction: null, id: { deliveryControlId: 'MMC.DELIVER.GENERIC.835.CBR', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.GENERIC.835', receivingSystem: 'CBR', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '1' }, fileId: 4073228, filename: 'WELLCARE.20220208104121.combined.835', id: null, instanceId: 4073228, messageProps: null, postFileId: 4073228, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver UHC HB split-out 835s from Payee Split process', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.HB_EPIC', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.HB_EPIC', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '13' }, fileId: 4073231, filename: '/WELLCARE.20220208104121.combined.835.SPLIT.HB_EPIC_47_of_72', id: null, instanceId: 4073228, messageProps: null, postFileId: 4073231, status: null }
		],
		errMsg: null,
		filename: 'WELLCARE.20220208104121.combined.835',
		id: { facilityId: 'MHS', fileId: 4073228, serviceAreaId: 'MMC' },
		origBatchSize: null,
		percentComplete: null,
		pollControl: { activeFlag: null, configId: null, deliveryMode: null, deliveryProfile: 'MMC.DELIVER.GENERIC.835', id: null, initialProps: null, pollControlDescr: null, pollLogs: null, processName: null, processReceiver: 'MMC', processSender: 'Generic', processTransType: null, stepMask: '1,3,13', stepNo: null, systemId: null },
		pollStatusProps: null,
		status: ';14=Completed;1=Completed;13=Completed;3=Pending',
		totalRequest: null,
		totalResponse: null
	},
	{
		batchCntrlNum: null,
		deliveryLogs: [
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: 'MustBeX12Prod', deliveryConfigId: 'LINUX.JMS.DISPATCH.CBR', deliveryDescr: 'Deliver EDI 835 to CBR', deliveryFailureAction: null, deliveryMode: 'JMS', deliveryOptions: 'Set.RouteList=xsplit.SplitDynamicMain~Set.SplitKey=HB_EPIC,PB_EPIC,HH_EPIC,CMO,HSR,FPP,MMG,HOMEHEALTH,DOSA,SATP,CERC~Set.ProfileId=TEST.MMC.DELIVER.UHC.SPLIT835', deliverySuccessAction: null, id: { deliveryControlId: 'MMC.DELIVER.GENERIC.835.CBR', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.GENERIC.835', receivingSystem: 'CBR', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '1' }, fileId: 4073227, filename: 'R220207084453.2318.835.0000', id: null, instanceId: 4073227, messageProps: null, postFileId: 4073227, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver UHC PB split-out 835s from Payee Split process', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.PB_EPIC', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.PB_EPIC', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '14' }, fileId: 4073229, filename: '/R220207084453.2318.835.0000.SPLIT.PB_EPIC_12_of_12', id: null, instanceId: 4073227, messageProps: null, postFileId: 4073229, status: null }
		],
		errMsg: null,
		filename: 'R220207084453.2318.835.0000',
		id: { facilityId: 'MHS', fileId: 4073227, serviceAreaId: 'MMC' },
		origBatchSize: null,
		percentComplete: null,
		pollControl: { activeFlag: null, configId: null, deliveryMode: null, deliveryProfile: 'MMC.DELIVER.GENERIC.835', id: null, initialProps: null, pollControlDescr: null, pollLogs: null, processName: null, processReceiver: 'MMC', processSender: 'Generic', processTransType: null, stepMask: '1,3,13', stepNo: null, systemId: null },
		pollStatusProps: null,
		status: ';1=Completed;14=Completed;3=Pending;13=Pending',
		totalRequest: null,
		totalResponse: null
	},
	{
		batchCntrlNum: null,
		deliveryLogs: [
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: 'MustBeX12Prod', deliveryConfigId: 'LINUX.JMS.DISPATCH.CBR', deliveryDescr: 'Deliver EDI 835 to CBR', deliveryFailureAction: null, deliveryMode: 'JMS', deliveryOptions: 'Set.RouteList=xsplit.SplitDynamicMain~Set.SplitKey=HB_EPIC,PB_EPIC,HH_EPIC,CMO,HSR,FPP,MMG,HOMEHEALTH,DOSA,SATP,CERC~Set.ProfileId=TEST.MMC.DELIVER.UHC.SPLIT835', deliverySuccessAction: null, id: { deliveryControlId: 'MMC.DELIVER.GENERIC.835.CBR', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.GENERIC.835', receivingSystem: 'CBR', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '1' }, fileId: 4073223, filename: 'UHC.20220208100211.combined.835', id: null, instanceId: 4073223, messageProps: null, postFileId: 4073223, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver UHC HB split-out 835s from Payee Split process', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.HB_EPIC', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.HB_EPIC', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '13' }, fileId: 4073224, filename: '/UHC.20220208100211.combined.835.SPLIT.HB_EPIC_178_of_548', id: null, instanceId: 4073223, messageProps: null, postFileId: 4073224, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver UHC PB split-out 835s from Payee Split process', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.PB_EPIC', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'TEST.MMC.DELIVER.UHC.SPLIT835.SPLIT.PB_EPIC', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '14' }, fileId: 4073226, filename: '/UHC.20220208100211.combined.835.SPLIT.PB_EPIC_367_of_548', id: null, instanceId: 4073223, messageProps: null, postFileId: 4073226, status: null }
		],
		errMsg: null,
		filename: 'UHC.20220208100211.combined.835',
		id: { facilityId: 'MHS', fileId: 4073223, serviceAreaId: 'MMC' },
		origBatchSize: null,
		percentComplete: null,
		pollControl: { activeFlag: null, configId: null, deliveryMode: null, deliveryProfile: 'MMC.DELIVER.GENERIC.835', id: null, initialProps: null, pollControlDescr: null, pollLogs: null, processName: null, processReceiver: 'MMC', processSender: 'Generic', processTransType: null, stepMask: '1,3,13', stepNo: null, systemId: null },
		pollStatusProps: null,
		status: ';1=Completed;13=Completed;14=Completed;3=Pending',
		totalRequest: null,
		totalResponse: null
	},
	{
		batchCntrlNum: null,
		deliveryLogs: [
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: 'MustBeX12Prod', deliveryConfigId: 'JMS.DISPATCH.CBR', deliveryDescr: 'Deliver EAGLE BlueCross 835 to CBR', deliveryFailureAction: null, deliveryMode: 'JMS', deliveryOptions: 'Set.RouteList=xsplit.SplitDynamicMain~Set.SplitKey=FPP,PB_EPIC,HSR,HB_EPIC,CMO,SATP,DOSA,CERC~Set.SendOrigFile=Y', deliverySuccessAction: null, id: { deliveryControlId: 'EAGLE.DELIVER.BC.835.CBR', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'EAGLE.DELIVER.BC.835', receivingSystem: 'EAGLE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: 'BCBS', stepNo: '1' }, fileId: 4073215, filename: 'BlueCross.20220208132136.combined.835', id: null, instanceId: 4073214, messageProps: null, postFileId: 4073215, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'EPIC.HB.DELIVER.TREKS.PROD.835', deliveryDescr: 'Deliver HB-EPIC BlueCross 835 COMBINED to TREKS', deliveryFailureAction: null, deliveryMode: 'FTP', deliveryOptions: 'Set.DontCreateDirs=Y', deliverySuccessAction: null, id: { deliveryControlId: 'EAGLE.DELIVER.BC.835.TREKS.HB_EPIC', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'EAGLE.DELIVER.BC.835.SPLIT.HB_EPIC', receivingSystem: 'HB-TREKS', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '4' }, fileId: 4073217, filename: '/TREKS/EPIC/835/BlueCross.20220208132136.combined.835.SPLIT.HB_EPIC_434_of_676_20220208.132140', id: null, instanceId: 4073214, messageProps: null, postFileId: 4073217, status: null }
		],
		errMsg: null,
		filename: 'BlueCross.20220208132136.combined.835',
		id: { facilityId: 'MHS', fileId: 4073215, serviceAreaId: 'MMC' },
		origBatchSize: null,
		percentComplete: null,
		pollControl: { activeFlag: null, configId: null, deliveryMode: null, deliveryProfile: 'EAGLE.DELIVER.BC.835', id: null, initialProps: null, pollControlDescr: null, pollLogs: null, processName: null, processReceiver: 'MMC', processSender: 'BlueCross', processTransType: null, stepMask: '1,2,3,5', stepNo: null, systemId: null },
		pollStatusProps: null,
		status: ';1=Completed;4=Completed;2=Pending;3=Pending;5=Pending',
		totalRequest: null,
		totalResponse: null
	},
	{
		batchCntrlNum: null,
		deliveryLogs: [
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'EPIC.HB.DELIVER.TREKS.PROD.835', deliveryDescr: 'Deliver EPIC Oxford HSR split-out 835 to TREKS', deliveryFailureAction: null, deliveryMode: 'FTP', deliveryOptions: 'Set.DontCreateDirs=Y', deliverySuccessAction: null, id: { deliveryControlId: 'MMC.DELIVER.OXFORD.SPLIT835.SPLIT.HB-EPIC.TREKS', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.OXFORD.SPLIT835.SPLIT.HB_EPIC', receivingSystem: 'HB-TREKS', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '4' }, fileId: 4073210, filename: '/TREKS/EPIC/835/OXFORD.20220208114716.combined.835.SPLIT.HB_EPIC_94_of_94_20220208.114718', id: null, instanceId: 4073208, messageProps: null, postFileId: 4073210, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'JMS.DISPATCH.CBR', deliveryDescr: 'NOT USED Deliver Oxford 835 (original 835) from Payee Split process', deliveryFailureAction: null, deliveryMode: 'JMS', deliveryOptions: 'Set.RouteList=xsplit.SplitDynamicMain~Set.SplitKey=HB_EPIC,PB_EPIC,HH_EPIC,HSR,FPP,MMG,HOMEHEALTH,CMO,DOSA,SATP,CERC~Set.SendOrigFile=N~Set.ProfileId=MMC.DELIVER.OXFORD.SPLIT835', deliverySuccessAction: null, id: { deliveryControlId: 'MMC.DELIVER.OXFORD.SPLIT835', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.OXFORD.SPLIT835.CBR', receivingSystem: 'CBR', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '1' }, fileId: 4073209, filename: 'OXFORD.20220208114716.combined.835', id: null, instanceId: 4073208, messageProps: null, postFileId: 4073209, status: null }
		],
		errMsg: null,
		filename: 'OXFORD.20220208114716.combined.835',
		id: { facilityId: 'MHS', fileId: 4073209, serviceAreaId: 'MMC' },
		origBatchSize: null,
		percentComplete: null,
		pollControl: { activeFlag: null, configId: null, deliveryMode: null, deliveryProfile: 'MMC.DELIVER.OXFORD.SPLIT835.CBR', id: null, initialProps: null, pollControlDescr: null, pollLogs: null, processName: null, processReceiver: 'MMC', processSender: 'OXFORD', processTransType: null, stepMask: '1,4,13', stepNo: null, systemId: null },
		pollStatusProps: null,
		status: ';4=Completed;1=Completed;13=Pending',
		totalRequest: null,
		totalResponse: null
	},
	{
		batchCntrlNum: null,
		deliveryLogs: [
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver CIGNA split out 835s from Payee Split process to PB EPIC', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'EPIC.PB.DELIVER.CIGNA.EPIC.NOWHERE', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.CIGNA.835.SPLIT.PB_EPIC', receivingSystem: 'PB-EPIC', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '14' }, fileId: 4073164, filename: '/CIGNA.20220103190005.combined.835.SPLIT.PB_EPIC_71_of_430', id: null, instanceId: 4073160, messageProps: null, postFileId: 4073164, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver Combined Cigna 835 to NOWHERE', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: 'DupChkAlertAction', id: { deliveryControlId: 'MMC.DELIVER.COMBINED.CIGNA.835.ORIG', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.COMBINED.CIGNA.835', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '1' }, fileId: 4073161, filename: '/CIGNA.20220103190005.combined.835', id: null, instanceId: 4073160, messageProps: null, postFileId: 4073161, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver CIGNA split out 835s from Payee Split process to HB EPIC', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'EPIC.HB.DELIVER.CIGNA.EPIC.NOWHERE', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.CIGNA.835.SPLIT.HB_EPIC', receivingSystem: 'HB-EPIC', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '13' }, fileId: 4073163, filename: '/CIGNA.20220103190005.combined.835.SPLIT.HB_EPIC_359_of_430', id: null, instanceId: 4073160, messageProps: null, postFileId: 4073163, status: null }
		],
		errMsg: null,
		filename: '/CIGNA.20220103190005.combined.835',
		id: { facilityId: 'MHS', fileId: 4073161, serviceAreaId: 'MMC' },
		origBatchSize: null,
		percentComplete: null,
		pollControl: { activeFlag: null, configId: null, deliveryMode: null, deliveryProfile: 'MMC.DELIVER.COMBINED.CIGNA.835', id: null, initialProps: null, pollControlDescr: null, pollLogs: null, processName: null, processReceiver: 'MMC', processSender: 'CIGNA', processTransType: null, stepMask: '1,3,13', stepNo: null, systemId: null },
		pollStatusProps: null,
		status: ';14=Completed;1=Completed;13=Completed;3=Pending',
		totalRequest: null,
		totalResponse: null
	},
	{
		batchCntrlNum: null,
		deliveryLogs: [
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver Combined Cigna 835 to NOWHERE', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: 'DupChkAlertAction', id: { deliveryControlId: 'MMC.DELIVER.COMBINED.CIGNA.835.ORIG', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.COMBINED.CIGNA.835', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '1' }, fileId: 4073154, filename: '/CIGNA.20220103184824.combined.835', id: null, instanceId: 4073153, messageProps: null, postFileId: 4073154, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver CIGNA split out 835s from Payee Split process to PB EPIC', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'EPIC.PB.DELIVER.CIGNA.EPIC.NOWHERE', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.CIGNA.835.SPLIT.PB_EPIC', receivingSystem: 'PB-EPIC', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '14' }, fileId: 4073159, filename: '/CIGNA.20220103184824.combined.835.SPLIT.PB_EPIC_1561_of_2191', id: null, instanceId: 4073153, messageProps: null, postFileId: 4073159, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver CIGNA split out 835s from Payee Split process to HB EPIC', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'EPIC.HB.DELIVER.CIGNA.EPIC.NOWHERE', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.CIGNA.835.SPLIT.HB_EPIC', receivingSystem: 'HB-EPIC', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '13' }, fileId: 4073156, filename: '/CIGNA.20220103184824.combined.835.SPLIT.HB_EPIC_618_of_2191', id: null, instanceId: 4073153, messageProps: null, postFileId: 4073156, status: null }
		],
		errMsg: null,
		filename: '/CIGNA.20220103184824.combined.835',
		id: { facilityId: 'MHS', fileId: 4073154, serviceAreaId: 'MMC' },
		origBatchSize: null,
		percentComplete: null,
		pollControl: { activeFlag: null, configId: null, deliveryMode: null, deliveryProfile: 'MMC.DELIVER.COMBINED.CIGNA.835', id: null, initialProps: null, pollControlDescr: null, pollLogs: null, processName: null, processReceiver: 'MMC', processSender: 'CIGNA', processTransType: null, stepMask: '1,3,13', stepNo: null, systemId: null },
		pollStatusProps: null,
		status: ';1=Completed;14=Completed;13=Completed;3=Pending',
		totalRequest: null,
		totalResponse: null
	},
	{
		batchCntrlNum: null,
		deliveryLogs: [
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver CIGNA split out 835s from Payee Split process to HB EPIC', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'EPIC.HB.DELIVER.CIGNA.EPIC.NOWHERE', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.CIGNA.835.SPLIT.HB_EPIC', receivingSystem: 'HB-EPIC', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '13' }, fileId: 4073144, filename: '/CIGNA.20220102181607.combined.835.SPLIT.HB_EPIC_95_of_280', id: null, instanceId: 4073141, messageProps: null, postFileId: 4073144, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver CIGNA split out 835s from Payee Split process to HB EPIC', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'EPIC.HB.DELIVER.CIGNA.MEAC_PB', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.CIGNA.835.SPLIT.MEAC_PB', receivingSystem: 'HB-EPIC', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '22' }, fileId: 4073145, filename: '/CIGNA.20220102181607.combined.835.SPLIT.MEAC_PB_1_of_280', id: null, instanceId: 4073141, messageProps: null, postFileId: 4073145, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver CIGNA split out 835s from Payee Split process to PB EPIC', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'EPIC.PB.DELIVER.CIGNA.EPIC.NOWHERE', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.CIGNA.835.SPLIT.PB_EPIC', receivingSystem: 'PB-EPIC', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '14' }, fileId: 4073148, filename: '/CIGNA.20220102181607.combined.835.SPLIT.PB_EPIC_181_of_280', id: null, instanceId: 4073141, messageProps: null, postFileId: 4073148, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver CIGNA split out 835s from Payee Split process to HB EPIC', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: null, id: { deliveryControlId: 'EPIC.HB.DELIVER.CIGNA.MEAC_HB', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.CIGNA.835.SPLIT.MEAC_HB', receivingSystem: 'HB-EPIC', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '21' }, fileId: 4073147, filename: '/CIGNA.20220102181607.combined.835.SPLIT.MEAC_HB_2_of_280', id: null, instanceId: 4073141, messageProps: null, postFileId: 4073147, status: null },
			{ deliveryControl: { activeFlag: 'Y', contentCheckClass: null, deliveryConfigId: 'NOWHERE', deliveryDescr: 'Deliver Combined Cigna 835 to NOWHERE', deliveryFailureAction: null, deliveryMode: 'NOWHERE', deliveryOptions: null, deliverySuccessAction: 'DupChkAlertAction', id: { deliveryControlId: 'MMC.DELIVER.COMBINED.CIGNA.835.ORIG', facilityId: 'MHS', serviceAreaId: 'MMC' }, profileId: 'MMC.DELIVER.COMBINED.CIGNA.835', receivingSystem: 'NOWHERE', retryCount: 0, retryDelayMinutes: 0, sendNotification: 'N', senderName: null, stepNo: '1' }, fileId: 4073142, filename: '/CIGNA.20220102181607.combined.835', id: null, instanceId: 4073141, messageProps: null, postFileId: 4073142, status: null }
		],
		errMsg: null,
		filename: '/CIGNA.20220102181607.combined.835',
		id: { facilityId: 'MHS', fileId: 4073142, serviceAreaId: 'MMC' },
		origBatchSize: null,
		percentComplete: null,
		pollControl: { activeFlag: null, configId: null, deliveryMode: null, deliveryProfile: 'MMC.DELIVER.COMBINED.CIGNA.835', id: null, initialProps: null, pollControlDescr: null, pollLogs: null, processName: null, processReceiver: 'MMC', processSender: 'CIGNA', processTransType: null, stepMask: '1,3,13', stepNo: null, systemId: null },
		pollStatusProps: null,
		status: ';13=Completed;22=Completed;14=Completed;21=Completed;1=Completed;3=Pending',
		totalRequest: null,
		totalResponse: null
	}
]
