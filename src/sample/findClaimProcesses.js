const dataArray = [
    {
      "systemId": "DHub",
      "systems": [
        {
          "fileId": "MMC",
          "fileName": "MMC.PICKUP.BCBS.999.AVAILITY",
          "instanceEndTime": "2024-07-29 11:00:33",
          "instanceStartTime": "2024-07-29 11:00:33",
          "processDescription": "SFTP",
          "processName": "BURKE Claims",
          "processStatus": "Availity",
          "receiverName": "MMC.PICKUP.BCBS.999.AVAILITY",
          "senderName": "Availity-Corrected",
          "totalDollarAmt": 40794,
          "totalTransactionCount": 26,
          "transactionType": "Logs"
        },
        {
         "fileId": "MMC",
          "fileName": "MMC.DELIVER.BCBS.999.AVAILITY",
          "instanceEndTime": "2024-07-29 11:00:33",
          "instanceStartTime": "2024-07-29 11:00:33",
          "processDescription": "FTP",
          "processName": "BURKE Claims",
          "processStatus": "Availity",
          "receiverName": "MMC.DELIVER.BCBS.999.AVAILITY",
          "senderName": "Availity-Corrected",
          "totalDollarAmt": 40794,
          "totalTransactionCount": 26,
          "transactionType": "Logs"
        },
        {
            "fileId": "WPH",
            "fileName": "WPH.PICKUP.DOC.999.AVAILITY",
            "instanceEndTime": "2024-07-29 11:00:33",
            "instanceStartTime": "2024-07-29 11:00:33",
            "processDescription": "FTP",
            "processName": "WPH Claims",
            "processStatus": "Availity",
            "receiverName": "WPH.PICKUP.DOC.999.AVAILITY",
            "senderName": "Availity-Corrected",
            "totalDollarAmt": 5000,
            "totalTransactionCount": 10,
            "transactionType": "Logs"
          }
  
      ]
    },
    {
        "systemId": "BDI",
        "systems": [
          {
            "fileId": "MMC",
            "fileName": "MMC.DELIVER.BCBS.999.AVAILITY",
            "instanceEndTime": "2024-07-29 11:00:33",
            "instanceStartTime": "2024-07-29 11:00:33",
            "processDescription": "SFTP",
            "processName": "BURKE Claims",
            "processStatus": "Availity",
            "receiverName": "MMC.PICKUP.BCBS.999.AVAILITY",
            "senderName": "Availity-Corrected",
            "totalDollarAmt": 564556,
            "totalTransactionCount": 34,
            "transactionType": "Logs"
          },
          {
              "fileId": "BUR",
              "fileName": "BUR.PICKUP.DOC.999.AVAILITY",
              "instanceEndTime": "2024-08-02 11:00:33",
              "instanceStartTime": "2024-08-02 11:00:33",
              "processDescription": "FTP",
              "processName": "BUR Claims",
              "processStatus": "Availity",
              "receiverName": "WPH.PICKUP.DOC.999.AVAILITY",
              "senderName": "Availity-Corrected",
              "totalDollarAmt": 5000,
              "totalTransactionCount": 10,
              "transactionType": "Logs"
            }
    
        ]
      },
      {
          "systemId": "IWAY",
          "systems": [
            {
              "fileId": "MNR",
              "fileName": "MNR.DELIVER.BCBS.999.AVAILITY",
              "instanceEndTime": "2024-07-29 11:00:33",
              "instanceStartTime": "2024-07-29 11:00:33",
              "processDescription": "SFTP",
              "processName": "BURKE Claims",
              "processStatus": "Availity",
              "receiverName": "MMC.PICKUP.BCBS.999.AVAILITY",
              "senderName": "Availity-Corrected",
              "totalDollarAmt": 5556,
              "totalTransactionCount": 734,
              "transactionType": "Logs"
            },
            {
                "fileId": "MNR",
                "fileName": "MNR.PICKUP.DOC.999.AVAILITY",
                "instanceEndTime": "2024-08-02 11:00:33",
                "instanceStartTime": "2024-08-02 11:00:33",
                "processDescription": "FTP",
                "processName": "MNR Claims",
                "processStatus": "Availity",
                "receiverName": "MNR.PICKUP.DOC.999.AVAILITY",
                "senderName": "Availity-Corrected",
                "totalDollarAmt": 95000,
                "totalTransactionCount": 190,
                "transactionType": "Logs"
              }
      
          ],
          "fileId": "",
          "fileName": "",
          "instanceEndTime": "",
          "instanceStartTime": "",
          "processDescription": "",
          "processName": "",
          "processStatus": "",
          "receiverName": "",
          "senderName": "",
          "totalDollarAmt": "",
          "totalTransactionCount": "",
          "transactionType": ""
        }
        

  ]
  
  
  module.exports = dataArray;

