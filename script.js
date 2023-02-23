$(document).ready(OnReady)

let clicks = 1;
function OnReady() {
    console.log('Ready for the DOM');

    $('#red-btn').on('click', addARedBlockOfColor);
    $('#blue-btn').on('click', addABlueBlockOfColor);
    $('#green-btn').on('click', addAGreenBlockOfColor);
    $('#yellow-btn').on('click', addAYellowBlockOfColor);
    $('.cancelMe').on('click', onCancel);
function onCancel() {
    console.log('$this) is', $(this));
}

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
function onCancel() {
    console.log('$this) is', $(this));

    function updateCountOnClick (){
    let updateCountOnClick = number++;
    console.log('When Button is Clicked Count Updates', updateCountOnClick);
   clicks += 1;
    $('.buttons').on('click' , updateCountOnClick)
}

 

 
  

}
};