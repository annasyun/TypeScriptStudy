var NumOutFunc = function (a, b) {
    return a + b;
};
var memberInfo = {
    name: "kim",
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
memberInfo.plusOne(1);
memberInfo.changeName();
