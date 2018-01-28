var header = $('.header')
var nav_button = $('.nav_button')
var tableOfContents = $('#tableOfContents')

var container1 = $('.container1')
var text1 = $('.text1')
var text1_1 = $('.text1_1')
var text2 = $('.text2')
var text2_1 = $('.text2_1')
var arrowHolder1 = $('.arrow-holder-1')
var arrowIcon1 = $('.arrow-icon-1')
var arrowHolder2 = $('.arrow-holder-2')
var arrowIcon2 = $('.arrow-icon-2')

var container2 = $('.container2')
var container2_mainText = $('.container2_mainText')
var tab1 = $('#tab1')
var tab2 = $('#tab2')
var tab3 = $('#tab3')


arrowIcon1UpDown = [
    {
        elements: arrowIcon1,
        properties:
            { opacity: [1,1], translateY: ["10px","0px"]},
        options: {
            duration: 800,
            delay: 100,
            loop: true
        }
    }
]

arrowIcon2UpDown = [
    {
        elements: arrowIcon2,
        properties:
            { opacity: [1,1], translateY: ["10px","0px"]},
        options: {
            duration: 800,
            delay: 100,
            loop: true
        }
    }
]

introSequence = [
    {
        elements: text1,
        properties: 'fadeIn',
        options: {
            //duration: 2000,delay: 1000
        }
    },{
        elements: text1,
        properties: 'fadeOut',
        options: {
            //duration: 2000,delay: 1000
        }
    },{
        elements: text1_1,
        properties: 'fadeIn',
        options: {
            //duration: 2000, delay: 1000
        }
    },{
        elements: text1_1,
        properties: 'fadeOut',
        options: {
            //duration: 2000, delay: 1000
        }
    },{
        elements: text2,
        properties: { opacity: [1,[80,0]], top: ["35%",[200,0]], translateX: ["-50%","-50%"]},
        options: {
            duration: 500,
            // The value is false, indicating that the previous animation in the sequence started at the same time.
            // The default is true, indicating that the animation was completed before the start.
            loop: false, easing: "ease-out" 
        }
    },{
        elements: text2_1,
        properties: {opacity: [1,[80,0]], top: ["38%",[200,0]], translateX: ["-50%","-50%"]},
        options: { duration: 700, delay: 200, loop: false }
    },{
        elements: arrowHolder1,
        properties: { zIndex:4, translateX: ["-50%","-50%"]},
        options: { loop: false }
    },{
        elements: arrowHolder1,
        properties: { zIndex:4, opacity: [1,[80,0]], top: ["90%",[700,0]], translateX: ["-50%","-50%"]},
        options: {
            duration: 700,
            delay: 200,
            loop: false
        }
    },
    $.Velocity.RunSequence(arrowIcon1UpDown)
]

clickSequenceOne = [
    {
        elements: arrowHolder1,
        properties: 'fadeOut',
        options: { duration: 1000, delay: 200
        }
    },{
        elements: container1,
        properties: { translateY: "0%", opacity: 1 },
        options: { duration: 500, easing: "easeInOutSine" }
    },
    {
        elements: container2,
        properties: {
            translateY: "-100%",
            sequenceQueue: false
        },
        options: {
            duration: 700,
            easing: "easeInOutSine"
        }
    },
    
    {
        elements: container2_mainText,
        properties: { opacity: [1,[80,0]], top: ["35%",[200,0]], translateX: ["-5%","-5%"]},
        options: {
            duration: 900,
            // The value is false, indicating that the previous animation in the sequence started at the same time.
            // The default is true, indicating that the animation was completed before the start.
            loop: false,
            easing: "ease-out"
        }
    },
    {
        elements: arrowHolder2,
        properties: { zIndex:4, translateX: ["-50%","-50%"]},
        options: {
            loop: false
        }
    },

    {
        elements: arrowHolder2,
        properties: { zIndex:4, opacity: [1,[80,0]], top: ["90%",[700,0]], translateX: ["-50%","-50%"]},
        options: {
            duration: 700,
            delay: 200,
            loop: false
        }
    },
    $.Velocity.RunSequence(arrowIcon2UpDown)
]

$.Velocity.RunSequence(introSequence);

arrowHolder1.on('click', function () {
    $.Velocity.RunSequence(clickSequenceOne);
})

arrowHolder1.hover (
    function() {
        $('.arrow-icon-1').velocity('stop').velocity({ zIndex: 4, opacity:1, scaleX: 1.5, scaleY: 1.5})
    },
    function() {
        $('.arrow-icon-1').velocity('stop').velocity({ zIndex: 4, opacity:1, scaleX: 1, scaleY: 1}, { loop: false });
        $.Velocity.RunSequence(arrowIcon1UpDown)
    }
)

arrowHolder2.hover (
    function() {
        $('.arrow-icon-2').velocity('stop').velocity({ zIndex: 4, opacity:1, scaleX: 1.5, scaleY: 1.5})
    },
    function() {
        $('.arrow-icon-2').velocity('stop').velocity({ zIndex: 4, opacity:1, scaleX: 1, scaleY: 1}, { loop: false });
        $.Velocity.RunSequence(arrowIcon2UpDown)
    }
)

nav_button.on('click', function () {
    $.Velocity.RunSequence( clickNavButton );
})

tableOfContents.hover (
    function(){

    },
    function(){
        $.Velocity.RunSequence( clickOutsideNavButton );
    }
)

clickNavButton = [
    {
        elements: tableOfContents,
        properties: { zIndex: 4, opacity:1, right: "0%"},
        options: {
            duration: 200,
        }
    },
    {
        elements: tab1,
        properties: {
            left: "50%"
        },
        options: {
            duration: 200,
        }
    },
    {
        elements: tab2,
        properties: {
            left: "50%"
        },
        options: {
            duration: 200,
        }
    },
    {
        elements: tab3,
        properties: {
            left: "50%"
        },
        options: {
            duration: 200,
        }
    }
]

clickOutsideNavButton = [
    {
        elements: tableOfContents,
        properties: { zIndex: 4, opacity:1, right: "-26%"},
        options: {
            duration: 200,
        }
    },
    {
        elements: tab1,
        properties: {
            left: "100%"
        },
        options: {
            duration: 200,
        }
    },
    {
        elements: tab2,
        properties: {
            left: "100%"
        },
        options: {
            duration: 200,
        }
    },
    {
        elements: tab3,
        properties: {
            left: "100%"
        },
        options: {
            duration: 200,
        }
    }
]
       

    
    