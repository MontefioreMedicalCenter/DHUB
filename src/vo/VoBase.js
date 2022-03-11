import GlobalEventDispatcher from '../service/utils/GlobalEventDispatcher'

export default class VoBase {
	fromJson(obj) {
		const keys = Object.keys(obj)

		for (const key of keys) {
			//for each key in json
			if (obj[key] instanceof Array && this[key]) {
				//this property is an array
				const array = obj[key]
				this[key].length = 0 //reset my array
				for (const arrItemJson of array) {
					// for each item in incoming array
					const complexProperty = this.getComplexProperty(key)
					if (complexProperty) {
						//if its a complex array (like user has list of roles)
						this[key].push(complexProperty.fromJson(arrItemJson)) //push complex child
					} else {
						this[key].push(arrItemJson) //its a simple child(string)
					}
				}
			} else {
				//not an array
				this.applyProperty(key, obj) //apply property
			}
		}
		return this
	}
	applyProperty(key, obj) {
		const complexProperty = this.getComplexProperty(key) //this is a complex property like IdRoleMap
		if (complexProperty && obj[key] !== null) {
			//complex properties or dates/numbers etc.
			this[key] = complexProperty.fromJson(obj[key]) //parse it and apply recursively
		} else {
			//string properties.
			this[key] = obj[key] //simple property like string
		}
	}
	getComplexProperty(key) {
		if(key === 'instanceEndTime' || key === 'instanceStartTime' || key ==='stepStartTime' || key === 'stepEndTime' || key === 'stepDeadline' || key === 'logDatetime' || key === 'paymentDate' || key === 'postingCompleteDate' || key === 'pricingCompleteDate' || key === 'rebillDate' || key === 'denialReviewStartDate' || key === 'remitDate' ||  key ==='denialRemitDate') {
			return this.dateProxy2(key)
		}else if (key.endsWith('Date') || key === 'dateOfBirth' || key === 'riDos') {
			return this.dateProxy2(key)
		}
		return null
	}

	dateProxy() {
		return {
			fromJson: dateVal => {
				const result = new Date(Date.parse(dateVal))
				return result
			}
		}
	}
	dateProxy2(key) {
		return {
			fromJson: dateVal => {

				const result = dateVal ? new Date(new Date(Date.parse(dateVal)).getTime() - new Date(Date.parse(dateVal)).getTimezoneOffset()* 60000) : dateVal
				// console.log(key, result)
				return result
			}
		}
	}
	numberProxy() {
		return {
			fromJson: numVal => {
				return parseFloat(numVal)
			}
		}
	}
	dispatch(evt) {
		GlobalEventDispatcher.instance().dispatchEvent(evt)
	}
}
VoBase.prototype.typeName = VoBase.typeName = 'VoBase' //for quick inspection
