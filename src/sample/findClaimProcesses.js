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
    }
  ]
  
  
  module.exports = dataArray;

