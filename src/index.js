import _ from 'lodash'
import p1 from './p1.js'
import p2 from './p2.js'

function component() {
	const element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
}

document.body.appendChild(component());
console.log("开始P1")
p1()
console.log("开始P2")
p2()
var a = ()=>{
	console.log("woshiES6")
}

a()