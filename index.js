function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(visualFlair = "*"){
    const innerFunction = function(adjectiveOne = "special") {
        return `You are ${visualFlair}${adjectiveOne}${visualFlair}!`;
    }
    return innerFunction;
}

