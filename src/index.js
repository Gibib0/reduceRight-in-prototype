'use strict'

function MyArray(...args) {
	this.length = 0
	for (let i = 0; i < args.length; i++) {
		this[i] = args[i]
		this.length++
	}
}
