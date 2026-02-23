// function hello(user='guest'){
//     console.log('hello ${user}')
// }
// hello('saumya');
// hello();

// function sum(a=0,b=0){
//     console.log('before return');
//     return (a+b);
//     // console.log('after return');  unreachable code
// }
// console.log(sum(23,24));
// console.log(sum(1));
// console.log(sum());

const hello=()=>console.log('hello');
hello();
function hello(user,callback){
    console.log('hello ${user}');
    callback();
}
hello('admin', function(){
    console.log(add(5,5))

});
hello('admin',function(){
    console.log(add(10,10))
});