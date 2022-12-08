let user = {
    name: "Laziz",
    surname: "Salokhiddinov",
    age: 17,
    gender: "male",
    look: {
        hairColor: "green",
        eyeColor: "black",
        height: 172,
        weidht: 68,
    },
    passport: {
        serries: "AA",
        number: "3294804",
        date: 2133,
        false: false,
        f: {
            name: "hello",
        }
    },
    wives: ["Alexandra", "Aziza", "Zafara", "Dasha"]
}

let types = {
    string: [],
    number: [],
    object: [],
    boolean: [],
    other: []
}
let newArrays = []

let newObject = Object.assign({}, user.look, user.passport)

let objectKeys = Object.keys(newObject)
let objectValues = Object.values(newObject)

newArrays.push(...objectKeys, ...objectValues)

newArrays.filter(item => {
    (typeof (item) == "string") ? types.string.push(item) :
        (typeof (item) == "number") ? types.number.push(item) :
            (typeof (item) == "object") ? types.object.push(item) :
                (typeof (item) == "boolean") ? types.boolean.push(item) : 
                    types.other.push(item)
})

console.log(types);