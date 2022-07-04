let myObjects = [


    {x:  10, y: 20, width: 30, height: 30},


    {x: -40, y: 20, width: 30, height: 30},


    {x:   0, y:  0, width: 10, height:  5}


];
// function a(object,point) {
//     let myobject = myObjects.find(function (myobject) {
//             for (let i = 0; i < object.length; i++) {
//                 let obj = object[i];
//                 if (point.x >= obj.x && point.y >= obj.y && point.x <= (obj.x + obj.width) && point.y <= (obj.x + obj.height)) {
//                     return obj;
//                 } else {
//                     return -1;
//                 }
//             }
//         }
//     );
//     return myobject;
// };

let check=(object,point)=> {
    for (let i = 0; i < object.length; i++) {
        let obj = object[i];
        if (point.x >= obj.x && point.y >= obj.y && point.x <= (obj.x + obj.width) && point.y <= (obj.x + obj.height)) {
            return obj;
        } else {
            return -1;
        }
    }
}
console.log(check(myObjects, {x: 4, y: 2}));

