function WhatIsTheTime(timeInMirror) {
    //"05:25" --> "06:35";
    // Happy Coding
    var time = timeInMirror.split(":")
    var hour = time[0]
    var minute = time[1]
    hour = (11-hour)
    minute = (60-minute)
    if(hour < 0) {
        hour = hour + 12
    }
    if(hour === 00) {
        hour = 12
    }
    if (minute === 60) {
        minute = 00
        hour +=1
    }

    return [hour,minute].map((a) => {
        return (a > 9) ? a : '0' + a
    }).join(":")
}

console.log(WhatIsTheTime("06:35"), "05:25");
console.log(WhatIsTheTime("11:59"), "12:01");
console.log(WhatIsTheTime("12:02"), "11:58");
console.log(WhatIsTheTime("04:00"), "08:00");
console.log(WhatIsTheTime("06:00"), "06:00");
console.log(WhatIsTheTime("12:00"), "12:00");