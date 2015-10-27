(function (global) {
    if (!global.UAM) {
        global.UAM = {};
    }

    var Person = function (name) {
        this.myName = name[0];
        this.surName = name[1];
    };

    Person.prototype.sayHello = function () {
        return 'Hi I am ' + this.myName + ' ' + this.surName + '.';
    };

    function newObject() {
        this.context = arguments[0];
        this.argumenty = arguments[1];

        this.newObj = Object.create(this.context.prototype);

        this.context.call(this.newObj, this.argumenty);
        
        return this.newObj
    }

    global.UAM.newObject = newObject;
    var me = global.UAM.newObject(Person, ['Magdalena', 'Wojtkowiak']);
    console.log(me.sayHello())

}(window));

/*
 Zaimplementuj funkcję newObject, która będzie działać analogicznie do operatora new. Pierwszym parametrem funkcji niech będzie
 konstruktor, natomiast pozostałe to parametry konstruktora. Przykładowe zastosowanie:

 new MyClass(arg1, arg2) -> newObject(MyClass, arg1, arg2)
 */


