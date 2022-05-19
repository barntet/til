// "use strict";
function strictFn(a=0) {
  "use strict";
//   a = 000;
  //   a = 9999;
  console.log(a);
  arguments[0] = 888;
  console.log(arguments[0]);
}
strictFn(100);
