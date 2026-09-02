// import by ( commonjs ) oldest.
// const lodash = require("lodash");  

// import by ( module ) newest.
// يجب تغيير طريقة الاستيراد في ملف package-json إلى module ليعمل بنجاح.
import lodash from "lodash";

console.log(lodash.now());