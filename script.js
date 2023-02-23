$(document).ready(OnReady)

let clicks = 1;
function OnReady() {
    console.log('Ready for the DOM');


    // Increase count when button is clicked

    $('#red-btn').on('click', increaseRedCount);
    $('#blue-btn').on('click', increaseBlueCount);
    $('#yellow-btn').on('click', increaseYellowCount);
    $('#green-btn').on('click', increaseGreenCount);
// Add Block to the DOM
    $('#red-btn').on('click', addARedBlockOfColor);
    $('#blue-btn').on('click', addABlueBlockOfColor);
    $('#green-btn').on('click', addAGreenBlockOfColor);
    $('#yellow-btn').on('click', addAYellowBlockOfColor);
   // $('.block.yellow-fill').on('click', deleteAYellowBlockOfColor)
// $(".block.red-fill").on("click", removeRedBlock)
// $(".block.yellow-fill").on("click", removeYellowBlock)
// $(".block.green-fill").on("click", removeGreenBlock)
// $(".block.blue-fill").on("click", removeBlueBlock)


let initialBlueCount =1;
let initialRedCount =1;
let initialYellowCount =1;
let initialGreenCount =1;




function addARedBlockOfColor() {
    console.log('Add a Red Block to Dom', addARedBlockOfColor);
    $('#blocks').append(`<div class="block red-fill"></div> `)
}
function addABlueBlockOfColor (){
    console.log('Add a Blue Block to Dom', addABlueBlockOfColor);
    $('#blocks').append(`<div class="block blue-fill"></div> `)
}
function addAGreenBlockOfColor (){
    console.log('Add a Green Block to Dom', addAGreenBlockOfColor);
    $('#blocks').append(`<div class="block green-fill"></div> `)
}
function addAYellowBlockOfColor (){
    console.log('Add a Yellow Block to Dom', addAYellowBlockOfColor);
    $('#blocks').append(`<div class="block yellow-fill"></div> `)
}
// function deleteAYellowBlockOfColor (){
//     console.log('Delete a Yellow Block from Dom', deleteAYellowBlockOfColor); 
//  $('#blocks' ).on( 'click', '.block.yellow-fill', deleteAYellowBlockOfColor );
// }
//  function deleteAGreenBlockOfColor (){
//     console.log('Remove a Green Block from Dom', deleteAGreenBlockOfColor);
//     $('#blocks').remove(`<div class="block green-fill"></div> `)

// }
// function removeGreenBlock () {
//     console.log('in removeGreenBlock');
//     //remove green block by clicking on any green block
//     //$(".block.green-fill").remove();
//     $(this).remove(`<div class="block green-fill"></div>`).remove('.block.green-fill');
// }
// function removeBlueBlock () {
//     console.log('in removeBlueBlock');
//     //remove blue block by clicking on any blue block
//     //$(".block.red-fill").remove();
//     $(this).remove(`<div class="block blue-fill"></div>`).remove('.block.blue-fill');
// }
// function removeYellowBlock () {
//     console.log('in removeYellowBlock');
//     //remove yellow block by clicking on any yellow block
//     //$(".block.red-fill").remove();
//     $(this).remove(`<div class="block yellow-fill"></div>`).remove('.block.yellow-fill');
// }


// function removeRedBlock () {
//     console.log('in removeRedBlock');
//     //remove red block by clicking on any red block
//     //$(".block.red-fill").remove();
//     $(this).remove(`<div class="block red-fill"></div>`).remove('.block.red-fill');
// }
function increaseRedCount(){
    initialRedCount = initialRedCount +1;
    $('#red-count').empty().append(`<span> ${initialRedCount}</span`)
};

function increaseYellowCount(){
    initialYellowCount = initialYellowCount +1;
    $('#yellow-count').empty().append(`<span>  ${initialYellowCount}</span`)
};

function increaseBlueCount(){
    initialBlueCount = initialBlueCount +1;
    $('#blue-count').empty().append(`<span> B${initialBlueCount}</span`)
};

function increaseGreenCount(){
    initialGreenCount = initialGreenCount +1;
    $('#green-count').empty().append(`<span>  ${initialGreenCount}</span`)
};
}