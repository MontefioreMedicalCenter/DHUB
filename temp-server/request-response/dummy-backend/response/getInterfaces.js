module.exports = [
    {
        "channelDescr": "Null Channel",
        "channelDest": "NONE",
        "channelId": -1,
        "channelStatus": "UP",
        "lastUpdate": "2013-04-09 04:00:00",
        "statusReason": null
    },
    {
        "channelDescr": "Internal FTP reconftp",
        "channelDest": "default",
        "channelId": 1,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:20:25",
        "statusReason": "Successful poll: EAGLE.PICKUP.MEDICAID.837I (pollControlId=[EAGLE.PICKUP.MEDICAID.837I], Descr=[Pickup 837I for Medicaid from Eagle], Host=[recon], User=[reconftp], TargetDir=[/hipaa/reconftp/ICAN_PROD/837I/MMC-Eagle], TargetFile=[^EAGLE\\.MCD.*\\.837$]).  Picked up 0 files."
    },
    {
        "channelDescr": "Internal FTP mocftp",
        "channelDest": "default",
        "channelId": 2,
        "channelStatus": "UP",
        "lastUpdate": "2015-07-13 12:14:50",
        "statusReason": "Successful delivery MOC.DELIVER.AETNAEDI.835.MMG"
    },
    {
        "channelDescr": "Internal FTP hipaaprod",
        "channelDest": "default",
        "channelId": 3,
        "channelStatus": "UP",
        "lastUpdate": "2016-09-06 16:49:00",
        "statusReason": "OK"
    },
    {
        "channelDescr": "TREKS Internal FTP",
        "channelDest": "default",
        "channelId": 4,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:20:29",
        "statusReason": "Successful poll: EPIC.PB.PICKUP.TREKS.STATUS.CMO (pollControlId=[EPIC.PB.PICKUP.TREKS.STATUS.CMO], Descr=[Pickup TREKS CMO status], Host=[YKDV1SD], User=[epicTreksProd], TargetDir=[/TREKS/Epic/OUT/PBSTATUS], TargetFile=[CMOStatusPB.*txt$]).  Picked up 0 files."
    },
    {
        "channelDescr": "Healthfirst Secure FTP",
        "channelDest": "default",
        "channelId": 6,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:21:23",
        "statusReason": "Successful poll: MOT.PICKUP.HEALTHFIRT.835 (pollControlId=[MOT.PICKUP.HEALTHFIRT.835], Descr=[Pickup 835 from Healthfirst for MOT], Host=[hfftp.healthfirst.org], User=[montefiore], TargetDir=[/montefiore/from HF/835], TargetFile=[^MTE_MOT_835.*]).  Picked up 0 files."
    },
    {
        "channelDescr": "Cymetrix",
        "channelDest": "default",
        "channelId": 7,
        "channelStatus": "UP",
        "lastUpdate": "2019-11-12 05:00:00",
        "statusReason": "Error 'LOGIN FAILED (at login method): Public key authentication failed. The following authentication methods are available for this user: publickey.' during dir listing for MontefioreMC@sftp.chamberlinedmonds.com:/FromCEA"
    },
    {
        "channelDescr": "Medicare M2 Home Health",
        "channelDest": "jms/queue/PollQueueCh03",
        "channelId": 8,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:20:44",
        "statusReason": "Successful poll: HOMEH.PICKUP.MCRA.835 (pollControlId=[HOMEH.PICKUP.MCRA.835], Descr=[Pick up 835 from Medicare M2 for Home Health], Host=[32.90.117.34], User=[HM51720@HM51720], TargetDir=[/current], TargetFile=[^5010835\\..*]).  Picked up 0 files."
    },
    {
        "channelDescr": "Medicare pt A M2 HSR",
        "channelDest": "jms/queue/PollQueueCh03",
        "channelId": 9,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:20:39",
        "statusReason": "Successful poll: EPIC.PB.PICKUP.MEDICARE.TRN (pollControlId=[EPIC.PB.PICKUP.MEDICARE.TRN], Descr=[Pick up TRN ack from Medicare Part A M2 for EPIC], Host=[32.90.117.34], User=[NYB005006@NYB005006], TargetDir=[/current], TargetFile=[^[Tt][Rr][Nn]\\.PB_MCR_837P.*]).  Picked up 0 files."
    },
    {
        "channelDescr": "Medicare pt B M2 HSR",
        "channelDest": "jms/queue/PollQueueCh03",
        "channelId": 10,
        "channelStatus": "UP",
        "lastUpdate": "2020-04-27 13:41:33",
        "statusReason": "Successful poll: EAGLE.PICKUP.MCRB.835 (pollControlId=[EAGLE.PICKUP.MCRB.835], Descr=[Pick up 835 from Medicare Part B M2 for EAGLE], Host=[32.90.117.34], User=[NYB005060@NYB005060], TargetDir=[/current], TargetFile=[^5010835\\..*]).  Picked up 0 files."
    },
    {
        "channelDescr": "Medicare M2 MOC",
        "channelDest": "jms/queue/PollQueueCh03",
        "channelId": 11,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 11:41:49",
        "statusReason": "Successful delivery EPIC.PB.DELIVER.MCR.837P"
    },
    {
        "channelDescr": "Medicare pt B M2 MOT",
        "channelDest": "jms/queue/PollQueueCh03",
        "channelId": 12,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:20:48",
        "statusReason": "Successful poll: MOT.PICKUP.MCRB.835 (pollControlId=[MOT.PICKUP.MCRB.835], Descr=[Pick up 835 from Medicare Part B M2 for MOT], Host=[32.90.117.34], User=[NYB005006@NYB005006], TargetDir=[/current], TargetFile=[^5010835\\..*]).  Picked up 0 files."
    },
    {
        "channelDescr": "BCBS HSR Institutional",
        "channelDest": "default",
        "channelId": 13,
        "channelStatus": "UP",
        "lastUpdate": "2020-07-21 12:40:21",
        "statusReason": "OK"
    },
    {
        "channelDescr": "BCBS MOT Professional",
        "channelDest": "default",
        "channelId": 14,
        "channelStatus": "UP",
        "lastUpdate": "2020-07-21 12:41:35",
        "statusReason": "OK"
    },
    {
        "channelDescr": "BCBS MOC Professional",
        "channelDest": "default",
        "channelId": 15,
        "channelStatus": "UP",
        "lastUpdate": "2019-11-12 05:00:00",
        "statusReason": "Error 'LOGIN FAILED (at login method): Password authentication failed. The following authentication methods are available for this user: publickey,password,gssapi-with-mic.' during dir listing for ny01152p@edi-sftp.anthem.com:/SFTP/outbound"
    },
    {
        "channelDescr": "Instamed",
        "channelDest": "jms/queue/PollQueueCh04",
        "channelId": 18,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:20:49",
        "statusReason": "Successful poll: PB_EPIC.PICKUP.AFFINITY.835 (pollControlId=[PB_EPIC.PICKUP.AFFINITY.835], Descr=[Pickup EPIC 835 from Affinity via Instamed (staging)], Host=[b2b.instamed.com], User=[montefiore], TargetDir=[/MMC Faculty Practice/HIPAA/outbound/835], TargetFile=[^[12]333[34].*\\.edi$]).  Picked up 0 files."
    },
    {
        "channelDescr": "Outbound To Transunion",
        "channelDest": "default",
        "channelId": 19,
        "channelStatus": "UP",
        "lastUpdate": "2020-12-12 16:26:22",
        "statusReason": "Successful dir listing dgpp515i@datagateway.transunion.com:/"
    },
    {
        "channelDescr": "Inbound From Transunion",
        "channelDest": "default",
        "channelId": 20,
        "channelStatus": "UP",
        "lastUpdate": "2018-10-24 15:33:36",
        "statusReason": "Successful dir listing dgpp515o@datagateway.transunion.com:/"
    },
    {
        "channelDescr": "Datagate Internal",
        "channelDest": "default",
        "channelId": 21,
        "channelStatus": "UP",
        "lastUpdate": "2019-07-17 07:11:51",
        "statusReason": "Successful delivery EAGLE.DELIVER.INSTAMED.837I.FIS"
    },
    {
        "channelDescr": "MOC Internal FTP",
        "channelDest": "default",
        "channelId": 22,
        "channelStatus": "UP",
        "lastUpdate": "2015-11-04 20:15:13",
        "statusReason": "Successful delivery MOT.DELIVER.HEALTHFIRST.RPT.FTP"
    },
    {
        "channelDescr": "Emdeon",
        "channelDest": "default",
        "channelId": 23,
        "channelStatus": "UP",
        "lastUpdate": "2020-04-10 20:14:00",
        "statusReason": "Successful poll: MOC.PICKUP.EMDEON.RPT (pollControlId=[MOC.PICKUP.EMDEON.RPT], Descr=[Pickup Status Report file from Emdeon for MOC], Host=[envoyedi.com], User=[monmedgr], TargetDir=[/mail], TargetFile=[.*mcds\\.asc$]).  Picked up 0 files."
    },
    {
        "channelDescr": "Expressbill",
        "channelDest": "default",
        "channelId": 24,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:22:26",
        "statusReason": "Successful poll: NR.PICKUP.EXPRESSBILL (pollControlId=[NR.PICKUP.EXPRESSBILL], Descr=[Pickup Expressbill payment file from Emdeon for EAGLE], Host=[ftp.expressbill.com], User=[mmc36216], TargetDir=[/Payment Posting Files/Montefiore_NRMV], TargetFile=[.*NR_.*\\.txt$]).  Picked up 0 files."
    },
    {
        "channelDescr": "NHP via Royal Health",
        "channelDest": "default",
        "channelId": 25,
        "channelStatus": "UP",
        "lastUpdate": "2015-10-22 14:12:37",
        "statusReason": "Successful poll: MOT.PICKUP.NHP.835 (pollControlId=[MOT.PICKUP.NHP.835], Descr=[Pickup Neighborhood Health 835 for MOT], Host=[ftp.royaldc.com], User=[roymte], TargetDir=[./], TargetFile=[^000000525.*$]).  Picked up 0 files."
    },
    {
        "channelDescr": "Amerigroup Claims",
        "channelDest": "default",
        "channelId": 26,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:20:30",
        "statusReason": "Successful poll: EPIC.PICKUP.CMO.ECHO.PROVIDER (pollControlId=[EPIC.PICKUP.CMO.ECHO.PROVIDER], Descr=[Pickup Echo Provider for EPIC from CMO], Host=[YKCMOSY], User=[egate], TargetDir=[/Echo Interface/ECHO-EPIC/Outbound], TargetFile=[Echo2Epic_Provider_.*\\.txt]).  Picked up 0 files."
    },
    {
        "channelDescr": "Amerigroup 999 and 277CA",
        "channelDest": "default",
        "channelId": 27,
        "channelStatus": "UP",
        "lastUpdate": "2013-06-17 18:55:27",
        "statusReason": "Successful dir listing Montefiore@ftp2.amerigroup.com:/Montefiore/Amerigroup_Sftp/Outbound"
    },
    {
        "channelDescr": "Claimlogic",
        "channelDest": "jms/queue/PollQueueCh05",
        "channelId": 28,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:23:05",
        "statusReason": "Successful poll: EPICWPH.PICKUP.CLAIMLOGIC.835.SMG (pollControlId=[EPICWPH.PICKUP.CLAIMLOGIC.835.SMG], Descr=[Pickup 835 from Claimlogic (Trizetto) to Epic White Plains SMG], Host=[mft.claimlogic.com], User=[montfiorny], TargetDir=[/scarsmedny/newreports], TargetFile=[scarsmedny.*\\.835$]).  Picked up 0 files."
    },
    {
        "channelDescr": "Chase",
        "channelDest": "default",
        "channelId": 29,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 15:20:35",
        "statusReason": "Successful delivery MOT.DELIVER.CHASE"
    },
    {
        "channelDescr": "Local 1199 Eligibility",
        "channelDest": "default",
        "channelId": 30,
        "channelStatus": "UP",
        "lastUpdate": "2019-11-12 05:00:00",
        "statusReason": "Error 'LOGIN FAILED (at login method): Timeout.' during dir listing for g0000257@mbox.payorconnectivity.com:/inbound"
    },
    {
        "channelDescr": "Emblem/HIP/GHI",
        "channelDest": "default",
        "channelId": 31,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:20:25",
        "statusReason": "Successful poll: EAGLE.PICKUP.HIPGHIHMO.835 (pollControlId=[EAGLE.PICKUP.HIPGHIHMO.835], Descr=[Pickup HIP plus HIP-GHI-HMO 835 from Emblem], Host=[mft.emblemhealth.com], User=[montefiore], TargetDir=[/Home/Montefiore/OUT/835], TargetFile=[^HIP.*_1317401145010.835$]).  Picked up 0 files."
    },
    {
        "channelDescr": "Montefiore secureftp.montefiore.org",
        "channelDest": "default",
        "channelId": 32,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:20:19",
        "statusReason": "Successful poll: CMO.PICKUP.PNT.837I.PROD (pollControlId=[CMO.PICKUP.PNT.837I.PROD], Descr=[Pickup 837I from PNT to CMO (CMO/Post'n Track Interface Production)], Host=[secureftp.montefiore.org], User=[dgprod], TargetDir=[/postntrack/to_mmc/5010], TargetFile=[PSTNTRK_CMO837I_.*_5010.X12]).  Picked up 0 files."
    },
    {
        "channelDescr": "Fidelis HSR 131740114MMC",
        "channelDest": "default",
        "channelId": 33,
        "channelStatus": "UP",
        "lastUpdate": "2015-07-29 15:31:56",
        "statusReason": "Successful poll: EAGLE.PICKUP.FIDELIS.835.DIRECTLY (pollControlId=[EAGLE.PICKUP.FIDELIS.835.DIRECTLY], Descr=[Pickup 835 from FIDELIS directly], Host=[sft.fideliscare.org], User=[131740114MON], TargetDir=[/sftdownloads/131740114MON], TargetFile=[.*_1"
    },
    {
        "channelDescr": "Montefiore sftp.montefiore.org",
        "channelDest": "default",
        "channelId": 34,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:22:27",
        "statusReason": "Successful poll: NYA.PICKUP.NYACK.835 (pollControlId=[NYA.PICKUP.NYACK.835], Descr=[Pickup 835 from Availity for Nyack], Host=[sftp.montefiore.org], User=[nyackrcia], TargetDir=[/ToMMC/835-To-Hub], TargetFile=[.*]).  Picked up 0 files."
    },
    {
        "channelDescr": "Wellcare 835 for HSR",
        "channelDest": "default",
        "channelId": 35,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:20:27",
        "statusReason": "Successful poll: EAGLE.PICKUP.WELLCARE.835.NEW (pollControlId=[EAGLE.PICKUP.WELLCARE.835.NEW], Descr=[Pickup 835 from Wellcare for HSR], Host=[sftp.payspanhealth.com], User=[MB2547633], TargetDir=[/], TargetFile=[^835_.*$]).  Picked up 0 files."
    },
    {
        "channelDescr": "Amerigroup 835 for HSR",
        "channelDest": "default",
        "channelId": 36,
        "channelStatus": "UP",
        "lastUpdate": "2020-04-10 20:12:55",
        "statusReason": "Successful poll: EAGLE.PICKUP.AMERIGROUP.835 (pollControlId=[EAGLE.PICKUP.AMERIGROUP.835], Descr=[Pickup Amerigroup 835 for EAGLE], Host=[sftp.payspanhealth.com], User=[MB2208842], TargetDir=[/], TargetFile=[^835_.*$]).  Picked up 0 files."
    },
    {
        "channelDescr": "Amerigroup 835 for MOT",
        "channelDest": "default",
        "channelId": 37,
        "channelStatus": "UP",
        "lastUpdate": "2020-07-17 00:46:42",
        "statusReason": "Successful poll: MOT.PICKUP.AMERIGROUP.835 (pollControlId=[MOT.PICKUP.AMERIGROUP.835], Descr=[Pickup Amerigroup 835 for MOT], Host=[sftp.payspanhealth.com], User=[MB2213920], TargetDir=[/], TargetFile=[^835_.*$]).  Picked up 0 files."
    },
    {
        "channelDescr": "CMO FTP",
        "channelDest": "default",
        "channelId": 38,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:22:20",
        "statusReason": "Successful poll: EPICWPH.PICKUP.REFUND.ARCHIVE.SFTP (pollControlId=[EPICWPH.PICKUP.REFUND.ARCHIVE.SFTP], Descr=[Pickup Refunds file from Epic to White Plains], Host=[epicprdsvc.montefiore.org], User=[ediftpuser], TargetDir=[/epic/prdfiles/ftp/extract/ResolutePB/REFUNDS/IN], TargetFile=[^pbrefund\\.txt$]).  Picked up 0 files."
    },
    {
        "channelDescr": "EPF FTP",
        "channelDest": "default",
        "channelId": 39,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 11:25:08",
        "statusReason": "Successful delivery EPIC.DELIVER.SBO.EPF.FTP"
    },
    {
        "channelDescr": "EPF FTP",
        "channelDest": "default",
        "channelId": 40,
        "channelStatus": "UP",
        "lastUpdate": "2013-04-29 10:41:46",
        "statusReason": null
    },
    {
        "channelDescr": "EPF New FTP",
        "channelDest": "default",
        "channelId": 41,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:40:45",
        "statusReason": "Successful delivery EPIC.HB.DELIVER.PROD.835.EPF"
    },
    {
        "channelDescr": "EAGLE",
        "channelDest": "default",
        "channelId": 42,
        "channelStatus": "UP",
        "lastUpdate": "2017-11-24 13:20:06",
        "statusReason": "OK"
    },
    {
        "channelDescr": "IDX MOC",
        "channelDest": "default",
        "channelId": 43,
        "channelStatus": "UP",
        "lastUpdate": "2020-04-10 20:14:04",
        "statusReason": "Successful poll: MOT.PICKUP.HEALTHFIRST.837P (pollControlId=[MOT.PICKUP.HEALTHFIRST.837P], Descr=[Pickup Healthfirst 837P from MOT], Host=[ykidxmot], User=[ftpprod], TargetDir=[/db/edi/hf5010_pro], TargetFile=[^E.*\\.837$]).  Picked up 0 files."
    },
    {
        "channelDescr": "IDX MOT FTP user idxftp",
        "channelDest": "default",
        "channelId": 44,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 15:01:14",
        "statusReason": "Successful delivery MMC.DELIVER.UHC.SPLIT835.SPLIT.FPP"
    },
    {
        "channelDescr": "IDX MOT FTP user ftpprod",
        "channelDest": "default",
        "channelId": 45,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 13:41:04",
        "statusReason": "Successful delivery MOT.DELIVER.BCBS.277CA"
    },
    {
        "channelDescr": "MOT FTP",
        "channelDest": "default",
        "channelId": 46,
        "channelStatus": "UP",
        "lastUpdate": "2018-03-02 12:37:58",
        "statusReason": "OK"
    },
    {
        "channelDescr": "Boston Workstation FTP",
        "channelDest": "default",
        "channelId": 47,
        "channelStatus": "UP",
        "lastUpdate": "2019-02-05 11:34:26",
        "statusReason": "Ok"
    },
    {
        "channelDescr": "Local 1199 Remits Pickup",
        "channelDest": "default",
        "channelId": 48,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:20:16",
        "statusReason": "Successful poll: EAGLE.PICKUP.1199.835 (pollControlId=[EAGLE.PICKUP.1199.835], Descr=[Pick up HSR 835 from 1199 for EAGLE (its PGP encrypted)], Host=[filetransfer.1199funds.net], User=[MontefioreHospital], TargetDir=[/users/MontefioreHospital/Outbound], TargetFile=[.*1199_835_.*$]).  Picked up 0 files."
    },
    {
        "channelDescr": "Local 1199 MOT",
        "channelDest": "default",
        "channelId": 49,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:21:19",
        "statusReason": "Successful poll: MOT.PICKUP.1199.835 (pollControlId=[MOT.PICKUP.1199.835], Descr=[Pick up MOT 1199 835 (its PGP encrypted)], Host=[filetransfer.1199funds.net], User=[MontefioreFP], TargetDir=[/users/MontefioreFP/OUT], TargetFile=[^MMC.*\\.pgp$]).  Picked up 0 files."
    },
    {
        "channelDescr": "Internal FTP Misc.",
        "channelDest": "default",
        "channelId": 50,
        "channelStatus": "UP",
        "lastUpdate": "2013-04-18 19:00:41",
        "statusReason": null
    },
    {
        "channelDescr": "IMA Billing SFTP",
        "channelDest": "default",
        "channelId": 51,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 13:00:34",
        "statusReason": "Successful delivery IMA.DELIVER.MEDICAID.AIAJ.835.SFTP"
    },
    {
        "channelDescr": "Post N Track SFTP",
        "channelDest": "default",
        "channelId": 52,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:21:12",
        "statusReason": "Successful poll: MOT.PICKUP.AETNA.835 (pollControlId=[MOT.PICKUP.AETNA.835], Descr=[Pickup MOT 835 from Aetna for NPI 1063525152 (via Post-N-Track)], Host=[ftp1.post-n-track.com], User=[montefp], TargetDir=[/Download], TargetFile=[.*\\.835$]).  Picked up 0 files."
    },
    {
        "channelDescr": "IMA Medicaid FTP over VPN, account D426813",
        "channelDest": "jms/queue/PollQueueCh02",
        "channelId": 53,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:20:09",
        "statusReason": "Successful poll: IMA.PICKUP.MEDICAID.D426813.ZIP (pollControlId=[IMA.PICKUP.MEDICAID.D426813.ZIP], Descr=[Pickup ZIP file from Medicaid VPN for IMA account D426813 (*)], Host=[216.141.123.20], User=[D426813], TargetDir=[/], TargetFile=[^[PR]0342681\\..*\\.ZIP$]).  Picked up 0 files."
    },
    {
        "channelDescr": "HSR Medicaid FTP over VPN, account A243554",
        "channelDest": "jms/queue/PollQueueCh02",
        "channelId": 54,
        "channelStatus": "UP",
        "lastUpdate": "2013-08-08 17:35:21",
        "statusReason": "Successful poll: EAGLE.PICKUP.MEDICAID.RESPONSE (Pickup zipped response file from Medicaid VPN for HSR (contains mix of transactions)).  Picked up 0 files."
    },
    {
        "channelDescr": "MOT Medicaid FTP over VPN, account A888239",
        "channelDest": "jms/queue/PollQueueCh02",
        "channelId": 55,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:20:11",
        "statusReason": "Successful poll: MOT.PICKUP.MEDICAID.RESPONSE (pollControlId=[MOT.PICKUP.MEDICAID.RESPONSE], Descr=[Pickup zipped response file from Medicaid VPN for MOT (contains mix of transactions)], Host=[216.141.123.20], User=[A888239], TargetDir=[/], TargetFile=[^[PR]0088823\\..*\\.ZIP]).  Picked up 0 files."
    },
    {
        "channelDescr": "MOC Medicaid FTP over VPN, account A434157",
        "channelDest": "jms/queue/PollQueueCh02",
        "channelId": 56,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:20:10",
        "statusReason": "Successful poll: MOC.PICKUP.MEDICAID.RESPONSE (pollControlId=[MOC.PICKUP.MEDICAID.RESPONSE], Descr=[Pickup zipped response file from Medicaid VPN for MOC (contains mix of transactions)], Host=[216.141.123.20], User=[A434157], TargetDir=[/], TargetFile=[^[PR]0043415\\..*\\.ZIP]).  Picked up 0 files."
    },
    {
        "channelDescr": "IMA Medicaid FTP over VPN, Account D460400",
        "channelDest": "jms/queue/PollQueueCh02",
        "channelId": 57,
        "channelStatus": "UP",
        "lastUpdate": "2019-05-14 19:39:42",
        "statusReason": "OK"
    },
    {
        "channelDescr": "Oxford FTP (via PNC Bank)",
        "channelDest": "default",
        "channelId": 58,
        "channelStatus": "UP",
        "lastUpdate": "2019-04-08 18:42:05",
        "statusReason": "Successful poll: MOT.PICKUP.AFFINITY.FISACURE.SPLIT.835 (pollControlId=[MOT.PICKUP.AFFINITY.FISACURE.SPLIT.835], Descr=[Pickup Affinity 835 for Payee Split Process from Fisacure], Host=[sftp.montefiore.org], User=[dgprod], TargetDir=[/fisacure/to_mmc"
    },
    {
        "channelDescr": "Cypress FTP",
        "channelDest": "default",
        "channelId": 59,
        "channelStatus": "UP",
        "lastUpdate": "2020-05-04 18:37:45",
        "statusReason": "Successful dir listing Cypress_FTP@CYPSERV.MONTEFIORE.ORG:/"
    },
    {
        "channelDescr": "CMO FTP Server YKCM2SW",
        "channelDest": "default",
        "channelId": 60,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:20:23",
        "statusReason": "Successful poll: EAGLE.PICKUP.CMO.271 (pollControlId=[EAGLE.PICKUP.CMO.271], Descr=[pickup eligibility response from CMO for EAGLE], Host=[YKCM4S6], User=[eagle], TargetDir=[/ApptScrubber/Eagle/Outbound], TargetFile=[^EagleCMOApptElig.*$]).  Picked up 0 files."
    },
    {
        "channelDescr": "S-m-a-r-t 837  FTP",
        "channelDest": "default",
        "channelId": 61,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 11:22:36",
        "statusReason": "Successful delivery NYA.DELIVER.SMART837"
    },
    {
        "channelDescr": "Jzanus FTP",
        "channelDest": "default",
        "channelId": 62,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 13:00:37",
        "statusReason": "Successful delivery EPIC.DELIVER.835.JZANUS"
    },
    {
        "channelDescr": "United Healthcare",
        "channelDest": "default",
        "channelId": 63,
        "channelStatus": "UP",
        "lastUpdate": "2018-03-01 21:49:10",
        "statusReason": null
    },
    {
        "channelDescr": "FVTECH",
        "channelDest": "default",
        "channelId": 64,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:20:11",
        "statusReason": "Successful poll: CMO.PICKUP.CHANGEHEALTHCARE.DONEFILE.PROD (pollControlId=[CMO.PICKUP.CHANGEHEALTHCARE.DONEFILE.PROD], Descr=[Pickup Done file from Emdeon for Change Health Care], Host=[mftgateway.emdeon.com], User=[C013174], TargetDir=[/clearinghouse/outbound], TargetFile=[.*\\.done$]).  Picked up 0 files."
    },
    {
        "channelDescr": "ykidxmot",
        "channelDest": "default",
        "channelId": 65,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:22:24",
        "statusReason": "Successful poll: MOT.PICKUP.CLAIMLOGIC.837P.EDI (pollControlId=[MOT.PICKUP.CLAIMLOGIC.837P.EDI], Descr=[Pickup 837P from MOT to Claimlogic], Host=[ykidxmot], User=[idxftp], TargetDir=[/db/edi/clmlc5010_pro], TargetFile=[E.*\\.837.*]).  Picked up 0 files."
    },
    {
        "channelDescr": "YKCM1S1",
        "channelDest": "default",
        "channelId": 66,
        "channelStatus": "UP",
        "lastUpdate": "2020-04-10 20:12:50",
        "statusReason": "Successful poll: CMO.PICKUP.FVTECH.999I (pollControlId=[CMO.PICKUP.FVTECH.999I], Descr=[Pickup 999 Institutional from CMO for FVTECH], Host=[YKCMOSY], User=[egate], TargetDir=[/Claims_837_In/5010/837I/999], TargetFile=[^FVTECH_CMO837I_.*\\.X12_999\\.X12$]).  Picked up 0 files."
    },
    {
        "channelDescr": "cmoftp on eail",
        "channelDest": "default",
        "channelId": 67,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:20:16",
        "statusReason": "Successful poll: CMO.PICKUP.MEDICAID.NPI (pollControlId=[CMO.PICKUP.MEDICAID.NPI], Descr=[Pick up NPI from CMO to send to Medicaid direct VPN], Host=[YKCMOSY], User=[egate], TargetDir=[/NYSMedicaid/OutBound/MMC], TargetFile=[.*]).  Picked up 0 files."
    },
    {
        "channelDescr": "Fidelis FPP 010796859FPP",
        "channelDest": "default",
        "channelId": 68,
        "channelStatus": "UP",
        "lastUpdate": "2020-09-11 11:45:21",
        "statusReason": "Decomissioned"
    },
    {
        "channelDescr": "MMG-Wellcare SFTP",
        "channelDest": "default",
        "channelId": 69,
        "channelStatus": "UP",
        "lastUpdate": "2020-12-12 21:24:54",
        "statusReason": "Successful dir listing 131740114_prod@sftp02.administep.com:/From_Administep/USM"
    },
    {
        "channelDescr": "Claimsnet SFTP",
        "channelDest": "default",
        "channelId": 70,
        "channelStatus": "UP",
        "lastUpdate": "2019-11-12 05:00:00",
        "statusReason": "Error 'LOGIN FAILED (at login method): Timeout.' during dir listing for 100661@sftp.claimsnet.com:/100661/reports"
    },
    {
        "channelDescr": "Sentry FTP (over VPN Tunnel)",
        "channelDest": "default",
        "channelId": 71,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 14:21:10",
        "statusReason": "Successful delivery EPIC.DELIVER.SENTRY.EINSTEIN-SELFPAY"
    },
    {
        "channelDescr": "EPIC TEST FTP",
        "channelDest": "default",
        "channelId": 72,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:22:26",
        "statusReason": "Successful poll: RHUB.PICKUP.EPIC.EXTRACT.MRD (pollControlId=[RHUB.PICKUP.EPIC.EXTRACT.MRD], Descr=[Pickkup Monthly Department Extracts from Epic to Revenue Hub], Host=[epicrptsvc.montefiore.org], User=[ediftpuser], TargetDir=[/epic/rptfiles/ftp/RevHub], TargetFile=[^MTHLY_REVHUB_DEPARTMENT_.*\\.txt$]).  Picked up 0 files."
    },
    {
        "channelDescr": "EPIC PROD FTP",
        "channelDest": "default",
        "channelId": 73,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:21:24",
        "statusReason": "Successful poll: EPICWPH.SMG.PICKUP.CLAIMLOGIC.837P (pollControlId=[EPICWPH.SMG.PICKUP.CLAIMLOGIC.837P], Descr=[Pickup 837P from EPIC to Claimlogic], Host=[epicprdsvc.montefiore.org], User=[ediftpuser], TargetDir=[/epic/prdfiles/smg/PB/Claims/Trizetto/837p], TargetFile=[^SMG_TRIZ.*\\.837P$]).  Picked up 0 files."
    },
    {
        "channelDescr": "YBEP464 Internal FTP Server",
        "channelDest": "default",
        "channelId": 74,
        "channelStatus": "UP",
        "lastUpdate": "2018-10-11 16:52:11",
        "statusReason": "Successful dir listing DM_MONTYNT\\dxhub@ybep464:/WebBlob-Prod/BlackHawk"
    },
    {
        "channelDescr": "BlackHawk ftp.sebis.com",
        "channelDest": "default",
        "channelId": 75,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:20:30",
        "statusReason": "Successful poll: EPIC.PICKUP.BLACKHAWK.IN.MAIL (pollControlId=[EPIC.PICKUP.BLACKHAWK.IN.MAIL], Descr=[Pickup Returned Mail file Inbound from Blackhawk to Epic], Host=[ftp.sebis.com], User=[mmcepicftp], TargetDir=[/update], TargetFile=[^bh0005.*\\.txt$]).  Picked up 0 files."
    },
    {
        "channelDescr": "White Plains Hospital SFTP Server",
        "channelDest": "default",
        "channelId": 76,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:21:19",
        "statusReason": "Successful poll: WPHEPIC.PICKUP.835.4SPLIT (pollControlId=[WPHEPIC.PICKUP.835.4SPLIT], Descr=[Pickup files from White Plains for remit-split process], Host=[wpftp.wphospital.org], User=[WPHinvoice], TargetDir=[/Monte], TargetFile=[.*]).  Picked up 0 files."
    },
    {
        "channelDescr": "Cerner Mainframe SSL",
        "channelDest": "default",
        "channelId": 77,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 21:40:24",
        "statusReason": "Successful delivery EAGLE.DELIVER.CHASE.LOCKBOX.CERNER"
    },
    {
        "channelDescr": "POM Recoveries SFTP",
        "channelDest": "default",
        "channelId": 78,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 13:07:46",
        "statusReason": "Successful delivery EPIC.DELIVER.POM.SFTP"
    },
    {
        "channelDescr": "BlackHawk Channel",
        "channelDest": "jms/queue/PollQueueCh05",
        "channelId": 79,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-26 01:20:55",
        "statusReason": "Successful poll: EPIC.PICKUP.BLACKHAWK.OUT.LETTERS (pollControlId=[EPIC.PICKUP.BLACKHAWK.OUT.LETTERS], Descr=[Pickup Letters file Outbound from Epic to Blackhawk for Staging (ZIPped later)], Host=[ybep464], User=[DM_MONTYNT\\dxhub], TargetDir=[/WebBlob-Prod/BH_Letters], TargetFile=[.*\\.[pP][dD][fF]$]).  Picked up 0 files."
    },
    {
        "channelDescr": "IDHub HR Feed Source SFTP TEST",
        "channelDest": "default",
        "channelId": 80,
        "channelStatus": "UP",
        "lastUpdate": "2018-09-19 16:49:00",
        "statusReason": "Successful poll: IDHUB.PICKUP.INBOUND.EXTRACT (pollControlId=[IDHUB.PICKUP.INBOUND.EXTRACT], Descr=[Pickup Extracts from HR Feed to IDHub], Host=[sftp.montefiore.org], User=[idhub_test], TargetDir=[/ToStaging], TargetFile=[.*]).  Picked up 1 files."
    },
    {
        "channelDescr": "IDHub HR Feed Source SFTP",
        "channelDest": "default",
        "channelId": 81,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 08:02:43",
        "statusReason": "Successful poll: IDHUB.PICKUP.INBOUND.EXTRACT (pollControlId=[IDHUB.PICKUP.INBOUND.EXTRACT], Descr=[Pickup Extracts from HR Feed to IDHub], Host=[sftp.montefiore.org], User=[idhub], TargetDir=[/ToStaging], TargetFile=[.*]).  Picked up 0 files."
    },
    {
        "channelDescr": "Centerlight SFTP",
        "channelDest": "default",
        "channelId": 82,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-21 04:40:54",
        "statusReason": "Successful poll: MMC.PICKUP.CENTERLIGHT.835 (pollControlId=[MMC.PICKUP.CENTERLIGHT.835], Descr=[Pickup Centerlight 835 for MMC (Mixed HB,PB,Legacy,DOSA,...)], Host=[sftp.ppi.com], User=[cl_montefiore], TargetDir=[/Out], TargetFile=[.*]).  Picked up 0 files."
    },
    {
        "channelDescr": "RT CMO",
        "channelDest": "default",
        "channelId": 1000,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:02",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT Medicaid",
        "channelDest": "default",
        "channelId": 1002,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:03",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT Healthfirst",
        "channelDest": "default",
        "channelId": 1003,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:04",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT BCBS",
        "channelDest": "default",
        "channelId": 1004,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:05",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT Medicare",
        "channelDest": "default",
        "channelId": 1005,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:05",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT Fidelis",
        "channelDest": "default",
        "channelId": 1006,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:07",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT HIP",
        "channelDest": "default",
        "channelId": 1007,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:10",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT GHI",
        "channelDest": "default",
        "channelId": 1008,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:12",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT Local 1199",
        "channelDest": "default",
        "channelId": 1009,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:13",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT AARP",
        "channelDest": "default",
        "channelId": 1010,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:15",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT Affinity",
        "channelDest": "default",
        "channelId": 1011,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:17",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT Amerigroup",
        "channelDest": "default",
        "channelId": 1013,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:19",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT CenterLight Healthcare",
        "channelDest": "default",
        "channelId": 1014,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:20",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT Cigna",
        "channelDest": "default",
        "channelId": 1015,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:21",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT Oxford",
        "channelDest": "default",
        "channelId": 1016,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:23",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT United Healthcare",
        "channelDest": "default",
        "channelId": 1017,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:24",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT VNS Choice",
        "channelDest": "default",
        "channelId": 1018,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:32",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT Wellcare",
        "channelDest": "default",
        "channelId": 1019,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:35",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT American Postal Workers",
        "channelDest": "default",
        "channelId": 1020,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:38",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT Mailhandlers",
        "channelDest": "default",
        "channelId": 1022,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:41",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT MVP",
        "channelDest": "default",
        "channelId": 1023,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:44",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT Aetna Post-N-Track",
        "channelDest": "default",
        "channelId": 1024,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:45",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT Humana",
        "channelDest": "default",
        "channelId": 1025,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:47",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT Medicare y Mucho Mas",
        "channelDest": "default",
        "channelId": 1027,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:49",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT VNS Hospice Care",
        "channelDest": "default",
        "channelId": 7026,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:57",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT Tricare",
        "channelDest": "default",
        "channelId": 7027,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:45:59",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT Metroplus",
        "channelDest": "default",
        "channelId": 7028,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:46:09",
        "statusReason": "Tested OK"
    },
    {
        "channelDescr": "RT Magnacare",
        "channelDest": "default",
        "channelId": 7029,
        "channelStatus": "UP",
        "lastUpdate": "2021-01-25 23:46:11",
        "statusReason": "Tested OK"
    }
]
