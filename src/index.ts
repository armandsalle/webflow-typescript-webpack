import $ from 'jquery'
import { fill } from 'lodash'

import { toto } from './test'

console.log($('.my-element'))
console.log('hello world!')
console.log(toto(9))

const b = fill(Array(4), 'lol')

console.log(b)
