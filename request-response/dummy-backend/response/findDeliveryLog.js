module.exports = [
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "EPIC.PB.DELIVER.COVID.277.SMTP",
            "deliveryDescr": "Deliver covid19 277 reports",
            "deliveryFailureAction": null,
            "deliveryMode": "SMTP",
            "deliveryOptions": null,
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "EPIC.PB.DELIVER.COVID.277.OUT",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "EPIC.PB.DELIVER.COVID.277.OUT",
            "receivingSystem": "EMAIL",
            "retryCount": 0,
            "retryDelayMinutes": 0,
            "sendNotification": "Y",
            "senderName": "COVID19",
            "stepNo": "-1"
        },
        "fileId": 4071862,
        "filename": "Atttachment",
        "id": {
            "configId": "EPIC.PB.DELIVER.COVID.277.SMTP",
            "deliveryControlId": "EPIC.PB.DELIVER.COVID.277.OUT",
            "logDatetime": "2021-08-03 15:15:03"
        },
        "instanceId": 4071861,
        "messageProps": "#Tue Aug 03 11:15:03 EDT 2021\nProfileId=EPIC.PB.DELIVER.COVID.277.OUT\nProcessName=Report\nDeliveryControlId=EPIC.PB.DELIVER.COVID.277.OUT\nRouteList=genericxlat.ZipRouter\nFileDate=20210803.111001\nDeliveredFileName=Atttachment\nSaveOriginals=Y\nJmsDestination=DeliveryHubQueue\nMessageType=text\nZipFileCount=2\nMillisecondsSincePickup=456\nInstanceId=4071861\nReceivingSystem=EMAIL\nProcessReceiver=Email\nPollerConfigId=EPIC.PB.PICKUP.COVID.277.OUT.TRIG\nZipFilename=COVID19_277_PB\nZipRegex=.*\\\\.277.*\nPickupDate=20210803.11.15.03.164\nBaseDir=/edibatch1/edidev/MMC-Staging/COVID19_277/PB\nFileId=4071862\nDeliveryConfigId=EPIC.PB.DELIVER.COVID.277.SMTP\nOrigFileSizeFromDirList=2\nSenderName=COVID19\nDeliveredFileId=4071862\nPollerConfigDescription=pollControlId\\=[EPIC.PB.PICKUP.COVID.277.OUT], Descr\\=[Pickup Trigger file for 277 out], Host\\=[null], User\\=[null], TargetDir\\=[/edibatch1/edidev/MMC-Staging/COVID19_277/Trigger], TargetFile\\=[PB.trigger]\nOrigFileSize=2\nDeliveredFileDir=<Email>\nProcessHandle=.20210803.11.15.03.164\nProcessTransactionType=Trigger\nActualFileSize=2\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210803.11.15.03.164);ContentBasedRouterMDB(20210803.11.15.03.297);DeliveryHubMainMDB(20210803.11.15.03.555);\nOrigFilename=COVID19_277_PB_20210803_111503.zip\nSystemId=EPIC\nDeliveredFileBasename=Atttachment\nDeliverySuccess=Y\nPollControlId=EPIC.PB.PICKUP.COVID.277.OUT\nFacilityId=MHS\nProcessSender=EPIC\nOrigFileId=4071861\n",
        "postFileId": 4071862,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "EPIC.HB.DELIVER.COVID.277.SMTP",
            "deliveryDescr": "Deliver covid19 277 reports",
            "deliveryFailureAction": null,
            "deliveryMode": "SMTP",
            "deliveryOptions": null,
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "EPIC.HB.DELIVER.COVID.277.OUT",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "EPIC.HB.DELIVER.COVID.277.OUT",
            "receivingSystem": "EMAIL",
            "retryCount": 0,
            "retryDelayMinutes": 0,
            "sendNotification": "Y",
            "senderName": "COVID19",
            "stepNo": "-1"
        },
        "fileId": 4071860,
        "filename": "Atttachment",
        "id": {
            "configId": "EPIC.HB.DELIVER.COVID.277.SMTP",
            "deliveryControlId": "EPIC.HB.DELIVER.COVID.277.OUT",
            "logDatetime": "2021-08-03 15:15:02"
        },
        "instanceId": 4071859,
        "messageProps": "#Tue Aug 03 11:15:02 EDT 2021\nProfileId=EPIC.HB.DELIVER.COVID.277.OUT\nProcessName=Report\nDeliveryControlId=EPIC.HB.DELIVER.COVID.277.OUT\nRouteList=genericxlat.ZipRouter\nFileDate=20210803.111001\nDeliveredFileName=Atttachment\nSaveOriginals=Y\nJmsDestination=DeliveryHubQueue\nMessageType=text\nZipFileCount=2\nMillisecondsSincePickup=467\nInstanceId=4071859\nReceivingSystem=EMAIL\nProcessReceiver=Email\nPollerConfigId=EPIC.HB.PICKUP.COVID.277.OUT.TRIG\nZipFilename=COVID19_277_HB\nZipRegex=.*\\\\.277.*\nPickupDate=20210803.11.15.02.046\nBaseDir=/edibatch1/edidev/MMC-Staging/COVID19_277/HB\nFileId=4071860\nDeliveryConfigId=EPIC.HB.DELIVER.COVID.277.SMTP\nOrigFileSizeFromDirList=2\nSenderName=COVID19\nDeliveredFileId=4071860\nPollerConfigDescription=pollControlId\\=[EPIC.HB.PICKUP.COVID.277.OUT], Descr\\=[Pickup Trigger file for 277 out], Host\\=[null], User\\=[null], TargetDir\\=[/edibatch1/edidev/MMC-Staging/COVID19_277/Trigger], TargetFile\\=[HB.trigger]\nOrigFileSize=2\nDeliveredFileDir=<Email>\nProcessHandle=.20210803.11.15.02.046\nProcessTransactionType=Trigger\nActualFileSize=2\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210803.11.15.02.046);ContentBasedRouterMDB(20210803.11.15.02.183);DeliveryHubMainMDB(20210803.11.15.02.450);\nOrigFilename=COVID19_277_HB_20210803_111502.zip\nSystemId=EPIC\nDeliveredFileBasename=Atttachment\nDeliverySuccess=Y\nPollControlId=EPIC.HB.PICKUP.COVID.277.OUT\nFacilityId=MHS\nProcessSender=EPIC\nOrigFileId=4071859\n",
        "postFileId": 4071860,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "MMC.DELIVER.COVID19.277.PB.2.STAGING",
            "deliveryDescr": "Deliver COVID 277 explain file",
            "deliveryFailureAction": null,
            "deliveryMode": "LOCALFILE",
            "deliveryOptions": "Set.EmailSubject=COVID19 277 (Explain) Received",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.PB.2.EXPLAIN.STAGING",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.PB.2.EXPLAIN",
            "receivingSystem": "LOCAL",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071858,
        "filename": "/edibatch1/edidev/MMC-Staging/COVID19_277/PB/277_report_20210803_0800_PB-3.277.explain",
        "id": {
            "configId": "MMC.DELIVER.COVID19.277.PB.2.STAGING",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.PB.2.EXPLAIN.STAGING",
            "logDatetime": "2021-08-03 15:00:46"
        },
        "instanceId": 4071854,
        "messageProps": "#Tue Aug 03 11:00:46 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.PB.2.EXPLAIN\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.PB.2.EXPLAIN.STAGING\nRouteList=genericxlat.ExplainX12\nFileDate=20210803.090532\nDeliveredFileName=/edibatch1/edidev/MMC-Staging/COVID19_277/PB/277_report_20210803_0800_PB-3.277.explain\nEmailSubject=COVID19 277 (Explain) Received\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=33010\nInstanceId=4071854\nReceivingSystem=LOCAL\nProcessReceiver=MMC\nPollerConfigId=EPIC.PB.PICKUP.COVID.277.SFTP\nPickupDate=20210803.11.00.03.719\nFileId=4071858\nDeliveryConfigId=MMC.DELIVER.COVID19.277.PB.2.STAGING\nOrigFileSizeFromDirList=2692\nTransactionType=277\nDeliveredFileId=4071858\nPollerConfigDescription=pollControlId\\=[EPIC.PB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es008wu], TargetDir\\=[/out/edi], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=2692\nDeliveredFileDir=/edibatch1/edidev/MMC-Staging/COVID19_277/PB\nProcessHandle=.20210803.11.00.03.719\nProcessTransactionType=277\nActualFileSize=2692\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210803.11.00.03.719);ContentBasedRouterMDB(20210803.11.00.05.645);DeliveryHubMainMDB(20210803.11.00.25.918);ContentBasedRouterMDB(20210803.11.00.26.029);DeliveryHubMainMDB(20210803.11.00.36.618);\nOrigFilename=277_report_20210803_0800_PB-3.277.explain\nSystemId=MMC\nDeliveredFileBasename=277_report_20210803_0800_PB-3.277.explain\nDeliverySuccess=Y\nPollControlId=EPIC.PB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071854\n",
        "postFileId": 4071858,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "MMC.DELIVER.COVID19.277.PB.2",
            "deliveryDescr": "Deliver COVID 277 explain file",
            "deliveryFailureAction": null,
            "deliveryMode": "FTP",
            "deliveryOptions": "Set.EmailSubject=COVID19 277 (Explain) Received",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.PB.2.EXPLAIN",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.PB.2.EXPLAIN",
            "receivingSystem": "EPIC",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071858,
        "filename": "/edibatch/reconftp/ICAN_DEV/COVID19_277/PB/277_report_20210803_0800_PB-3.277.explain",
        "id": {
            "configId": "MMC.DELIVER.COVID19.277.PB.2",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.PB.2.EXPLAIN",
            "logDatetime": "2021-08-03 15:00:46"
        },
        "instanceId": 4071854,
        "messageProps": "#Tue Aug 03 11:00:46 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.PB.2.EXPLAIN\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.PB.2.EXPLAIN\nRouteList=genericxlat.ExplainX12\nFileDate=20210803.090532\nDeliveredFileName=/edibatch/reconftp/ICAN_DEV/COVID19_277/PB/277_report_20210803_0800_PB-3.277.explain\nEmailSubject=COVID19 277 (Explain) Received\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=33010\nInstanceId=4071854\nReceivingSystem=EPIC\nProcessReceiver=MMC\nPollerConfigId=EPIC.PB.PICKUP.COVID.277.SFTP\nPickupDate=20210803.11.00.03.719\nFileId=4071858\nDeliveryConfigId=MMC.DELIVER.COVID19.277.PB.2\nOrigFileSizeFromDirList=2692\nTransactionType=277\nDeliveredFileId=4071858\nPollerConfigDescription=pollControlId\\=[EPIC.PB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es008wu], TargetDir\\=[/out/edi], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=2692\nDeliveredFileDir=/edibatch/reconftp/ICAN_DEV/COVID19_277/PB\nProcessHandle=.20210803.11.00.03.719\nProcessTransactionType=277\nActualFileSize=2692\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210803.11.00.03.719);ContentBasedRouterMDB(20210803.11.00.05.645);DeliveryHubMainMDB(20210803.11.00.25.918);ContentBasedRouterMDB(20210803.11.00.26.029);DeliveryHubMainMDB(20210803.11.00.36.618);\nOrigFilename=277_report_20210803_0800_PB-3.277.explain\nSystemId=MMC\nDeliveredFileBasename=277_report_20210803_0800_PB-3.277.explain\nDeliverySuccess=Y\nPollControlId=EPIC.PB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071854\n",
        "postFileId": 4071858,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "MMC.DELIVER.TREKS.277CA",
            "deliveryDescr": "Deliver COVID 277 to TREKS",
            "deliveryFailureAction": null,
            "deliveryMode": "FTP",
            "deliveryOptions": null,
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.PB.2.TREKS",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.PB.2",
            "receivingSystem": "TREKS",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071857,
        "filename": "/TREKS/277/277_report_20210803_0800_PB-3.277",
        "id": {
            "configId": "MMC.DELIVER.TREKS.277CA",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.PB.2.TREKS",
            "logDatetime": "2021-08-03 15:00:36"
        },
        "instanceId": 4071854,
        "messageProps": "#Tue Aug 03 11:00:36 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.PB.2\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.PB.2.TREKS\nRouteList=genericxlat.ExplainX12\nFileDate=20210803.090532\nDeliveredFileName=/TREKS/277/277_report_20210803_0800_PB-3.277\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=22378\nInstanceId=4071854\nReceivingSystem=TREKS\nProcessReceiver=MMC\nPollerConfigId=EPIC.PB.PICKUP.COVID.277.SFTP\nPickupDate=20210803.11.00.03.719\nFileId=4071857\nDeliveryConfigId=MMC.DELIVER.TREKS.277CA\nOrigFileSizeFromDirList=2692\nTransactionType=277\nDeliveredFileId=4071857\nPollerConfigDescription=pollControlId\\=[EPIC.PB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es008wu], TargetDir\\=[/out/edi], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=2692\nDeliveredFileDir=/TREKS/277\nProcessHandle=.20210803.11.00.03.719\nProcessTransactionType=277\nActualFileSize=2692\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210803.11.00.03.719);ContentBasedRouterMDB(20210803.11.00.05.645);DeliveryHubMainMDB(20210803.11.00.25.918);ContentBasedRouterMDB(20210803.11.00.26.029);DeliveryHubMainMDB(20210803.11.00.26.038);\nOrigFilename=277_report_20210803_0800_PB-3.277\nSystemId=MMC\nDeliveredFileBasename=277_report_20210803_0800_PB-3.277\nDeliverySuccess=Y\nPollControlId=EPIC.PB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071854\n",
        "postFileId": 4071857,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "MMC.DELIVER.COVID19.277.PB.2.STAGING",
            "deliveryDescr": "Deliver COVID 277 to PB",
            "deliveryFailureAction": null,
            "deliveryMode": "LOCALFILE",
            "deliveryOptions": "Set.EmailSubject=COVID19 277 Received",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.PB.2.STAGING",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.PB.2",
            "receivingSystem": "LOCAL",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071857,
        "filename": "/edibatch1/edidev/MMC-Staging/COVID19_277/PB/277_report_20210803_0800_PB-3.277",
        "id": {
            "configId": "MMC.DELIVER.COVID19.277.PB.2.STAGING",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.PB.2.STAGING",
            "logDatetime": "2021-08-03 15:00:36"
        },
        "instanceId": 4071854,
        "messageProps": "#Tue Aug 03 11:00:36 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.PB.2\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.PB.2.STAGING\nRouteList=genericxlat.ExplainX12\nFileDate=20210803.090532\nDeliveredFileName=/edibatch1/edidev/MMC-Staging/COVID19_277/PB/277_report_20210803_0800_PB-3.277\nEmailSubject=COVID19 277 Received\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=22378\nInstanceId=4071854\nReceivingSystem=LOCAL\nProcessReceiver=MMC\nPollerConfigId=EPIC.PB.PICKUP.COVID.277.SFTP\nPickupDate=20210803.11.00.03.719\nFileId=4071857\nDeliveryConfigId=MMC.DELIVER.COVID19.277.PB.2.STAGING\nOrigFileSizeFromDirList=2692\nTransactionType=277\nDeliveredFileId=4071857\nPollerConfigDescription=pollControlId\\=[EPIC.PB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es008wu], TargetDir\\=[/out/edi], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=2692\nDeliveredFileDir=/edibatch1/edidev/MMC-Staging/COVID19_277/PB\nProcessHandle=.20210803.11.00.03.719\nProcessTransactionType=277\nActualFileSize=2692\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210803.11.00.03.719);ContentBasedRouterMDB(20210803.11.00.05.645);DeliveryHubMainMDB(20210803.11.00.25.918);ContentBasedRouterMDB(20210803.11.00.26.029);DeliveryHubMainMDB(20210803.11.00.26.038);\nOrigFilename=277_report_20210803_0800_PB-3.277\nSystemId=MMC\nDeliveredFileBasename=277_report_20210803_0800_PB-3.277\nDeliverySuccess=Y\nPollControlId=EPIC.PB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071854\n",
        "postFileId": 4071857,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "MMC.DELIVER.COVID19.277.PB.2",
            "deliveryDescr": "Deliver COVID 277 to PB",
            "deliveryFailureAction": null,
            "deliveryMode": "FTP",
            "deliveryOptions": "Set.EmailSubject=COVID19 277 Received",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.PB.2",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.PB.2",
            "receivingSystem": "EPIC",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071857,
        "filename": "/edibatch/reconftp/ICAN_DEV/COVID19_277/PB/277_report_20210803_0800_PB-3.277",
        "id": {
            "configId": "MMC.DELIVER.COVID19.277.PB.2",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.PB.2",
            "logDatetime": "2021-08-03 15:00:36"
        },
        "instanceId": 4071854,
        "messageProps": "#Tue Aug 03 11:00:36 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.PB.2\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.PB.2\nRouteList=genericxlat.ExplainX12\nFileDate=20210803.090532\nDeliveredFileName=/edibatch/reconftp/ICAN_DEV/COVID19_277/PB/277_report_20210803_0800_PB-3.277\nEmailSubject=COVID19 277 Received\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=22378\nInstanceId=4071854\nReceivingSystem=EPIC\nProcessReceiver=MMC\nPollerConfigId=EPIC.PB.PICKUP.COVID.277.SFTP\nPickupDate=20210803.11.00.03.719\nFileId=4071857\nDeliveryConfigId=MMC.DELIVER.COVID19.277.PB.2\nOrigFileSizeFromDirList=2692\nTransactionType=277\nDeliveredFileId=4071857\nPollerConfigDescription=pollControlId\\=[EPIC.PB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es008wu], TargetDir\\=[/out/edi], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=2692\nDeliveredFileDir=/edibatch/reconftp/ICAN_DEV/COVID19_277/PB\nProcessHandle=.20210803.11.00.03.719\nProcessTransactionType=277\nActualFileSize=2692\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210803.11.00.03.719);ContentBasedRouterMDB(20210803.11.00.05.645);DeliveryHubMainMDB(20210803.11.00.25.918);ContentBasedRouterMDB(20210803.11.00.26.029);DeliveryHubMainMDB(20210803.11.00.26.038);\nOrigFilename=277_report_20210803_0800_PB-3.277\nSystemId=MMC\nDeliveredFileBasename=277_report_20210803_0800_PB-3.277\nDeliverySuccess=Y\nPollControlId=EPIC.PB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071854\n",
        "postFileId": 4071857,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "JMS.DISPATCH.CBR",
            "deliveryDescr": "Deliver COVID 277 to CBR",
            "deliveryFailureAction": null,
            "deliveryMode": "JMS",
            "deliveryOptions": "Set.RouteList=genericxlat.ExplainX12~Set.TransactionType=277~Set.ProfileId=MMC.DELIVER.COVID19.277.PB.2",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.PB",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.PB",
            "receivingSystem": "JMS",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071856,
        "filename": "277_report_20210803_0800_PB-3.277",
        "id": {
            "configId": "JMS.DISPATCH.CBR",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.PB",
            "logDatetime": "2021-08-03 15:00:26"
        },
        "instanceId": 4071854,
        "messageProps": "#Tue Aug 03 11:00:26 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.PB.2\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.PB\nRouteList=genericxlat.ExplainX12\nFileDate=20210803.090532\nDeliveredFileName=277_report_20210803_0800_PB-3.277\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=22295\nInstanceId=4071854\nReceivingSystem=JMS\nProcessReceiver=MMC\nPollerConfigId=EPIC.PB.PICKUP.COVID.277.SFTP\nPickupDate=20210803.11.00.03.719\nFileId=4071856\nDeliveryConfigId=JMS.DISPATCH.CBR\nOrigFileSizeFromDirList=2692\nTransactionType=277\nDeliveredFileId=4071856\nPollerConfigDescription=pollControlId\\=[EPIC.PB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es008wu], TargetDir\\=[/out/edi], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=2692\nDeliveredFileDir=JMS\nProcessHandle=.20210803.11.00.03.719\nProcessTransactionType=277\nActualFileSize=2692\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210803.11.00.03.719);ContentBasedRouterMDB(20210803.11.00.05.645);DeliveryHubMainMDB(20210803.11.00.25.918);\nOrigFilename=277_report_20210803_0800_PB-3.277\nSystemId=MMC\nDeliveredFileBasename=277_report_20210803_0800_PB-3.277\nDeliverySuccess=Y\nPollControlId=EPIC.PB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071854\n",
        "postFileId": 4071856,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "MMC.DELIVER.COVID19.277.HB.2.STAGING",
            "deliveryDescr": "Deliver COVID 277 explain file",
            "deliveryFailureAction": null,
            "deliveryMode": "LOCALFILE",
            "deliveryOptions": "Set.EmailSubject=COVID19 277 (Explain) Received",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.HB.2.EXPLAIN.STAGING",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.HB.2.EXPLAIN",
            "receivingSystem": "LOCAL",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071855,
        "filename": "/edibatch1/edidev/MMC-Staging/COVID19_277/HB/277_report_20210803_0600_00001_HB-21.277.explain",
        "id": {
            "configId": "MMC.DELIVER.COVID19.277.HB.2.STAGING",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.HB.2.EXPLAIN.STAGING",
            "logDatetime": "2021-08-03 15:00:25"
        },
        "instanceId": 4071851,
        "messageProps": "#Tue Aug 03 11:00:25 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.HB.2.EXPLAIN\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.HB.2.EXPLAIN.STAGING\nRouteList=genericxlat.ExplainX12\nFileDate=20210803.080626\nDeliveredFileName=/edibatch1/edidev/MMC-Staging/COVID19_277/HB/277_report_20210803_0600_00001_HB-21.277.explain\nEmailSubject=COVID19 277 (Explain) Received\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=13232\nInstanceId=4071851\nReceivingSystem=LOCAL\nProcessReceiver=MMC\nPollerConfigId=EPIC.HB.PICKUP.COVID.277.SFTP\nPickupDate=20210803.11.00.02.547\nFileId=4071855\nDeliveryConfigId=MMC.DELIVER.COVID19.277.HB.2.STAGING\nOrigFileSizeFromDirList=14028\nTransactionType=277\nDeliveredFileId=4071855\nPollerConfigDescription=pollControlId\\=[EPIC.HB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es00apm], TargetDir\\=[/out/oi/reports], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=14028\nDeliveredFileDir=/edibatch1/edidev/MMC-Staging/COVID19_277/HB\nProcessHandle=.20210803.11.00.02.547\nProcessTransactionType=277\nActualFileSize=14028\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210803.11.00.02.547);ContentBasedRouterMDB(20210803.11.00.04.589);DeliveryHubMainMDB(20210803.11.00.04.617);ContentBasedRouterMDB(20210803.11.00.04.694);DeliveryHubMainMDB(20210803.11.00.15.283);\nOrigFilename=277_report_20210803_0600_00001_HB-21.277.explain\nSystemId=MMC\nDeliveredFileBasename=277_report_20210803_0600_00001_HB-21.277.explain\nDeliverySuccess=Y\nPollControlId=EPIC.HB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071851\n",
        "postFileId": 4071855,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "MMC.DELIVER.COVID19.277.HB.2",
            "deliveryDescr": "Deliver COVID 277 explain file",
            "deliveryFailureAction": null,
            "deliveryMode": "FTP",
            "deliveryOptions": "Set.EmailSubject=COVID19 277 (Explain) Received",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.HB.2.EXPLAIN",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.HB.2.EXPLAIN",
            "receivingSystem": "EPIC",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071855,
        "filename": "/edibatch/reconftp/ICAN_DEV/COVID19_277/HB/277_report_20210803_0600_00001_HB-21.277.explain",
        "id": {
            "configId": "MMC.DELIVER.COVID19.277.HB.2",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.HB.2.EXPLAIN",
            "logDatetime": "2021-08-03 15:00:25"
        },
        "instanceId": 4071851,
        "messageProps": "#Tue Aug 03 11:00:25 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.HB.2.EXPLAIN\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.HB.2.EXPLAIN\nRouteList=genericxlat.ExplainX12\nFileDate=20210803.080626\nDeliveredFileName=/edibatch/reconftp/ICAN_DEV/COVID19_277/HB/277_report_20210803_0600_00001_HB-21.277.explain\nEmailSubject=COVID19 277 (Explain) Received\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=13232\nInstanceId=4071851\nReceivingSystem=EPIC\nProcessReceiver=MMC\nPollerConfigId=EPIC.HB.PICKUP.COVID.277.SFTP\nPickupDate=20210803.11.00.02.547\nFileId=4071855\nDeliveryConfigId=MMC.DELIVER.COVID19.277.HB.2\nOrigFileSizeFromDirList=14028\nTransactionType=277\nDeliveredFileId=4071855\nPollerConfigDescription=pollControlId\\=[EPIC.HB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es00apm], TargetDir\\=[/out/oi/reports], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=14028\nDeliveredFileDir=/edibatch/reconftp/ICAN_DEV/COVID19_277/HB\nProcessHandle=.20210803.11.00.02.547\nProcessTransactionType=277\nActualFileSize=14028\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210803.11.00.02.547);ContentBasedRouterMDB(20210803.11.00.04.589);DeliveryHubMainMDB(20210803.11.00.04.617);ContentBasedRouterMDB(20210803.11.00.04.694);DeliveryHubMainMDB(20210803.11.00.15.283);\nOrigFilename=277_report_20210803_0600_00001_HB-21.277.explain\nSystemId=MMC\nDeliveredFileBasename=277_report_20210803_0600_00001_HB-21.277.explain\nDeliverySuccess=Y\nPollControlId=EPIC.HB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071851\n",
        "postFileId": 4071855,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "MMC.DELIVER.TREKS.277CA",
            "deliveryDescr": "Deliver COVID 277 to TREKS",
            "deliveryFailureAction": null,
            "deliveryMode": "FTP",
            "deliveryOptions": null,
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.HB.2.TREKS",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.HB.2",
            "receivingSystem": "TREKS",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071853,
        "filename": "/TREKS/277/277_report_20210803_0600_00001_HB-21.277",
        "id": {
            "configId": "MMC.DELIVER.TREKS.277CA",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.HB.2.TREKS",
            "logDatetime": "2021-08-03 15:00:15"
        },
        "instanceId": 4071851,
        "messageProps": "#Tue Aug 03 11:00:15 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.HB.2\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.HB.2.TREKS\nRouteList=genericxlat.ExplainX12\nFileDate=20210803.080626\nDeliveredFileName=/TREKS/277/277_report_20210803_0600_00001_HB-21.277\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=2219\nInstanceId=4071851\nReceivingSystem=TREKS\nProcessReceiver=MMC\nPollerConfigId=EPIC.HB.PICKUP.COVID.277.SFTP\nPickupDate=20210803.11.00.02.547\nFileId=4071853\nDeliveryConfigId=MMC.DELIVER.TREKS.277CA\nOrigFileSizeFromDirList=14028\nTransactionType=277\nDeliveredFileId=4071853\nPollerConfigDescription=pollControlId\\=[EPIC.HB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es00apm], TargetDir\\=[/out/oi/reports], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=14028\nDeliveredFileDir=/TREKS/277\nProcessHandle=.20210803.11.00.02.547\nProcessTransactionType=277\nActualFileSize=14028\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210803.11.00.02.547);ContentBasedRouterMDB(20210803.11.00.04.589);DeliveryHubMainMDB(20210803.11.00.04.617);ContentBasedRouterMDB(20210803.11.00.04.694);DeliveryHubMainMDB(20210803.11.00.04.706);\nOrigFilename=277_report_20210803_0600_00001_HB-21.277\nSystemId=MMC\nDeliveredFileBasename=277_report_20210803_0600_00001_HB-21.277\nDeliverySuccess=Y\nPollControlId=EPIC.HB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071851\n",
        "postFileId": 4071853,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "MMC.DELIVER.COVID19.277.HB.2.STAGING",
            "deliveryDescr": "Deliver COVID 277 to HB",
            "deliveryFailureAction": null,
            "deliveryMode": "LOCALFILE",
            "deliveryOptions": "Set.EmailSubject=COVID19 277 Received",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.HB.2.STAGING",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.HB.2",
            "receivingSystem": "LOCAL",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071853,
        "filename": "/edibatch1/edidev/MMC-Staging/COVID19_277/HB/277_report_20210803_0600_00001_HB-21.277",
        "id": {
            "configId": "MMC.DELIVER.COVID19.277.HB.2.STAGING",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.HB.2.STAGING",
            "logDatetime": "2021-08-03 15:00:14"
        },
        "instanceId": 4071851,
        "messageProps": "#Tue Aug 03 11:00:14 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.HB.2\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.HB.2.STAGING\nRouteList=genericxlat.ExplainX12\nFileDate=20210803.080626\nDeliveredFileName=/edibatch1/edidev/MMC-Staging/COVID19_277/HB/277_report_20210803_0600_00001_HB-21.277\nEmailSubject=COVID19 277 Received\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=2219\nInstanceId=4071851\nReceivingSystem=LOCAL\nProcessReceiver=MMC\nPollerConfigId=EPIC.HB.PICKUP.COVID.277.SFTP\nPickupDate=20210803.11.00.02.547\nFileId=4071853\nDeliveryConfigId=MMC.DELIVER.COVID19.277.HB.2.STAGING\nOrigFileSizeFromDirList=14028\nTransactionType=277\nDeliveredFileId=4071853\nPollerConfigDescription=pollControlId\\=[EPIC.HB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es00apm], TargetDir\\=[/out/oi/reports], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=14028\nDeliveredFileDir=/edibatch1/edidev/MMC-Staging/COVID19_277/HB\nProcessHandle=.20210803.11.00.02.547\nProcessTransactionType=277\nActualFileSize=14028\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210803.11.00.02.547);ContentBasedRouterMDB(20210803.11.00.04.589);DeliveryHubMainMDB(20210803.11.00.04.617);ContentBasedRouterMDB(20210803.11.00.04.694);DeliveryHubMainMDB(20210803.11.00.04.706);\nOrigFilename=277_report_20210803_0600_00001_HB-21.277\nSystemId=MMC\nDeliveredFileBasename=277_report_20210803_0600_00001_HB-21.277\nDeliverySuccess=Y\nPollControlId=EPIC.HB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071851\n",
        "postFileId": 4071853,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "MMC.DELIVER.COVID19.277.HB.2",
            "deliveryDescr": "Deliver COVID 277 to HB",
            "deliveryFailureAction": null,
            "deliveryMode": "FTP",
            "deliveryOptions": "Set.EmailSubject=COVID19 277 Received",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.HB.2",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.HB.2",
            "receivingSystem": "EPIC",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071853,
        "filename": "/edibatch/reconftp/ICAN_DEV/COVID19_277/HB/277_report_20210803_0600_00001_HB-21.277",
        "id": {
            "configId": "MMC.DELIVER.COVID19.277.HB.2",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.HB.2",
            "logDatetime": "2021-08-03 15:00:14"
        },
        "instanceId": 4071851,
        "messageProps": "#Tue Aug 03 11:00:14 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.HB.2\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.HB.2\nRouteList=genericxlat.ExplainX12\nFileDate=20210803.080626\nDeliveredFileName=/edibatch/reconftp/ICAN_DEV/COVID19_277/HB/277_report_20210803_0600_00001_HB-21.277\nEmailSubject=COVID19 277 Received\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=2219\nInstanceId=4071851\nReceivingSystem=EPIC\nProcessReceiver=MMC\nPollerConfigId=EPIC.HB.PICKUP.COVID.277.SFTP\nPickupDate=20210803.11.00.02.547\nFileId=4071853\nDeliveryConfigId=MMC.DELIVER.COVID19.277.HB.2\nOrigFileSizeFromDirList=14028\nTransactionType=277\nDeliveredFileId=4071853\nPollerConfigDescription=pollControlId\\=[EPIC.HB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es00apm], TargetDir\\=[/out/oi/reports], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=14028\nDeliveredFileDir=/edibatch/reconftp/ICAN_DEV/COVID19_277/HB\nProcessHandle=.20210803.11.00.02.547\nProcessTransactionType=277\nActualFileSize=14028\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210803.11.00.02.547);ContentBasedRouterMDB(20210803.11.00.04.589);DeliveryHubMainMDB(20210803.11.00.04.617);ContentBasedRouterMDB(20210803.11.00.04.694);DeliveryHubMainMDB(20210803.11.00.04.706);\nOrigFilename=277_report_20210803_0600_00001_HB-21.277\nSystemId=MMC\nDeliveredFileBasename=277_report_20210803_0600_00001_HB-21.277\nDeliverySuccess=Y\nPollControlId=EPIC.HB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071851\n",
        "postFileId": 4071853,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "JMS.DISPATCH.CBR",
            "deliveryDescr": "Deliver COVID 277 to CBR",
            "deliveryFailureAction": null,
            "deliveryMode": "JMS",
            "deliveryOptions": "Set.RouteList=genericxlat.ExplainX12~Set.TransactionType=277~Set.ProfileId=MMC.DELIVER.COVID19.277.HB.2",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.HB",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.HB",
            "receivingSystem": "JMS",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071852,
        "filename": "277_report_20210803_0600_00001_HB-21.277",
        "id": {
            "configId": "JMS.DISPATCH.CBR",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.HB",
            "logDatetime": "2021-08-03 15:00:04"
        },
        "instanceId": 4071851,
        "messageProps": "#Tue Aug 03 11:00:04 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.HB.2\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.HB\nRouteList=genericxlat.ExplainX12\nFileDate=20210803.080626\nDeliveredFileName=277_report_20210803_0600_00001_HB-21.277\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=2132\nInstanceId=4071851\nReceivingSystem=JMS\nProcessReceiver=MMC\nPollerConfigId=EPIC.HB.PICKUP.COVID.277.SFTP\nPickupDate=20210803.11.00.02.547\nFileId=4071852\nDeliveryConfigId=JMS.DISPATCH.CBR\nOrigFileSizeFromDirList=14028\nTransactionType=277\nDeliveredFileId=4071852\nPollerConfigDescription=pollControlId\\=[EPIC.HB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es00apm], TargetDir\\=[/out/oi/reports], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=14028\nDeliveredFileDir=JMS\nProcessHandle=.20210803.11.00.02.547\nProcessTransactionType=277\nActualFileSize=14028\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210803.11.00.02.547);ContentBasedRouterMDB(20210803.11.00.04.589);DeliveryHubMainMDB(20210803.11.00.04.617);\nOrigFilename=277_report_20210803_0600_00001_HB-21.277\nSystemId=MMC\nDeliveredFileBasename=277_report_20210803_0600_00001_HB-21.277\nDeliverySuccess=Y\nPollControlId=EPIC.HB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071851\n",
        "postFileId": 4071852,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "EPIC.PB.DELIVER.COVID.277.SMTP",
            "deliveryDescr": "Deliver covid19 277 reports",
            "deliveryFailureAction": null,
            "deliveryMode": "SMTP",
            "deliveryOptions": null,
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "EPIC.PB.DELIVER.COVID.277.OUT",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "EPIC.PB.DELIVER.COVID.277.OUT",
            "receivingSystem": "EMAIL",
            "retryCount": 0,
            "retryDelayMinutes": 0,
            "sendNotification": "Y",
            "senderName": "COVID19",
            "stepNo": "-1"
        },
        "fileId": 4071837,
        "filename": "Atttachment",
        "id": {
            "configId": "EPIC.PB.DELIVER.COVID.277.SMTP",
            "deliveryControlId": "EPIC.PB.DELIVER.COVID.277.OUT",
            "logDatetime": "2021-08-02 15:15:04"
        },
        "instanceId": 4071836,
        "messageProps": "#Mon Aug 02 11:15:04 EDT 2021\nProfileId=EPIC.PB.DELIVER.COVID.277.OUT\nProcessName=Report\nDeliveryControlId=EPIC.PB.DELIVER.COVID.277.OUT\nRouteList=genericxlat.ZipRouter\nFileDate=20210802.111001\nDeliveredFileName=Atttachment\nSaveOriginals=Y\nJmsDestination=DeliveryHubQueue\nMessageType=text\nZipFileCount=2\nMillisecondsSincePickup=1129\nInstanceId=4071836\nReceivingSystem=EMAIL\nProcessReceiver=Email\nPollerConfigId=EPIC.PB.PICKUP.COVID.277.OUT.TRIG\nZipFilename=COVID19_277_PB\nZipRegex=.*\\\\.277.*\nPickupDate=20210802.11.15.02.924\nBaseDir=/edibatch1/edidev/MMC-Staging/COVID19_277/PB\nFileId=4071837\nDeliveryConfigId=EPIC.PB.DELIVER.COVID.277.SMTP\nOrigFileSizeFromDirList=2\nSenderName=COVID19\nDeliveredFileId=4071837\nPollerConfigDescription=pollControlId\\=[EPIC.PB.PICKUP.COVID.277.OUT], Descr\\=[Pickup Trigger file for 277 out], Host\\=[null], User\\=[null], TargetDir\\=[/edibatch1/edidev/MMC-Staging/COVID19_277/Trigger], TargetFile\\=[PB.trigger]\nOrigFileSize=2\nDeliveredFileDir=<Email>\nProcessHandle=.20210802.11.15.02.924\nProcessTransactionType=Trigger\nActualFileSize=2\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210802.11.15.02.924);ContentBasedRouterMDB(20210802.11.15.03.637);DeliveryHubMainMDB(20210802.11.15.03.991);\nOrigFilename=COVID19_277_PB_20210802_111503.zip\nSystemId=EPIC\nDeliveredFileBasename=Atttachment\nDeliverySuccess=Y\nPollControlId=EPIC.PB.PICKUP.COVID.277.OUT\nFacilityId=MHS\nProcessSender=EPIC\nOrigFileId=4071836\n",
        "postFileId": 4071837,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "EPIC.HB.DELIVER.COVID.277.SMTP",
            "deliveryDescr": "Deliver covid19 277 reports",
            "deliveryFailureAction": null,
            "deliveryMode": "SMTP",
            "deliveryOptions": null,
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "EPIC.HB.DELIVER.COVID.277.OUT",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "EPIC.HB.DELIVER.COVID.277.OUT",
            "receivingSystem": "EMAIL",
            "retryCount": 0,
            "retryDelayMinutes": 0,
            "sendNotification": "Y",
            "senderName": "COVID19",
            "stepNo": "-1"
        },
        "fileId": 4071835,
        "filename": "Atttachment",
        "id": {
            "configId": "EPIC.HB.DELIVER.COVID.277.SMTP",
            "deliveryControlId": "EPIC.HB.DELIVER.COVID.277.OUT",
            "logDatetime": "2021-08-02 15:15:02"
        },
        "instanceId": 4071834,
        "messageProps": "#Mon Aug 02 11:15:02 EDT 2021\nProfileId=EPIC.HB.DELIVER.COVID.277.OUT\nProcessName=Report\nDeliveryControlId=EPIC.HB.DELIVER.COVID.277.OUT\nRouteList=genericxlat.ZipRouter\nFileDate=20210802.111001\nDeliveredFileName=Atttachment\nSaveOriginals=Y\nJmsDestination=DeliveryHubQueue\nMessageType=text\nZipFileCount=2\nMillisecondsSincePickup=488\nInstanceId=4071834\nReceivingSystem=EMAIL\nProcessReceiver=Email\nPollerConfigId=EPIC.HB.PICKUP.COVID.277.OUT.TRIG\nZipFilename=COVID19_277_HB\nZipRegex=.*\\\\.277.*\nPickupDate=20210802.11.15.01.816\nBaseDir=/edibatch1/edidev/MMC-Staging/COVID19_277/HB\nFileId=4071835\nDeliveryConfigId=EPIC.HB.DELIVER.COVID.277.SMTP\nOrigFileSizeFromDirList=2\nSenderName=COVID19\nDeliveredFileId=4071835\nPollerConfigDescription=pollControlId\\=[EPIC.HB.PICKUP.COVID.277.OUT], Descr\\=[Pickup Trigger file for 277 out], Host\\=[null], User\\=[null], TargetDir\\=[/edibatch1/edidev/MMC-Staging/COVID19_277/Trigger], TargetFile\\=[HB.trigger]\nOrigFileSize=2\nDeliveredFileDir=<Email>\nProcessHandle=.20210802.11.15.01.816\nProcessTransactionType=Trigger\nActualFileSize=2\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210802.11.15.01.816);ContentBasedRouterMDB(20210802.11.15.01.957);DeliveryHubMainMDB(20210802.11.15.02.243);\nOrigFilename=COVID19_277_HB_20210802_111501.zip\nSystemId=EPIC\nDeliveredFileBasename=Atttachment\nDeliverySuccess=Y\nPollControlId=EPIC.HB.PICKUP.COVID.277.OUT\nFacilityId=MHS\nProcessSender=EPIC\nOrigFileId=4071834\n",
        "postFileId": 4071835,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "MMC.DELIVER.COVID19.277.PB.2.STAGING",
            "deliveryDescr": "Deliver COVID 277 explain file",
            "deliveryFailureAction": null,
            "deliveryMode": "LOCALFILE",
            "deliveryOptions": "Set.EmailSubject=COVID19 277 (Explain) Received",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.PB.2.EXPLAIN.STAGING",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.PB.2.EXPLAIN",
            "receivingSystem": "LOCAL",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071833,
        "filename": "/edibatch1/edidev/MMC-Staging/COVID19_277/PB/277_report_20210802_0600_00001_PB-3.277.explain",
        "id": {
            "configId": "MMC.DELIVER.COVID19.277.PB.2.STAGING",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.PB.2.EXPLAIN.STAGING",
            "logDatetime": "2021-08-02 15:00:55"
        },
        "instanceId": 4071829,
        "messageProps": "#Mon Aug 02 11:00:55 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.PB.2.EXPLAIN\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.PB.2.EXPLAIN.STAGING\nRouteList=genericxlat.ExplainX12\nFileDate=20210802.080528\nDeliveredFileName=/edibatch1/edidev/MMC-Staging/COVID19_277/PB/277_report_20210802_0600_00001_PB-3.277.explain\nEmailSubject=COVID19 277 (Explain) Received\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=42225\nInstanceId=4071829\nReceivingSystem=LOCAL\nProcessReceiver=MMC\nPollerConfigId=EPIC.PB.PICKUP.COVID.277.SFTP\nPickupDate=20210802.11.00.03.509\nFileId=4071833\nDeliveryConfigId=MMC.DELIVER.COVID19.277.PB.2.STAGING\nOrigFileSizeFromDirList=2088\nTransactionType=277\nDeliveredFileId=4071833\nPollerConfigDescription=pollControlId\\=[EPIC.PB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es008wu], TargetDir\\=[/out/edi], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=2088\nDeliveredFileDir=/edibatch1/edidev/MMC-Staging/COVID19_277/PB\nProcessHandle=.20210802.11.00.03.509\nProcessTransactionType=277\nActualFileSize=2088\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210802.11.00.03.509);ContentBasedRouterMDB(20210802.11.00.17.182);DeliveryHubMainMDB(20210802.11.00.34.949);ContentBasedRouterMDB(20210802.11.00.35.066);DeliveryHubMainMDB(20210802.11.00.45.637);\nOrigFilename=277_report_20210802_0600_00001_PB-3.277.explain\nSystemId=MMC\nDeliveredFileBasename=277_report_20210802_0600_00001_PB-3.277.explain\nDeliverySuccess=Y\nPollControlId=EPIC.PB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071829\n",
        "postFileId": 4071833,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "MMC.DELIVER.COVID19.277.PB.2",
            "deliveryDescr": "Deliver COVID 277 explain file",
            "deliveryFailureAction": null,
            "deliveryMode": "FTP",
            "deliveryOptions": "Set.EmailSubject=COVID19 277 (Explain) Received",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.PB.2.EXPLAIN",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.PB.2.EXPLAIN",
            "receivingSystem": "EPIC",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071833,
        "filename": "/edibatch/reconftp/ICAN_DEV/COVID19_277/PB/277_report_20210802_0600_00001_PB-3.277.explain",
        "id": {
            "configId": "MMC.DELIVER.COVID19.277.PB.2",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.PB.2.EXPLAIN",
            "logDatetime": "2021-08-02 15:00:55"
        },
        "instanceId": 4071829,
        "messageProps": "#Mon Aug 02 11:00:55 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.PB.2.EXPLAIN\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.PB.2.EXPLAIN\nRouteList=genericxlat.ExplainX12\nFileDate=20210802.080528\nDeliveredFileName=/edibatch/reconftp/ICAN_DEV/COVID19_277/PB/277_report_20210802_0600_00001_PB-3.277.explain\nEmailSubject=COVID19 277 (Explain) Received\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=42225\nInstanceId=4071829\nReceivingSystem=EPIC\nProcessReceiver=MMC\nPollerConfigId=EPIC.PB.PICKUP.COVID.277.SFTP\nPickupDate=20210802.11.00.03.509\nFileId=4071833\nDeliveryConfigId=MMC.DELIVER.COVID19.277.PB.2\nOrigFileSizeFromDirList=2088\nTransactionType=277\nDeliveredFileId=4071833\nPollerConfigDescription=pollControlId\\=[EPIC.PB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es008wu], TargetDir\\=[/out/edi], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=2088\nDeliveredFileDir=/edibatch/reconftp/ICAN_DEV/COVID19_277/PB\nProcessHandle=.20210802.11.00.03.509\nProcessTransactionType=277\nActualFileSize=2088\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210802.11.00.03.509);ContentBasedRouterMDB(20210802.11.00.17.182);DeliveryHubMainMDB(20210802.11.00.34.949);ContentBasedRouterMDB(20210802.11.00.35.066);DeliveryHubMainMDB(20210802.11.00.45.637);\nOrigFilename=277_report_20210802_0600_00001_PB-3.277.explain\nSystemId=MMC\nDeliveredFileBasename=277_report_20210802_0600_00001_PB-3.277.explain\nDeliverySuccess=Y\nPollControlId=EPIC.PB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071829\n",
        "postFileId": 4071833,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "MMC.DELIVER.TREKS.277CA",
            "deliveryDescr": "Deliver COVID 277 to TREKS",
            "deliveryFailureAction": null,
            "deliveryMode": "FTP",
            "deliveryOptions": null,
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.PB.2.TREKS",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.PB.2",
            "receivingSystem": "TREKS",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071832,
        "filename": "/TREKS/277/277_report_20210802_0600_00001_PB-3.277",
        "id": {
            "configId": "MMC.DELIVER.TREKS.277CA",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.PB.2.TREKS",
            "logDatetime": "2021-08-02 15:00:45"
        },
        "instanceId": 4071829,
        "messageProps": "#Mon Aug 02 11:00:45 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.PB.2\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.PB.2.TREKS\nRouteList=genericxlat.ExplainX12\nFileDate=20210802.080528\nDeliveredFileName=/TREKS/277/277_report_20210802_0600_00001_PB-3.277\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=31630\nInstanceId=4071829\nReceivingSystem=TREKS\nProcessReceiver=MMC\nPollerConfigId=EPIC.PB.PICKUP.COVID.277.SFTP\nPickupDate=20210802.11.00.03.509\nFileId=4071832\nDeliveryConfigId=MMC.DELIVER.TREKS.277CA\nOrigFileSizeFromDirList=2088\nTransactionType=277\nDeliveredFileId=4071832\nPollerConfigDescription=pollControlId\\=[EPIC.PB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es008wu], TargetDir\\=[/out/edi], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=2088\nDeliveredFileDir=/TREKS/277\nProcessHandle=.20210802.11.00.03.509\nProcessTransactionType=277\nActualFileSize=2088\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210802.11.00.03.509);ContentBasedRouterMDB(20210802.11.00.17.182);DeliveryHubMainMDB(20210802.11.00.34.949);ContentBasedRouterMDB(20210802.11.00.35.066);DeliveryHubMainMDB(20210802.11.00.35.077);\nOrigFilename=277_report_20210802_0600_00001_PB-3.277\nSystemId=MMC\nDeliveredFileBasename=277_report_20210802_0600_00001_PB-3.277\nDeliverySuccess=Y\nPollControlId=EPIC.PB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071829\n",
        "postFileId": 4071832,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "MMC.DELIVER.COVID19.277.PB.2.STAGING",
            "deliveryDescr": "Deliver COVID 277 to PB",
            "deliveryFailureAction": null,
            "deliveryMode": "LOCALFILE",
            "deliveryOptions": "Set.EmailSubject=COVID19 277 Received",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.PB.2.STAGING",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.PB.2",
            "receivingSystem": "LOCAL",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071832,
        "filename": "/edibatch1/edidev/MMC-Staging/COVID19_277/PB/277_report_20210802_0600_00001_PB-3.277",
        "id": {
            "configId": "MMC.DELIVER.COVID19.277.PB.2.STAGING",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.PB.2.STAGING",
            "logDatetime": "2021-08-02 15:00:45"
        },
        "instanceId": 4071829,
        "messageProps": "#Mon Aug 02 11:00:45 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.PB.2\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.PB.2.STAGING\nRouteList=genericxlat.ExplainX12\nFileDate=20210802.080528\nDeliveredFileName=/edibatch1/edidev/MMC-Staging/COVID19_277/PB/277_report_20210802_0600_00001_PB-3.277\nEmailSubject=COVID19 277 Received\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=31630\nInstanceId=4071829\nReceivingSystem=LOCAL\nProcessReceiver=MMC\nPollerConfigId=EPIC.PB.PICKUP.COVID.277.SFTP\nPickupDate=20210802.11.00.03.509\nFileId=4071832\nDeliveryConfigId=MMC.DELIVER.COVID19.277.PB.2.STAGING\nOrigFileSizeFromDirList=2088\nTransactionType=277\nDeliveredFileId=4071832\nPollerConfigDescription=pollControlId\\=[EPIC.PB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es008wu], TargetDir\\=[/out/edi], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=2088\nDeliveredFileDir=/edibatch1/edidev/MMC-Staging/COVID19_277/PB\nProcessHandle=.20210802.11.00.03.509\nProcessTransactionType=277\nActualFileSize=2088\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210802.11.00.03.509);ContentBasedRouterMDB(20210802.11.00.17.182);DeliveryHubMainMDB(20210802.11.00.34.949);ContentBasedRouterMDB(20210802.11.00.35.066);DeliveryHubMainMDB(20210802.11.00.35.077);\nOrigFilename=277_report_20210802_0600_00001_PB-3.277\nSystemId=MMC\nDeliveredFileBasename=277_report_20210802_0600_00001_PB-3.277\nDeliverySuccess=Y\nPollControlId=EPIC.PB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071829\n",
        "postFileId": 4071832,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "MMC.DELIVER.COVID19.277.PB.2",
            "deliveryDescr": "Deliver COVID 277 to PB",
            "deliveryFailureAction": null,
            "deliveryMode": "FTP",
            "deliveryOptions": "Set.EmailSubject=COVID19 277 Received",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.PB.2",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.PB.2",
            "receivingSystem": "EPIC",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071832,
        "filename": "/edibatch/reconftp/ICAN_DEV/COVID19_277/PB/277_report_20210802_0600_00001_PB-3.277",
        "id": {
            "configId": "MMC.DELIVER.COVID19.277.PB.2",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.PB.2",
            "logDatetime": "2021-08-02 15:00:45"
        },
        "instanceId": 4071829,
        "messageProps": "#Mon Aug 02 11:00:45 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.PB.2\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.PB.2\nRouteList=genericxlat.ExplainX12\nFileDate=20210802.080528\nDeliveredFileName=/edibatch/reconftp/ICAN_DEV/COVID19_277/PB/277_report_20210802_0600_00001_PB-3.277\nEmailSubject=COVID19 277 Received\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=31630\nInstanceId=4071829\nReceivingSystem=EPIC\nProcessReceiver=MMC\nPollerConfigId=EPIC.PB.PICKUP.COVID.277.SFTP\nPickupDate=20210802.11.00.03.509\nFileId=4071832\nDeliveryConfigId=MMC.DELIVER.COVID19.277.PB.2\nOrigFileSizeFromDirList=2088\nTransactionType=277\nDeliveredFileId=4071832\nPollerConfigDescription=pollControlId\\=[EPIC.PB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es008wu], TargetDir\\=[/out/edi], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=2088\nDeliveredFileDir=/edibatch/reconftp/ICAN_DEV/COVID19_277/PB\nProcessHandle=.20210802.11.00.03.509\nProcessTransactionType=277\nActualFileSize=2088\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210802.11.00.03.509);ContentBasedRouterMDB(20210802.11.00.17.182);DeliveryHubMainMDB(20210802.11.00.34.949);ContentBasedRouterMDB(20210802.11.00.35.066);DeliveryHubMainMDB(20210802.11.00.35.077);\nOrigFilename=277_report_20210802_0600_00001_PB-3.277\nSystemId=MMC\nDeliveredFileBasename=277_report_20210802_0600_00001_PB-3.277\nDeliverySuccess=Y\nPollControlId=EPIC.PB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071829\n",
        "postFileId": 4071832,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "JMS.DISPATCH.CBR",
            "deliveryDescr": "Deliver COVID 277 to CBR",
            "deliveryFailureAction": null,
            "deliveryMode": "JMS",
            "deliveryOptions": "Set.RouteList=genericxlat.ExplainX12~Set.TransactionType=277~Set.ProfileId=MMC.DELIVER.COVID19.277.PB.2",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.PB",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.PB",
            "receivingSystem": "JMS",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071831,
        "filename": "277_report_20210802_0600_00001_PB-3.277",
        "id": {
            "configId": "JMS.DISPATCH.CBR",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.PB",
            "logDatetime": "2021-08-02 15:00:35"
        },
        "instanceId": 4071829,
        "messageProps": "#Mon Aug 02 11:00:35 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.PB.2\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.PB\nRouteList=genericxlat.ExplainX12\nFileDate=20210802.080528\nDeliveredFileName=277_report_20210802_0600_00001_PB-3.277\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=31541\nInstanceId=4071829\nReceivingSystem=JMS\nProcessReceiver=MMC\nPollerConfigId=EPIC.PB.PICKUP.COVID.277.SFTP\nPickupDate=20210802.11.00.03.509\nFileId=4071831\nDeliveryConfigId=JMS.DISPATCH.CBR\nOrigFileSizeFromDirList=2088\nTransactionType=277\nDeliveredFileId=4071831\nPollerConfigDescription=pollControlId\\=[EPIC.PB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es008wu], TargetDir\\=[/out/edi], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=2088\nDeliveredFileDir=JMS\nProcessHandle=.20210802.11.00.03.509\nProcessTransactionType=277\nActualFileSize=2088\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210802.11.00.03.509);ContentBasedRouterMDB(20210802.11.00.17.182);DeliveryHubMainMDB(20210802.11.00.34.949);\nOrigFilename=277_report_20210802_0600_00001_PB-3.277\nSystemId=MMC\nDeliveredFileBasename=277_report_20210802_0600_00001_PB-3.277\nDeliverySuccess=Y\nPollControlId=EPIC.PB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071829\n",
        "postFileId": 4071831,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "MMC.DELIVER.COVID19.277.HB.2.STAGING",
            "deliveryDescr": "Deliver COVID 277 explain file",
            "deliveryFailureAction": null,
            "deliveryMode": "LOCALFILE",
            "deliveryOptions": "Set.EmailSubject=COVID19 277 (Explain) Received",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.HB.2.EXPLAIN.STAGING",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.HB.2.EXPLAIN",
            "receivingSystem": "LOCAL",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071830,
        "filename": "/edibatch1/edidev/MMC-Staging/COVID19_277/HB/277_report_20210802_0800_HB-19.277.explain",
        "id": {
            "configId": "MMC.DELIVER.COVID19.277.HB.2.STAGING",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.HB.2.EXPLAIN.STAGING",
            "logDatetime": "2021-08-02 15:00:34"
        },
        "instanceId": 4071826,
        "messageProps": "#Mon Aug 02 11:00:34 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.HB.2.EXPLAIN\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.HB.2.EXPLAIN.STAGING\nRouteList=genericxlat.ExplainX12\nFileDate=20210802.090620\nDeliveredFileName=/edibatch1/edidev/MMC-Staging/COVID19_277/HB/277_report_20210802_0800_HB-19.277.explain\nEmailSubject=COVID19 277 (Explain) Received\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=22537\nInstanceId=4071826\nReceivingSystem=LOCAL\nProcessReceiver=MMC\nPollerConfigId=EPIC.HB.PICKUP.COVID.277.SFTP\nPickupDate=20210802.11.00.02.278\nFileId=4071830\nDeliveryConfigId=MMC.DELIVER.COVID19.277.HB.2.STAGING\nOrigFileSizeFromDirList=17501\nTransactionType=277\nDeliveredFileId=4071830\nPollerConfigDescription=pollControlId\\=[EPIC.HB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es00apm], TargetDir\\=[/out/oi/reports], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=17501\nDeliveredFileDir=/edibatch1/edidev/MMC-Staging/COVID19_277/HB\nProcessHandle=.20210802.11.00.02.278\nProcessTransactionType=277\nActualFileSize=17501\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210802.11.00.02.278);ContentBasedRouterMDB(20210802.11.00.14.013);DeliveryHubMainMDB(20210802.11.00.14.052);ContentBasedRouterMDB(20210802.11.00.14.125);DeliveryHubMainMDB(20210802.11.00.24.719);\nOrigFilename=277_report_20210802_0800_HB-19.277.explain\nSystemId=MMC\nDeliveredFileBasename=277_report_20210802_0800_HB-19.277.explain\nDeliverySuccess=Y\nPollControlId=EPIC.HB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071826\n",
        "postFileId": 4071830,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "MMC.DELIVER.COVID19.277.HB.2",
            "deliveryDescr": "Deliver COVID 277 explain file",
            "deliveryFailureAction": null,
            "deliveryMode": "FTP",
            "deliveryOptions": "Set.EmailSubject=COVID19 277 (Explain) Received",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.HB.2.EXPLAIN",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.HB.2.EXPLAIN",
            "receivingSystem": "EPIC",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071830,
        "filename": "/edibatch/reconftp/ICAN_DEV/COVID19_277/HB/277_report_20210802_0800_HB-19.277.explain",
        "id": {
            "configId": "MMC.DELIVER.COVID19.277.HB.2",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.HB.2.EXPLAIN",
            "logDatetime": "2021-08-02 15:00:34"
        },
        "instanceId": 4071826,
        "messageProps": "#Mon Aug 02 11:00:34 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.HB.2.EXPLAIN\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.HB.2.EXPLAIN\nRouteList=genericxlat.ExplainX12\nFileDate=20210802.090620\nDeliveredFileName=/edibatch/reconftp/ICAN_DEV/COVID19_277/HB/277_report_20210802_0800_HB-19.277.explain\nEmailSubject=COVID19 277 (Explain) Received\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=22537\nInstanceId=4071826\nReceivingSystem=EPIC\nProcessReceiver=MMC\nPollerConfigId=EPIC.HB.PICKUP.COVID.277.SFTP\nPickupDate=20210802.11.00.02.278\nFileId=4071830\nDeliveryConfigId=MMC.DELIVER.COVID19.277.HB.2\nOrigFileSizeFromDirList=17501\nTransactionType=277\nDeliveredFileId=4071830\nPollerConfigDescription=pollControlId\\=[EPIC.HB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es00apm], TargetDir\\=[/out/oi/reports], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=17501\nDeliveredFileDir=/edibatch/reconftp/ICAN_DEV/COVID19_277/HB\nProcessHandle=.20210802.11.00.02.278\nProcessTransactionType=277\nActualFileSize=17501\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210802.11.00.02.278);ContentBasedRouterMDB(20210802.11.00.14.013);DeliveryHubMainMDB(20210802.11.00.14.052);ContentBasedRouterMDB(20210802.11.00.14.125);DeliveryHubMainMDB(20210802.11.00.24.719);\nOrigFilename=277_report_20210802_0800_HB-19.277.explain\nSystemId=MMC\nDeliveredFileBasename=277_report_20210802_0800_HB-19.277.explain\nDeliverySuccess=Y\nPollControlId=EPIC.HB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071826\n",
        "postFileId": 4071830,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "MMC.DELIVER.TREKS.277CA",
            "deliveryDescr": "Deliver COVID 277 to TREKS",
            "deliveryFailureAction": null,
            "deliveryMode": "FTP",
            "deliveryOptions": null,
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.HB.2.TREKS",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.HB.2",
            "receivingSystem": "TREKS",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071828,
        "filename": "/TREKS/277/277_report_20210802_0800_HB-19.277",
        "id": {
            "configId": "MMC.DELIVER.TREKS.277CA",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.HB.2.TREKS",
            "logDatetime": "2021-08-02 15:00:24"
        },
        "instanceId": 4071826,
        "messageProps": "#Mon Aug 02 11:00:24 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.HB.2\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.HB.2.TREKS\nRouteList=genericxlat.ExplainX12\nFileDate=20210802.090620\nDeliveredFileName=/TREKS/277/277_report_20210802_0800_HB-19.277\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=11920\nInstanceId=4071826\nReceivingSystem=TREKS\nProcessReceiver=MMC\nPollerConfigId=EPIC.HB.PICKUP.COVID.277.SFTP\nPickupDate=20210802.11.00.02.278\nFileId=4071828\nDeliveryConfigId=MMC.DELIVER.TREKS.277CA\nOrigFileSizeFromDirList=17501\nTransactionType=277\nDeliveredFileId=4071828\nPollerConfigDescription=pollControlId\\=[EPIC.HB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es00apm], TargetDir\\=[/out/oi/reports], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=17501\nDeliveredFileDir=/TREKS/277\nProcessHandle=.20210802.11.00.02.278\nProcessTransactionType=277\nActualFileSize=17501\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210802.11.00.02.278);ContentBasedRouterMDB(20210802.11.00.14.013);DeliveryHubMainMDB(20210802.11.00.14.052);ContentBasedRouterMDB(20210802.11.00.14.125);DeliveryHubMainMDB(20210802.11.00.14.139);\nOrigFilename=277_report_20210802_0800_HB-19.277\nSystemId=MMC\nDeliveredFileBasename=277_report_20210802_0800_HB-19.277\nDeliverySuccess=Y\nPollControlId=EPIC.HB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071826\n",
        "postFileId": 4071828,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "MMC.DELIVER.COVID19.277.HB.2.STAGING",
            "deliveryDescr": "Deliver COVID 277 to HB",
            "deliveryFailureAction": null,
            "deliveryMode": "LOCALFILE",
            "deliveryOptions": "Set.EmailSubject=COVID19 277 Received",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.HB.2.STAGING",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.HB.2",
            "receivingSystem": "LOCAL",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071828,
        "filename": "/edibatch1/edidev/MMC-Staging/COVID19_277/HB/277_report_20210802_0800_HB-19.277",
        "id": {
            "configId": "MMC.DELIVER.COVID19.277.HB.2.STAGING",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.HB.2.STAGING",
            "logDatetime": "2021-08-02 15:00:24"
        },
        "instanceId": 4071826,
        "messageProps": "#Mon Aug 02 11:00:24 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.HB.2\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.HB.2.STAGING\nRouteList=genericxlat.ExplainX12\nFileDate=20210802.090620\nDeliveredFileName=/edibatch1/edidev/MMC-Staging/COVID19_277/HB/277_report_20210802_0800_HB-19.277\nEmailSubject=COVID19 277 Received\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=11920\nInstanceId=4071826\nReceivingSystem=LOCAL\nProcessReceiver=MMC\nPollerConfigId=EPIC.HB.PICKUP.COVID.277.SFTP\nPickupDate=20210802.11.00.02.278\nFileId=4071828\nDeliveryConfigId=MMC.DELIVER.COVID19.277.HB.2.STAGING\nOrigFileSizeFromDirList=17501\nTransactionType=277\nDeliveredFileId=4071828\nPollerConfigDescription=pollControlId\\=[EPIC.HB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es00apm], TargetDir\\=[/out/oi/reports], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=17501\nDeliveredFileDir=/edibatch1/edidev/MMC-Staging/COVID19_277/HB\nProcessHandle=.20210802.11.00.02.278\nProcessTransactionType=277\nActualFileSize=17501\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210802.11.00.02.278);ContentBasedRouterMDB(20210802.11.00.14.013);DeliveryHubMainMDB(20210802.11.00.14.052);ContentBasedRouterMDB(20210802.11.00.14.125);DeliveryHubMainMDB(20210802.11.00.14.139);\nOrigFilename=277_report_20210802_0800_HB-19.277\nSystemId=MMC\nDeliveredFileBasename=277_report_20210802_0800_HB-19.277\nDeliverySuccess=Y\nPollControlId=EPIC.HB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071826\n",
        "postFileId": 4071828,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "MMC.DELIVER.COVID19.277.HB.2",
            "deliveryDescr": "Deliver COVID 277 to HB",
            "deliveryFailureAction": null,
            "deliveryMode": "FTP",
            "deliveryOptions": "Set.EmailSubject=COVID19 277 Received",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.HB.2",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.HB.2",
            "receivingSystem": "EPIC",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071828,
        "filename": "/edibatch/reconftp/ICAN_DEV/COVID19_277/HB/277_report_20210802_0800_HB-19.277",
        "id": {
            "configId": "MMC.DELIVER.COVID19.277.HB.2",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.HB.2",
            "logDatetime": "2021-08-02 15:00:24"
        },
        "instanceId": 4071826,
        "messageProps": "#Mon Aug 02 11:00:24 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.HB.2\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.HB.2\nRouteList=genericxlat.ExplainX12\nFileDate=20210802.090620\nDeliveredFileName=/edibatch/reconftp/ICAN_DEV/COVID19_277/HB/277_report_20210802_0800_HB-19.277\nEmailSubject=COVID19 277 Received\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=11920\nInstanceId=4071826\nReceivingSystem=EPIC\nProcessReceiver=MMC\nPollerConfigId=EPIC.HB.PICKUP.COVID.277.SFTP\nPickupDate=20210802.11.00.02.278\nFileId=4071828\nDeliveryConfigId=MMC.DELIVER.COVID19.277.HB.2\nOrigFileSizeFromDirList=17501\nTransactionType=277\nDeliveredFileId=4071828\nPollerConfigDescription=pollControlId\\=[EPIC.HB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es00apm], TargetDir\\=[/out/oi/reports], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=17501\nDeliveredFileDir=/edibatch/reconftp/ICAN_DEV/COVID19_277/HB\nProcessHandle=.20210802.11.00.02.278\nProcessTransactionType=277\nActualFileSize=17501\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210802.11.00.02.278);ContentBasedRouterMDB(20210802.11.00.14.013);DeliveryHubMainMDB(20210802.11.00.14.052);ContentBasedRouterMDB(20210802.11.00.14.125);DeliveryHubMainMDB(20210802.11.00.14.139);\nOrigFilename=277_report_20210802_0800_HB-19.277\nSystemId=MMC\nDeliveredFileBasename=277_report_20210802_0800_HB-19.277\nDeliverySuccess=Y\nPollControlId=EPIC.HB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071826\n",
        "postFileId": 4071828,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "JMS.DISPATCH.CBR",
            "deliveryDescr": "Deliver COVID 277 to CBR",
            "deliveryFailureAction": null,
            "deliveryMode": "JMS",
            "deliveryOptions": "Set.RouteList=genericxlat.ExplainX12~Set.TransactionType=277~Set.ProfileId=MMC.DELIVER.COVID19.277.HB.2",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "MMC.DELIVER.COVID19.277.HB",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "MMC.DELIVER.COVID19.277.HB",
            "receivingSystem": "JMS",
            "retryCount": 6,
            "retryDelayMinutes": 30,
            "sendNotification": "N",
            "senderName": null,
            "stepNo": null
        },
        "fileId": 4071827,
        "filename": "277_report_20210802_0800_HB-19.277",
        "id": {
            "configId": "JMS.DISPATCH.CBR",
            "deliveryControlId": "MMC.DELIVER.COVID19.277.HB",
            "logDatetime": "2021-08-02 15:00:14"
        },
        "instanceId": 4071826,
        "messageProps": "#Mon Aug 02 11:00:14 EDT 2021\nProfileId=MMC.DELIVER.COVID19.277.HB.2\nProcessName=277\nDeliveryControlId=MMC.DELIVER.COVID19.277.HB\nRouteList=genericxlat.ExplainX12\nFileDate=20210802.090620\nDeliveredFileName=277_report_20210802_0800_HB-19.277\nJmsDestination=DeliveryHubQueue\nMessageType=text\nMillisecondsSincePickup=11833\nInstanceId=4071826\nReceivingSystem=JMS\nProcessReceiver=MMC\nPollerConfigId=EPIC.HB.PICKUP.COVID.277.SFTP\nPickupDate=20210802.11.00.02.278\nFileId=4071827\nDeliveryConfigId=JMS.DISPATCH.CBR\nOrigFileSizeFromDirList=17501\nTransactionType=277\nDeliveredFileId=4071827\nPollerConfigDescription=pollControlId\\=[EPIC.HB.PICKUP.COVID.277], Descr\\=[Pick up 277 from Optum], Host\\=[ecgpe.healthtechnologygroup.com], User\\=[es00apm], TargetDir\\=[/out/oi/reports], TargetFile\\=[.*\\\\.277$]\nOrigFileSize=17501\nDeliveredFileDir=JMS\nProcessHandle=.20210802.11.00.02.278\nProcessTransactionType=277\nActualFileSize=17501\nServiceAreaId=MMC\nCollabPath=PollerMDB(20210802.11.00.02.278);ContentBasedRouterMDB(20210802.11.00.14.013);DeliveryHubMainMDB(20210802.11.00.14.052);\nOrigFilename=277_report_20210802_0800_HB-19.277\nSystemId=MMC\nDeliveredFileBasename=277_report_20210802_0800_HB-19.277\nDeliverySuccess=Y\nPollControlId=EPIC.HB.PICKUP.COVID.277\nFacilityId=MHS\nProcessSender=OPTUM\nOrigFileId=4071826\n",
        "postFileId": 4071827,
        "status": null
    }
]
