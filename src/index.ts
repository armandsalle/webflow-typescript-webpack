import $ from 'jquery'
import { fill } from 'lodash'

import { toto } from './test'

const b = fill(Array(4), 'lol')

console.log('hello world')
console.log($('.my-element'))
console.log(toto(9))
console.log(b)
