/**
 * Created by jihn on 2017/5/6.
 */
import {Map, List, Set, OrderedMap, OrderedSet, Record, fromJS} from 'immutable';

// fromJS将普通js转换成List或者map
fromJS({ a: {b: [10, 20, 30]}, c: 40}, function (key, value, path) {
    console.log(key, value, path);
});

const map1 = Map({
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4
});
const map2 = map1.set("b", 50);

console.log(map1.get("b"));
console.log(map2.get("b"));
// 判断map是否是有序的
console.log(OrderedMap.isOrderedMap(map1));
// map循环
map1.map(x => console.log(x));
// map翻转 key值变成value值，value变成key
console.log(map1.flip());
// map转成Array
console.log(map1.toArray());



const list1 = List([1,2]);
const list2 = list1.push(3,4,5);
// 向开头增加一个元素
const list3 = list2.unshift(0);
const list4 = list1.concat(list2, list3);

console.log(list1);
console.log(list2);
console.log(list3);
console.log(list4);

