// solved with forEach

// function average(nums) {
//     var total = 0;
//     nums.forEach(function(num) {
//         total += num;
//     });
//     var avg = total/nums.length;
//     console.log(Math.round(avg));
// }


// solved with for loop

function average(nums) {
    var total = 0;
    for(var i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    var avg = total/nums.length;
    console.log(Math.round(avg));
}


var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);
