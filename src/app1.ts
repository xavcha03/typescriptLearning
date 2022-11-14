//Alias
type User = {firstname: string, lastname: string}
type DateString = string
type Id = String | number
type Identity<ArgType> = (arg:ArgType) => ArgType
type Username = keyof User; //Renvois soit le type de firstname ou last name
type Username2 = User['firstname'] // doit renvoyer un type de firstname

//extraire un type par rapport a quelque chose qui existe
const user2 = {
    firstname : 'xavier',
    lastname : "Charles",
    age : 32
}

type User2 = typeof user2;

//forcer le type du generique
function consoleSize<Type extends{length: number}>(arg: Type): Type{
    console.log(arg.length);
    return arg;
}
const abb = consoleSize(['3', 2]);

function identity<ArgType>(arg: ArgType): ArgType{
    return arg
}

const aa = identity<number>(3);


function first<Type>(arg: Type[]): Type{
    return  arg[0];
}

const ab= first(["aeff", "defef", "frfrgrtg"]);

const ac: Array<string | number> = ["klj", "lkj", 3];

const user : User =  {firstname: "xavier", lastname : "charles"}

const compteur = document.querySelector<HTMLButtonElement>("#compteur")!

let i= 0;

const increment = (e: Event) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector('span');
    if(span){
        span.innerText = i.toString();
    }
}
/**
function printId(id: string | number){
    if(typeof id === "number"){
        console.log((id * 3).toString())
    }else{
        console.log(id.toUpperCase())
    }
}

function isDate(a: any): a is Date{
    return a instanceof Date

    
}

function exemple2(a: Date | HTMLInputElement){
    if(isDate(a)){
        a
    }
    // if("erthgth" in a){
    //     a
    // }
}

function exemple(a: string | string[] ){
    if(Array.isArray(a)){
        return a[0]
    }
    return a
} */



compteur?.addEventListener('click', increment);