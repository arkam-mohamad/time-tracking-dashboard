import data from './data.json' assert {type: 'json'};
let daily = $('#daily');
let weekly = $('#weekly');
let monthly = $('#monthly');
let mainContainer = $('.main-container');


$(daily).click(function () { 
  let htmlContent = data.map(el => {
    let timeframe = el.timeframes.daily;
    let prevString = 'Yesterday';
    return htmlString(el, timeframe, prevString)
  });

  $('.click').removeClass('active');
  $(daily).addClass('active');
  $(mainContainer).html(htmlContent);
});


$(weekly).click(function () { 
  let htmlContent = data.map(el => {
    let timeframe = el.timeframes.weekly;
    let prevString = 'Last Week';
    return htmlString(el, timeframe, prevString)
  });
    
  $('.click').removeClass('active');
  $(weekly).addClass('active');
  $(mainContainer).html(htmlContent);
});


$(monthly).click(function () { 
  let htmlContent = data.map(el => {
    let timeframe = el.timeframes.monthly;
    let prevString = 'Last Month';
    return htmlString(el, timeframe, prevString)
  });
    
  $('.click').removeClass('active');
  $(monthly).addClass('active');
  $(mainContainer).html(htmlContent);
});


// function to generate html
function htmlString(el, timeframe, prevString){
  return `
    <div class="container ${el.title.toLowerCase()}">
      <div class="content">
        <div class="title">
          <h3>${el.title}</h3>
          <img src="./images/icon-ellipsis.svg" alt="icon-ellipsis">
        </div>
        <div class="time">
          <h4>${timeframe.current}hrs</h4>
          <p>${prevString} - ${timeframe.previous}hrs</p>
        </div>
      </div>
    </div>
    `
}

