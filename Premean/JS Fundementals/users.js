users = [
    {
        'fname': "Kermit",
        'lname': "the Frog",
        'languages': ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        'interests': {
            'music': ["guitar", "flute"],
            'dance': ["tap", "salsa"],
            'television': ["Black Mirror", "Stranger Things"]
        }
    },
    {
        'fname': "Winnie",
        'lname': "the Pooh",
        'languages': ["Python", "Swift", "Java"],
        'interests': {
            'food': ["honey", "honeycomb"],
            'flowers': ["honeysuckle"],
            'mysteries': ["Heffalumps"]
        }
    },
    {
        'fname': "Arthur",
        'lname': "Dent",
        'languages': ["JavaScript", "HTML", "Go"],
        'interests': {
            'space': ["stars", "planets", "improbability"],
            'home': ["tea", "yellow bulldozers"]
        }
    }
]

function userLanguages(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].fname + " " + arr[i].lname + " knows " + arr[i].languages + ".");
        var temp = [];
        for(var j = 0; j < Object.entries(arr[i].interests).length; j++){
            temp.push(Object.values(arr[i].interests)[j])  
        }
        console.log(arr[i].fname + " is also interested in " + temp)
        // console.log(arr[i]['interests'])
        // console.log(Object.entries(arr[i].interests).length)
    }
    
}

userLanguages(users)