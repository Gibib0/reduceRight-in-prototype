'use strict'

function MyArray(...args) {
	this.length = 0
	for (let i = 0; i < args.length; i++) {
		this[i] = args[i]
		this.length++
	}
}

MyArray.prototype.reduceRight = function(callback, initialValue) {
	let accum
	let startIndex

	if (initialValue) {
		accum = initialValue
		startIndex = this.length - 1
	} else {
		accum = this[this.length - 1]
		startIndex = this.length - 2
	}

	for (let i = startIndex; i >= 0; i--) {
		accum = callback(accum, this[i], i, this)
	}
	return accum
}

const arr = new MyArray(2, 4, 6, 7, 13, 20)

const res1 = arr.reduceRight((acc, cur) => acc + cur)
console.log(res1);

const res2 = arr.reduceRight((acc, cur) => acc + cur, 100)
console.log(res2);