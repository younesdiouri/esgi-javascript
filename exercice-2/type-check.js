function type_check_v1(object, type){
    return typeof object === type;
}

function type_check_v2(object, arr){
    checker = true;
    Object.keys(arr).forEach(function(element) {
        if(!checker) return checker;
        switch(element) {
            case 'type' :
                checker = (typeof object === arr["type"]);
                break;
            case 'value' :
                checker = (object == arr["value"]);
                break;
            case 'enum' :
                checker = (arr["enum"].includes(object));
                break;
        }
      });
     return checker;
}