module.exports = [
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "JMS.DISPATCH.EHUB",
            "deliveryDescr": "Deliver EDITED HIP-GHI 835 to EHUB",
            "deliveryFailureAction": null,
            "deliveryMode": "X12",
            "deliveryOptions": null,
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "EAGLE.DELIVER.HIPGHI.835.EHUB",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "EAGLE.DELIVER.EDITED.HIPGHI.835",
            "receivingSystem": "EAGLE",
            "retryCount": 0,
            "retryDelayMinutes": 0,
            "sendNotification": "N",
            "senderName": "HIP-GHI",
            "stepNo": null
        },
        "fileId": 3003222,
        "filename": "hip835.eagle.modified",
        "id": {
            "configId": "JMS.DISPATCH.EHUB",
            "deliveryControlId": "EAGLE.DELIVER.HIPGHI.835.EHUB",
            "logDatetime": "2019-01-23 22:21:31"
        },
        "instanceId": 3003222,
        "messageProps": "#Wed Jan 23 17:21:31 EST 2019\nJmsDestination=DeliveryHubQueue\nOrigFileSize=852\nActualFileSize=852\nDeliveredFileBasename=hip835.eagle.modified\nMessageType=text\nPollerConfigDescription=pollControlId\\=[EAGLE.PICKUP.EDITED.HIP.835], Descr\\=[Pickup Edited HIP 835 from EAGLE], Host\\=[recon], User\\=[reconftp], TargetDir\\=[/hipaa/reconftp/ICAN_PROD/835/MMC-Eagle], TargetFile\\=[hip835.eagle.modified]\nInstanceId=3003222\nProcessTransactionType=835\nOrigFilename=hip835.eagle.modified\nOrigFileSizeFromDirList=852\nPollControlId=EAGLE.PICKUP.EDITED.HIP.835\nOrigFileId=3003222\nProcessName=Montefiore Remittance\nFileId=3003222\nSenderName=HIP-GHI\nSystemId=EAGLE\nDeliverySuccess=Y\nDeliveredFileId=3003222\nProcessHandle=.20190123.17.21.31.664\nDeliveredFileName=hip835.eagle.modified\nMillisecondsSincePickup=171\nTransactionType=835\nDeliveredFileDir=X12Dispatch\nProcessSender=HIP\nProcessReceiver=HSR\nProfileId=EAGLE.DELIVER.EDITED.HIPGHI.835\nDeliveryControlId=EAGLE.DELIVER.HIPGHI.835.EHUB\nReceivingSystem=EAGLE\nPollerConfigId=EAGLE.PICKUP.EDITED.HIP.835\nPickupDate=20190123.17.21.31.664\nFileDate=20190123.170100\nCollabPath=PollerMDB(20190123.17.21.31.664);DeliveryHubMainMDB(20190123.17.21.31.820);\n",
        "postFileId": 3003222,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "EAGLE.DELIVER.HIPGHI.835.EPF.NEW",
            "deliveryDescr": "Deliver EDITED HIP-GHI 835 to EPF",
            "deliveryFailureAction": null,
            "deliveryMode": "FTP",
            "deliveryOptions": "RemoveCRLF=Y~Set.TargetSystem=EPF",
            "deliverySuccessAction": null,
            "id": {
                "deliveryControlId": "EAGLE.DELIVER.HIPGHI.835.EPF",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "EAGLE.DELIVER.EDITED.HIPGHI.835",
            "receivingSystem": "EPF",
            "retryCount": 0,
            "retryDelayMinutes": 0,
            "sendNotification": "N",
            "senderName": "HIP-GHI",
            "stepNo": "5"
        },
        "fileId": 3003222,
        "filename": "/Transman/HSR/HSR5010/hip835.eagle.modified_20190123172132.835",
        "id": {
            "configId": "EAGLE.DELIVER.HIPGHI.835.EPF.NEW",
            "deliveryControlId": "EAGLE.DELIVER.HIPGHI.835.EPF",
            "logDatetime": "2019-01-23 22:21:32"
        },
        "instanceId": 3003222,
        "messageProps": "#Wed Jan 23 17:21:32 EST 2019\nJmsDestination=DeliveryHubQueue\nOrigFileSize=852\nActualFileSize=852\nDeliveredFileBasename=hip835.eagle.modified_20190123172132.835\nMessageType=text\nPollerConfigDescription=pollControlId\\=[EAGLE.PICKUP.EDITED.HIP.835], Descr\\=[Pickup Edited HIP 835 from EAGLE], Host\\=[recon], User\\=[reconftp], TargetDir\\=[/hipaa/reconftp/ICAN_PROD/835/MMC-Eagle], TargetFile\\=[hip835.eagle.modified]\nInstanceId=3003222\nProcessTransactionType=835\nOrigFilename=hip835.eagle.modified\nOrigFileSizeFromDirList=852\nPollControlId=EAGLE.PICKUP.EDITED.HIP.835\nOrigFileId=3003222\nProcessName=Montefiore Remittance\nFileId=3003222\nSenderName=HIP-GHI\nSystemId=EAGLE\nDeliverySuccess=Y\nDeliveredFileId=3003223\nProcessHandle=.20190123.17.21.31.664\nDeliveredFileName=/Transman/HSR/HSR5010/hip835.eagle.modified_20190123172132.835\nTargetSystem=EPF\nMillisecondsSincePickup=171\nDeliveredFileDir=/Transman/HSR/HSR5010\nProcessSender=HIP\nProcessReceiver=HSR\nProfileId=EAGLE.DELIVER.EDITED.HIPGHI.835\nDeliveryControlId=EAGLE.DELIVER.HIPGHI.835.EPF\nReceivingSystem=EPF\nPollerConfigId=EAGLE.PICKUP.EDITED.HIP.835\nPickupDate=20190123.17.21.31.664\nFileDate=20190123.170100\nCollabPath=PollerMDB(20190123.17.21.31.664);DeliveryHubMainMDB(20190123.17.21.31.820);\n",
        "postFileId": 3003223,
        "status": null
    },
    {
        "deliveryControl": {
            "activeFlag": "Y",
            "contentCheckClass": null,
            "deliveryConfigId": "EAGLE.DELIVER.TREKS.PROD.835",
            "deliveryDescr": "Deliver EDITED HIP-GHI 835 to TREKS",
            "deliveryFailureAction": null,
            "deliveryMode": "FTP",
            "deliveryOptions": "RemoveCRLF=Y~Set.PayerName=HIP~Set.TargetSystem=TREKS~Set.DontCreateDirs=Y",
            "deliverySuccessAction": "XhubReconX12Action",
            "id": {
                "deliveryControlId": "EAGLE.DELIVER.HIPGHI.835.TREKS",
                "facilityId": "MHS",
                "serviceAreaId": "MMC"
            },
            "profileId": "EAGLE.DELIVER.EDITED.HIPGHI.835",
            "receivingSystem": "TREKS",
            "retryCount": 0,
            "retryDelayMinutes": 0,
            "sendNotification": "N",
            "senderName": "HIP-GHI",
            "stepNo": "3"
        },
        "fileId": 3003222,
        "filename": "/TREKS/835/HIPhip835.eagle.modified_20190123.172132",
        "id": {
            "configId": "EAGLE.DELIVER.TREKS.PROD.835",
            "deliveryControlId": "EAGLE.DELIVER.HIPGHI.835.TREKS",
            "logDatetime": "2019-01-23 22:21:32"
        },
        "instanceId": 3003222,
        "messageProps": "#Wed Jan 23 17:21:32 EST 2019\nPayerName=HIP\nJmsDestination=DeliveryHubQueue\nOrigFileSize=852\nActualFileSize=852\nDeliveredFileBasename=HIPhip835.eagle.modified_20190123.172132\nMessageType=text\nPollerConfigDescription=pollControlId\\=[EAGLE.PICKUP.EDITED.HIP.835], Descr\\=[Pickup Edited HIP 835 from EAGLE], Host\\=[recon], User\\=[reconftp], TargetDir\\=[/hipaa/reconftp/ICAN_PROD/835/MMC-Eagle], TargetFile\\=[hip835.eagle.modified]\nInstanceId=3003222\nProcessTransactionType=835\nOrigFilename=hip835.eagle.modified\nOrigFileSizeFromDirList=852\nPollControlId=EAGLE.PICKUP.EDITED.HIP.835\nOrigFileId=3003222\nProcessName=Montefiore Remittance\nFileId=3003222\nSenderName=HIP-GHI\nSystemId=EAGLE\nDeliverySuccess=Y\nDeliveredFileId=3003224\nProcessHandle=.20190123.17.21.31.664\nDeliveredFileName=/TREKS/835/HIPhip835.eagle.modified_20190123.172132\nDontCreateDirs=Y\nTargetSystem=TREKS\nMillisecondsSincePickup=171\nDeliveredFileDir=/TREKS/835\nProcessSender=HIP\nProcessReceiver=HSR\nProfileId=EAGLE.DELIVER.EDITED.HIPGHI.835\nDeliveryControlId=EAGLE.DELIVER.HIPGHI.835.TREKS\nReceivingSystem=TREKS\nPollerConfigId=EAGLE.PICKUP.EDITED.HIP.835\nPickupDate=20190123.17.21.31.664\nFileDate=20190123.170100\nCollabPath=PollerMDB(20190123.17.21.31.664);DeliveryHubMainMDB(20190123.17.21.31.820);\n",
        "postFileId": 3003224,
        "status": null
    }
]
