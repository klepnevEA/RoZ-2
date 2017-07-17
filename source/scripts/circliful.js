$(document).ready(function() {

var circlifulArr = [ 
            {
                el: "all-worker__circle-1",
                percent: 95
            },
            {
                el: "all-worker__circle-2",
                percent: 95
            },
            {
                el: "all-worker__circle-3",
                percent: 0
            },
            {
                el: "all-worker__circle-4",
                percent: 85
            },
            {
                el: "all-worker__circle-5",
                percent: 95
            },
            {
                el: "all-worker__circle-6",
                percent: 25
            },
            {
                el: "all-worker__circle-7",
                percent: 45
            },
            {
                el: "all-worker__circle-8",
                percent: 1
            }
        ];

var circlifulArrGray = [ 
            {
                el: "all-worker__circle_gray-1",
                percent: 95
            },
            {
                el: "all-worker__circle_gray-2",
                percent: 95
            },
            {
                el: "all-worker__circle_gray-3",
                percent: 0
            },
            {
                el: "all-worker__circle_gray-4",
                percent: 85
            },
            {
                el: "all-worker__circle_gray-5",
                percent: 95
            },
            {
                el: "all-worker__circle_gray-6",
                percent: 25
            },
            {
                el: "all-worker__circle_gray-7",
                percent: 45
            },
            {
                el: "all-worker__circle_gray-8",
                percent: 1
            }
        ];


        for(var i = 0; i<circlifulArr.length; i++) {

            $("#"+circlifulArr[i].el).circliful({
                animation: 1,
                percent: circlifulArr[i].percent,
                backgroundColor: "#fff",
                foregroundBorderWidth: 12,
                backgroundBorderWidth: 12
            });
        }

        for(var i = 0; i<circlifulArrGray.length; i++) {

            $("#"+circlifulArrGray[i].el).circliful({
                animation: 1,
                percent: circlifulArrGray[i].percent,
                backgroundColor: "#f3f3f3",
                foregroundBorderWidth: 12,
                backgroundBorderWidth: 12
            });
        }


}); 


