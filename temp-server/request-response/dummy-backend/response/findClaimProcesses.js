module.exports = [
    {
       "fileId":4073201,
       "fileName":"MMC32104_16562969_20220127110016.837",
       "id":{
          "facilityId":"MHS",
          "instanceId":"REALMED.MMC32104.016562969.2201271100.837I",
          "serviceAreaId":"MMC"
       },
       "instanceEndTime":"2022-01-27 17:00:14",
       "instanceStartTime":"2022-01-27 17:00:14",
       "processDescription":"MMC 837I or 837P",
       "processInstanceSteps":[
          {
             "fileId":4073201,
             "id":{
                "instanceId":"REALMED.MMC32104.016562969.2201271100.837I",
                "stepNum":1
             },
             "stepDeadline":null,
             "stepDescr":"The 837 file is picked up from the billing system",
             "stepEndTime":"2022-01-27 17:00:14",
             "stepLongStatus":"The 837 claims file has been picked up from the billing system.",
             "stepStartTime":"2022-01-27 17:00:14",
             "stepStatus":"Completed"
          },
          {
             "fileId":0,
             "id":{
                "instanceId":"REALMED.MMC32104.016562969.2201271100.837I",
                "stepNum":2
             },
             "stepDeadline":null,
             "stepDescr":"The 837 is run through EDI Systems edits",
             "stepEndTime":null,
             "stepLongStatus":"This 837 does not require EDI Systems edits.",
             "stepStartTime":null,
             "stepStatus":"n/a"
          },
          {
             "fileId":0,
             "id":{
                "instanceId":"REALMED.MMC32104.016562969.2201271100.837I",
                "stepNum":3
             },
             "stepDeadline":null,
             "stepDescr":"The 837 is delivered to the payer or clearinghouse",
             "stepEndTime":null,
             "stepLongStatus":"The EDI Delivery Hub does not track payer delivery for this 837.",
             "stepStartTime":null,
             "stepStatus":"n/a"
          },
          {
             "fileId":4073201,
             "id":{
                "instanceId":"REALMED.MMC32104.016562969.2201271100.837I",
                "stepNum":4
             },
             "stepDeadline":"2022-01-27 17:10:14",
             "stepDescr":"The 837 is delivered to TREKS",
             "stepEndTime":"2022-01-27 17:00:14",
             "stepLongStatus":"The Availity-Corrected 837I has been delivered to TREKS, file '/HSR/Epic/MMC/837/MMC32104_16562969_20220127110016.837'",
             "stepStartTime":"2022-01-27 17:00:14",
             "stepStatus":"Completed"
          },
          {
             "fileId":0,
             "id":{
                "instanceId":"REALMED.MMC32104.016562969.2201271100.837I",
                "stepNum":5
             },
             "stepDeadline":null,
             "stepDescr":"A text file acknowledgment received from the payer or clearinghouse",
             "stepEndTime":null,
             "stepLongStatus":"This 837 does not receive a text acknowledgement.",
             "stepStartTime":null,
             "stepStatus":"n/a"
          },
          {
             "fileId":0,
             "id":{
                "instanceId":"REALMED.MMC32104.016562969.2201271100.837I",
                "stepNum":6
             },
             "stepDeadline":null,
             "stepDescr":"A 99x Acknowledgment is received from the payer or clearinghouse",
             "stepEndTime":null,
             "stepLongStatus":"This 837 does not receive a 99x acknowledgement.",
             "stepStartTime":null,
             "stepStatus":"n/a"
          }
       ],
       "processName":"MMC Claims",
       "processStatus":"Completed",
       "receiverName":"MultiplePayers",
       "senderName":"Availity-Corrected",
       "totalDollarAmt":948.0000,
       "totalTransactionCount":1,
       "transactionType":"837I"
    },
    {
       "fileId":4073197,
       "fileName":"MMC32104_16562649_20220126180056.837",
       "id":{
          "facilityId":"MHS",
          "instanceId":"REALMED.MMC32104.016562649.2201261800.837I",
          "serviceAreaId":"MMC"
       },
       "instanceEndTime":"2022-01-27 00:00:14",
       "instanceStartTime":"2022-01-27 00:00:14",
       "processDescription":"MMC 837I or 837P",
       "processInstanceSteps":[
          {
             "fileId":4073197,
             "id":{
                "instanceId":"REALMED.MMC32104.016562649.2201261800.837I",
                "stepNum":1
             },
             "stepDeadline":null,
             "stepDescr":"The 837 file is picked up from the billing system",
             "stepEndTime":"2022-01-27 00:00:14",
             "stepLongStatus":"The 837 claims file has been picked up from the billing system.",
             "stepStartTime":"2022-01-27 00:00:14",
             "stepStatus":"Completed"
          },
          {
             "fileId":0,
             "id":{
                "instanceId":"REALMED.MMC32104.016562649.2201261800.837I",
                "stepNum":2
             },
             "stepDeadline":null,
             "stepDescr":"The 837 is run through EDI Systems edits",
             "stepEndTime":null,
             "stepLongStatus":"This 837 does not require EDI Systems edits.",
             "stepStartTime":null,
             "stepStatus":"n/a"
          },
          {
             "fileId":0,
             "id":{
                "instanceId":"REALMED.MMC32104.016562649.2201261800.837I",
                "stepNum":3
             },
             "stepDeadline":null,
             "stepDescr":"The 837 is delivered to the payer or clearinghouse",
             "stepEndTime":null,
             "stepLongStatus":"The EDI Delivery Hub does not track payer delivery for this 837.",
             "stepStartTime":null,
             "stepStatus":"n/a"
          },
          {
             "fileId":4073197,
             "id":{
                "instanceId":"REALMED.MMC32104.016562649.2201261800.837I",
                "stepNum":4
             },
             "stepDeadline":"2022-01-27 00:10:14",
             "stepDescr":"The 837 is delivered to TREKS",
             "stepEndTime":"2022-01-27 00:00:14",
             "stepLongStatus":"The Availity-Corrected 837I has been delivered to TREKS, file '/HSR/Epic/MMC/837/MMC32104_16562649_20220126180056.837'",
             "stepStartTime":"2022-01-27 00:00:14",
             "stepStatus":"Completed"
          },
          {
             "fileId":0,
             "id":{
                "instanceId":"REALMED.MMC32104.016562649.2201261800.837I",
                "stepNum":5
             },
             "stepDeadline":null,
             "stepDescr":"A text file acknowledgment received from the payer or clearinghouse",
             "stepEndTime":null,
             "stepLongStatus":"This 837 does not receive a text acknowledgement.",
             "stepStartTime":null,
             "stepStatus":"n/a"
          },
          {
             "fileId":0,
             "id":{
                "instanceId":"REALMED.MMC32104.016562649.2201261800.837I",
                "stepNum":6
             },
             "stepDeadline":null,
             "stepDescr":"A 99x Acknowledgment is received from the payer or clearinghouse",
             "stepEndTime":null,
             "stepLongStatus":"This 837 does not receive a 99x acknowledgement.",
             "stepStartTime":null,
             "stepStatus":"n/a"
          }
       ],
       "processName":"MMC Claims",
       "processStatus":"Completed",
       "receiverName":"MultiplePayers",
       "senderName":"Availity-Corrected",
       "totalDollarAmt":948.0000,
       "totalTransactionCount":1,
       "transactionType":"837I"
    }
 ]