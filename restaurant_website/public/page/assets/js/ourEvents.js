var d = new Date();
//using month array to get name of the month not his number in the year
var months =
  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var getMonth = d.getMonth()
var currentMonth = months[d.getMonth()]
var daysInMonth = new Date(d.getYear(), d.getMonth()+1, 0).getDate()
//using days array to get name of the day not his number in the week
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var getDay = days[d.getDay()]

//events data
var events = [
      {
        time: '11am-4pm',
        date:'',
        name:'Sunday Brunch - LA',
        image:'https://d3flpus5evl89n.cloudfront.net/5ae7a89edf82fe0acf63df87/5b88e357df82fe27b390ebe2/square_272x272.jpg'
      },
      {
        time: '5pm-12am',
        date:'',
        name:'Mezcal Monday - LA',
        image:'https://d3flpus5evl89n.cloudfront.net/5ae7a89edf82fe0acf63df87/5b88e416df82fe27b390eef2/square_272x272.jpg'
      },
      {
        time: '5pm-2am',
        date:'',
        name:'Toca Tuesday - LA',
        image:'https://d3flpus5evl89n.cloudfront.net/5ae7a89edf82fe0acf63df87/5d23da9cdf82fe4d681b287a/square_272x272.jpg'
      },
      //<these objects stay empty
      {
        time: '',
        date:'',
        name:'',
        image:''
      },
      {
        time: '',
        date:'',
        name:'',
        image:''
      },
      {
        time: '',
        date:'',
        name:'',
        image:''
      },
      // />
      {
        time: '11am-4pm',
        date:'',
        name:'Saturday Brunch - LA',
        image:'https://d3flpus5evl89n.cloudfront.net/5ae7a89edf82fe0acf63df87/5d31f9dedf82fe23aacf7185/square_272x272.jpg'
      }
  ]
var monthBtn = document.getElementById('month')
var agenBtn = document.getElementById('agen')
var pinBtn = document.getElementById('pinb')


var leftArrow = document.getElementsByClassName('fa-angle-left')
var rightArrow = document.getElementsByClassName('fa-angle-right')
var m = 0;
//pass variable to make only one click available to see different events views (agenda, pinboard, monthly)
var pass = 0;
var pass2 = 0;
var pass3 = 0;
//limit to only 1 click for view button
var isActive1 = 'active'
var isActive2 = 'active'
var isActive3 = 'active'

//cl - short for console.log
var cl = (x) => {
  return console.log(x)
}

monthBtn.onclick = function() {
 if(isActive1 == 'active'){
  if(pass == 0){
    if(pass3 == 1) {
     document.getElementsByClassName('events')[0].removeChild(document.getElementsByClassName('pinboard')[0])
   }
    else if(pass2 == 1){
      document.getElementsByClassName('events')[0].removeChild(document.getElementsByClassName('agenda')[0])
    }
   if(document.getElementsByClassName('calendar')[0] == undefined){
     let div = document.createElement('div')
     div.classList.add('calendar')
     document.getElementsByClassName('events')[0].appendChild(div)
   }
   document.getElementsByClassName('daysInWeek')[0].style.display = 'flex'

  //on arrow click (left, rigth) show months (with limit +- 2 months)
   leftArrow[0].onclick = () => {
      m--
        if(m >= -2){
          removeDays()
          makeCalendarGrid()
          montly()
        }
        else if (m < -2){
          m = -2
        }
   }

   rightArrow[0].onclick = () => {
      m++
        if(m <= 2){
          removeDays()
          makeCalendarGrid()
          montly()
        }
        else if(m > 2){
          m = 2
        }
   }

var calendar = document.getElementsByClassName('calendar')

     function makeCalendarGrid(){
      //35 because calendar will be 7x5 on all devices,
      // and that way is good to match days from months to correct day in weeek
        for(let i = 0; i < 35; i++) {
          //add html elements to calendar (div);
          //number of elements (coverDiv, dayEle) will depend on number of days in current month
          var coverDiv = document.createElement('DIV')

          calendar[0].appendChild(coverDiv)
          coverDiv.classList.add('coverDiv')
        }

        function daysToCalendar(){
            var daysInMonth
          //get day of first day of that month and his day in week, that weekly index use as start position
          if(m == -2){
            currentMonth = new Date(d.getFullYear(), d.getMonth() - 1, 01)
            daysInMonth = new Date(d.getFullYear(),  d.getMonth() + (m) +1 , 0).getDate()
          }
          else{
            currentMonth = new Date(d.getFullYear(), d.getMonth() + (m), 01)
            daysInMonth = new Date(d.getFullYear(),  d.getMonth() + (m) +1 , 0).getDate()
          }
          var i = currentMonth.getDay()

          //mora da ide gore 9 za mesec a dole 10 kako bi se uskladilo
          // var daysInMonth = new Date(d.getFullYear(),  d.getMonth() + (m) +1 , 0).getDate() + i

            for(i; i < daysInMonth; i++) {
              var dayEle = document.createElement('DIV')
              var p1 = document.createElement('P')
              var p2 = document.createElement('P')
              var span = document.createElement('SPAN')
              var coverDiv = document.getElementsByClassName('coverDiv')

              p2.classList.add('p2')
              dayEle.classList.add('dayDiv', i + 1)
              dayEle.appendChild(span)
              dayEle.appendChild(p1)
              dayEle.appendChild(p2)

              coverDiv[i].appendChild(dayEle)

            }
         }daysToCalendar()
   }makeCalendarGrid()

//show only days in this month removing days from last presented month
    function removeDays(){
      var calendarNodes = document.getElementsByClassName('coverDiv')
      let i =  0
        for(i; i < 35; i++){
          calendarNodes[0].style.display = 'none';
          
          calendar[0].removeChild(calendarNodes[0])
            if(i == undefined){
              i = i - 1
            }
        }
    }


  //montly function shows events in calendar view
    function montly(){
      //show heading
      var h1 = document.getElementsByClassName('day-month')
      var thisMonth = d.getMonth()
      var thisYear = d.getFullYear()

    function addHeading(){
      //show heading
      var h1 = document.getElementsByClassName('day-month')
      var thisMonth = d.getMonth()
      var thisYear = d.getFullYear()

      if(m > 0){
        //let know other statements that m was > than 0 by setting:
        check = 1;
         //if is undefined, it means it gives month index bigger than months.length and than go to next year and reset index to 0(1)
         if(months[thisMonth + (m)] == undefined){
            d.setFullYear(thisYear + 1)
            d.setMonth(0)
            h1[0].innerHTML = months[d.getMonth()] + ' ' + d.getFullYear()
         }
         //else if not undefined it means current month is not December and stay in this year
         else if(months[thisMonth + (m)] != undefined){
           h1[0].innerHTML = months[d.getMonth() + m] + ' ' + d.getFullYear()
         }
       }

       else if(m < 0){
         //let know other statements that m was > than 0 by setting:
         check2 = 2;
         if(months[thisMonth + (m)] == undefined || m == -1){
           // cl('-1 ali na 682linija')
           cl('1)')
           d.setFullYear(2019)
           d.setMonth(11)
           currentMonth = new Date(d.getFullYear(), d.getMonth(), 01)
           cl(currentMonth)
           h1[0].innerHTML = months[d.getMonth() + (m) +1] + ' ' + d.getFullYear()
         }
         else if(months[thisMonth + (m)] != undefined) {
           // cl('-2')
           cl('2)')
           cl(currentMonth)
           h1[0].innerHTML = months[d.getMonth() + (m) +1] + ' ' + d.getFullYear()
         }
       }

       else if(m == 0){
         if(check == undefined){
           d = new Date()
            currentMonth = new Date(d.getFullYear(), d.getMonth() + (m), 01)
           // d.setFullYear(d.getFullYear())
           // d.setMonth(thisMonth)
           h1[0].innerHTML = months[d.getMonth() + (m)] + ' ' + d.getFullYear()
         }
         else if(check == 1){
             d = new Date()
             d.setMonth(0)
             d.setFullYear(d.getFullYear())
             // d.setMonth(thisMonth)
             h1[0].innerHTML = months[d.getMonth()] + ' ' + d.getFullYear()
             check = undefined
         }
         else if (check2 == 2 ){
           d.setMonth(11)
           // d.setMonth(thisMonth)
           h1[0].innerHTML = months[d.getMonth() + (m)] + ' ' + d.getFullYear()
           check2 = undefined
         }
         cl(currentMonth)
          }
      }
      addHeading()

      var eventsNames = [];
      var eventsTimes = [];

      var j = currentMonth.getDay();
      var g = currentMonth.getDay();
      console.log(currentMonth)

  //from events array(object) push specified props to new arrays
      for(let i = 0; i < events.length; i++) {
        eventsNames.push(events[i].name)
        eventsTimes.push(events[i].time)
    }


  //add values to days which has event, for other days add nothing
  var p2 = document.getElementsByClassName('p2')
          for(var k = 0; k < daysInMonth; k++) {
            if(p2[k] == undefined) {
              // console.log('')
            }
            else {
            //on event click show user new window (page) with more details
                p2[k].onclick = () => {
                  var calendar = document.getElementsByClassName('calendar')
                  var detailsDiv = document.getElementsByClassName('details-div')
                  var gif = document.getElementsByClassName('gif')
                  let dayMonth = document.getElementsByClassName('day-month')
                  let daysInWeek = document.getElementsByClassName('daysInWeek')
                  let options = document.getElementsByClassName('options')

                  //run css and animations
                  calendar[0].style.opacity = '0'
                  gif[0].style.display = 'block';

                  dayMonth[0].style.transition = '.5s opacity'
                  daysInWeek[0].style.transition = '.5s opacity'
                  options[0].style.transition = '.5s opacity'
                  leftArrow[0].style.transition = '.5s opacity'
                  rightArrow[0].style.transition = '.5s opacity'

                  dayMonth[0].style.opacity = '0'
                  daysInWeek[0].style.opacity = '0'
                  options[0].style.opacity = '0'
                  leftArrow[0].style.opacity = '0'
                  rightArrow[0].style.opacity = '0'


                  calendar[0].classList.add('hs')

                  gif[0].style.animationDelay = '.4s'
                  gif[0].style.animationIterationCount = '1'
                  gif[0].style.animationPlayState = 'running'

                    function exe1(){
                      options[0].classList.add('hs')
                      dayMonth[0].classList.add('hs')
                      daysInWeek[0].classList.add('hs')
                      leftArrow[0].classList.add('hs')
                      rightArrow[0].classList.add('hs')
                    }setTimeout(exe1, 600)

                    detailsDiv[0].style.display = 'block'
                    detailsDiv[0].style.animationPlayState = 'running'

                    //"Detail window"
                    //get target class name(number) and use that as index to show data
                     function thisIndex(){
                      var index = this.event.target.classList.item(1)
                      var thisImage = document.createElement('IMG')
                      var thisHeading = document.createElement('H2')
                      var thisPara = document.createElement('P')
                      var targetparent = this.event.target.parentElement.classList.item(2)
                      var position;

                        //add suffix to the day
                          if(targetparent == 1){
                            position = 'st'
                          }
                          else if(targetparent == 2) {
                            position = 'nd'
                          }
                          else if(targetparent == 3) {
                            position = 'rd'
                          }
                          else {
                            position = 'th'
                          }

                      thisImage.setAttribute('src', events[index].image)

                      //set these classes for easier removing later, when "back" button is clicked
                      thisImage.classList.add('newNodes')
                      thisHeading.classList.add('newNodes')
                      thisPara.classList.add('newNodes')

                      detailsDiv[0].appendChild(thisHeading)
                      detailsDiv[0].appendChild(thisPara)
                      detailsDiv[0].appendChild(thisImage)

                      detailsDiv[0].getElementsByTagName('H2')[0].innerHTML = events[index].name
                      if(m >= 0) {
                        detailsDiv[0].getElementsByTagName('P')[0].innerHTML = ` ${days[index]} ${months[d.getMonth() + (m)].slice(0, 3)} ${indexPlace + position} ${events[index].time} `
                      }
                      else if (m < 0) {
                        detailsDiv[0].getElementsByTagName('P')[0].innerHTML = ` ${days[index]} ${months[d.getMonth() + (m) + 1].slice(0, 3)} ${indexPlace + position} ${events[index].time} `
                      }
                    }thisIndex()
                }
              calendar[0].getElementsByClassName('dayDiv')[k].classList.add(parseInt(k+1))
              calendar[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('span')[0].innerHTML = parseInt(k+1)
              calendar[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('p')[0].innerHTML = eventsTimes[j]
              calendar[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('p')[1].innerHTML = eventsNames[j]
               //add class for each element (0 - 6) and use that class as index to get data for details page
              calendar[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('p')[1].classList.add(j)

              j++
              g++
                 if (j == eventsTimes.length && g == days.length) {
                   j = 0;
                   g = 0;
                 }
                   else if(eventsTimes[j] == undefined && eventsNames[j] == undefined){
                     calendar[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('p')[0].innerHTML = '';
                      calendar[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('p')[1].innerHTML = '';

                   }
                     else if (days[g-1] == "Wednesday" || days[g-1] == "Thursday" || days[g-1] == "Friday" ) {
                       calendar[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('p')[0].style.display = 'none'
                       calendar[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('p')[1].style.display = 'none'
                  }
                }
        }

        //get this date and mark that box (div) in calendar
          // function markCurrentDate() {
          //   if(d.getMonth == )
          //     var divs = document.getElementsByClassName('coverDiv')
          //     var currentDate = d.getDate()
          //       for(var p = 0; p < divs.length; p++) {
          //         if(p == currentDate) {
          //           console.log(divs.length)
          //           divs[p-1].style.background = 'rgb(253, 102, 102)'
          //           divs[p-1].getElementsByClassName('dayDiv')[0].style.height = '98%'
          //           divs[p-1].getElementsByClassName('dayDiv')[0].style.width = '98.2%'
          //           divs[p-1].getElementsByClassName('dayDiv')[0].getElementsByTagName('span')[0].style.fontSize = '18px'
          //           divs[p-1].getElementsByClassName('dayDiv')[0].getElementsByTagName('span')[0].style.fontWeight = 'bold'
          //           divs[p-1].getElementsByClassName('dayDiv')[0].getElementsByTagName('span')[0].style.color = 'rgb(253, 102, 102)'
          //         }
          //       }
          // }markCurrentDate()
      }montly()

      pass2 = 0
      pass3 = 0
      pass++
    }
    isActive1 = ''
    isActive2 = 'active'
    isActive3 = 'active'
 }
 else {}
}//month view

//when user land on the page, show one event view(agenda in this case)
  function showOneOfTheViews() {
    let div = document.createElement('div')
    div.classList.add('agenda')
    document.getElementsByClassName('events')[0].appendChild(div)
      pass2++
      showEvents()
      montly()
      isActive2 = ''
  }showOneOfTheViews()


  agenBtn.onclick = function(){
    if(isActive2 == 'active'){
      if(pass2 == 0 ){
       if(pass == 1){
         document.getElementsByClassName('events')[0].removeChild(document.getElementsByClassName('calendar')[0])
         document.getElementsByClassName('daysInWeek')[0].style.display = 'none'
         } else if(pass3 == 1) {
           document.getElementsByClassName('events')[0].removeChild(document.getElementsByClassName('pinboard')[0])
         }
         let div = document.createElement('div')
         div.classList.add('agenda')
         document.getElementsByClassName('events')[0].appendChild(div)
      }
        pass = 0
        pass3 = 0
        pass2++
        showEvents()
        montly()
        isActive2 = ''
        isActive1 = 'active'
        isActive3 = 'active'
      }
      else {}
  }

  //pinColl which contains numbers of elements with class name "pinColumn"
  var pinColl = 0
  var n = 1;
  //dayArr will have all dayDivs of pinboard Columns
  var dayArr = []
  //kArr will have values of k variable, from daysInMonth loop
  var kArr = []
  var pinColumn = document.getElementsByClassName('pinColumn')

  //add class to "dayDiv" for pinboard view
  function pushToPinArr(){
       if(pass3 == 1){
        for(let i = 0; i < pinColumn.length; i++){
          if(pinColl < pinColumn[pinColl].getElementsByClassName('dayDiv').length){
            for(let i = 0; i < pinColumn[pinColl].getElementsByClassName('dayDiv').length; i++){
              dayArr.push(pinColumn[pinColl].getElementsByClassName('dayDiv')[i])
              }
            if(pinColl + 1 != 5){
              pinColl++
            }
          }
        }
      }
      if(pass3 == 1){
        if(pass3 == 1){
           for(let i = 0; i < dayArr.length; i++){
             dayArr[i].classList.add(kArr[i])
         }
       }
    }
  }

  pinBtn.onclick = function(){
    if(isActive3 == 'active'){
      if(pass3 == 0){
        pushToPinArr()
          if(pass == 1){
            document.getElementsByClassName('daysInWeek')[0].style.display = 'none'
            document.getElementsByClassName('events')[0].removeChild(document.getElementsByClassName('calendar')[0])
          } else if(pass2 == 1){
            document.getElementsByClassName('events')[0].removeChild(document.getElementsByClassName('agenda')[0])
          }
          let div = document.createElement('div')
          div.classList.add('pinboard')
          document.getElementsByClassName('events')[0].appendChild(div)
      }
        pass = 0
        pass2 = 0
        pass3++
        showEvents()
        montly()
        isActive3 = ''
        isActive1 = 'active'
        isActive2 = 'active'
     }
     else {}
  }

  //on arrow click (left, rigth) show months (with limit +- 2 months)
  //arrowType variable for passing value (right / left) to function to let her know which one is triggered
  var arrowType;

   leftArrow[0].onclick = () => {
     arrowType = 'left'
      m--
        if(m >= -2){
          removeDays2()
          showEvents()
          montly()
        }
        else if (m < -2){
          m = -2
        }
   }

   rightArrow[0].onclick = () => {
     arrowType = 'right'
      m++
        if(m <= 2){
          removeDays2()
          showEvents()
          montly()
        }
        else if(m > 2){
          m = 2
        }
   }

  var parentDiv;

  //show only days in this month removing days from last presented month
   function removeDays2(){
        var parentsNodes = document.getElementsByClassName('coverDiv')
         if(pass3 != 1){
          for(let i = 0; i < daysInMonth; i++){
            parentsNodes[0].style.display = 'none'
            parentDiv[0].removeChild(parentsNodes[0])
              if(i == undefined){
                i = i - 1
              }
          }
        }
        else if (pass3 == 1){
          parentsCol = document.getElementsByClassName('pinColumn')
          dayArr = []
          kArr = []
          for(let i = 0; parentsCol.length > 0; i++){
            parentDiv[0].removeChild(parentsCol[0])
          }
        }
      }

  function showEvents(){
    let i = 0;

     for(let i = 0; i < daysInMonth; i++) {
       //add html elements to calendar (div);
       //number of elements (coverDiv, dayEle) will depend on number of days in current month
       var coverDiv = document.createElement('DIV')
         if(pass2 == 1){
           parentDiv = document.getElementsByClassName('agenda')
           parentDiv[0].appendChild(coverDiv)
         } else if (pass3 == 1){
           parentDiv = document.getElementsByClassName('pinboard')
         }
         coverDiv.classList.add('coverDiv')
       }

       //for easier manipulation with CSS, logic is to push elements in -
       //5 columns (i -> to first col. i -> to second...) ##plug
       var col = 1

       for(let i = 0; i < 5; i++) {
         let div = document.createElement('div')
         div.classList.add('pinColumn')
         parentDiv[0].appendChild(div)
       }


     function daysToCalendar(){
       //get day of first day of that month and his day in week, that weekly index use as start position
       if(m == -2){
         currentMonth = new Date(d.getFullYear(), d.getMonth() - 1, 01)
         var daysInMonth = new Date(d.getFullYear(),  d.getMonth() + (m) +1 , 0).getDate() + i - 1
       }
       else{
         currentMonth = new Date(d.getFullYear(), d.getMonth() + (m), 01)
         var daysInMonth = new Date(d.getFullYear(),  d.getMonth() + (m) +1 , 0).getDate() + i
       }

       // var i = currentMonth.getDay()

         for(let i = 0; i < daysInMonth; i++) {
           var dayEle = document.createElement('DIV')
           var imgDiv = document.createElement('DIV')
           var txtDiv = document.createElement('DIV')
           var p2 = document.createElement('P')
           var p1 = document.createElement('P')
           var img  = document.createElement('IMG')
           var span = document.createElement('SPAN')
           var coverDiv = document.getElementsByClassName('coverDiv')

           p2.classList.add('p2')
           if(pass2 == 1){
             dayEle.classList.add('dayDiv', i + 1)
           } else if(pass3 == 1){
             dayEle.classList.add('dayDiv')
           }
           imgDiv.appendChild(img)
           txtDiv.appendChild(p1)
           txtDiv.appendChild(p2)
           dayEle.appendChild(imgDiv)
           dayEle.appendChild(txtDiv)

           if(pass2 == 1){
             coverDiv[i].appendChild(dayEle)
           }

          //##in
           else if(pass3 == 1) {
              let coverDivEle = document.createElement('DIV')
              coverDivEle.classList.add('coverDiv')
              coverDivEle.appendChild(dayEle)
              parentDiv[0].appendChild(coverDivEle)
             if(col == 1) {
               document.getElementsByClassName('pinColumn')[0].appendChild(coverDivEle)
               col = 2
             }
             else if (col == 2) {
               document.getElementsByClassName('pinColumn')[1].appendChild(coverDivEle)
               col = 3
             }
             else if (col == 3) {
               document.getElementsByClassName('pinColumn')[2].appendChild(coverDivEle)
               col = 4
             }
             else if (col == 4) {
               document.getElementsByClassName('pinColumn')[3].appendChild(coverDivEle)
               col = 5
             }
             else if (col == 5) {
               document.getElementsByClassName('pinColumn')[4].appendChild(coverDivEle)
               col = 1
             }
           }
         }
      }daysToCalendar()
}

var check;
var check2;
var y = 0;

//display data
function montly(){
  //show heading
  var h1 = document.getElementsByClassName('day-month')
  var thisMonth = d.getMonth()
  var thisYear = d.getFullYear()

function addHeading(){
  //show heading
  var h1 = document.getElementsByClassName('day-month')
  var thisMonth = d.getMonth()
  var thisYear = d.getFullYear()

     if(m > 0){
       //let know other statements that m was > than 0 by setting:
       check = 1;
        //if is undefined, it means it gives month index bigger than months.length and than go to next year and reset index to 0(1)
        if(months[thisMonth + (m)] == undefined){
           d.setFullYear(thisYear + 1)
           d.setMonth(0)
           h1[0].innerHTML = months[d.getMonth()] + ' ' + d.getFullYear()
        }
        //else if not undefined it means current month is not December and stay in this year
        else if(months[thisMonth + (m)] != undefined){
          h1[0].innerHTML = months[d.getMonth() + m] + ' ' + d.getFullYear()
        }
      }

      else if(m < 0){
        //let know other statements that m was > than 0 by setting:
        check2 = 2;
        if(months[thisMonth + (m)] == undefined || m == -1){
          // cl('-1 ali na 682linija')
          cl('1)')
          d.setFullYear(2019)
          d.setMonth(11)
          currentMonth = new Date(d.getFullYear(), d.getMonth(), 01)
          cl(currentMonth)
          h1[0].innerHTML = months[d.getMonth() + (m) +1] + ' ' + d.getFullYear()
        }
        else if(months[thisMonth + (m)] != undefined) {
          // cl('-2')
          cl('2)')
          cl(currentMonth)
          h1[0].innerHTML = months[d.getMonth() + (m) +1] + ' ' + d.getFullYear()
        }
      }

      else if(m == 0){
        if(check == undefined){
          d = new Date()
           currentMonth = new Date(d.getFullYear(), d.getMonth() + (m), 01)
          // d.setFullYear(d.getFullYear())
          // d.setMonth(thisMonth)
          h1[0].innerHTML = months[d.getMonth() + (m)] + ' ' + d.getFullYear()
        }
        else if(check == 1){
            d = new Date()
            d.setMonth(0)
            d.setFullYear(d.getFullYear())
            // d.setMonth(thisMonth)
            h1[0].innerHTML = months[d.getMonth()] + ' ' + d.getFullYear()
            check = undefined
        }
        else if (check2 == 2 ){
          d.setMonth(11)
          // d.setMonth(thisMonth)
          h1[0].innerHTML = months[d.getMonth() + (m)] + ' ' + d.getFullYear()
          check2 = undefined
        }
        cl(currentMonth)
      }
  }
  addHeading()

  var eventsNames = [];
  var eventsTimes = [];
  var eventsImages = [];

  var j = currentMonth.getDay();
  var g = currentMonth.getDay();

//from events array(object) push specified props to new arrays
  for(let i = 0; i < events.length; i++) {
    eventsNames.push(events[i].name)
    eventsTimes.push(events[i].time)
    eventsImages.push(events[i].image)
}

//add values to days which has event, for other days add nothing
var dDiv = document.getElementsByClassName('dayDiv')
var col2 = 1;

      for(var k = 0; k < daysInMonth; k++) {
        if(dDiv[k] == undefined) {
          // console.log('')
        }
        else {
        //on event click show user new window (page) with more details
            dDiv[k].onclick = () => {
              var detailsDiv = document.getElementsByClassName('details-div')
              var gif = document.getElementsByClassName('gif')
              let dayMonth = document.getElementsByClassName('day-month')
              let daysInWeek = document.getElementsByClassName('daysInWeek')
              let options = document.getElementsByClassName('options')

              //run css and animations
              parentDiv[0].style.opacity = '0'
              gif[0].style.display = 'block';

              dayMonth[0].style.transition = '.5s opacity'
              daysInWeek[0].style.transition = '.5s opacity'
              options[0].style.transition = '.5s opacity'
              leftArrow[0].style.transition = '.5s opacity'
              rightArrow[0].style.transition = '.5s opacity'

              dayMonth[0].style.opacity = '0'
              daysInWeek[0].style.opacity = '0'
              options[0].style.opacity = '0'
              leftArrow[0].style.opacity = '0'
              rightArrow[0].style.opacity = '0'

              parentDiv[0].classList.add('hs')

              gif[0].style.animationDelay = '.4s'
              gif[0].style.animationIterationCount = '1'
              gif[0].style.animationPlayState = 'running'

                function exe1(){
                  options[0].classList.add('hs')
                  dayMonth[0].classList.add('hs')
                  daysInWeek[0].classList.add('hs')
                  leftArrow[0].classList.add('hs')
                  rightArrow[0].classList.add('hs')
                }setTimeout(exe1, 600)

                detailsDiv[0].style.display = 'block'
                detailsDiv[0].style.animationPlayState = 'running'

                //"Detail window"
                //get target class name(number) and use that as index to show data
                 function thisIndex(){
                   //event.currentTarget to stop influence on elements(childrens) which does not have attached onclick event
                  //index (class item 2) in dayDiv is as index for data from object (image, h2, p))
                  var index;
                  if(pass2 == 1){
                    index = this.event.currentTarget.classList.item(2)
                  } else if(pass3 == 1){
                    index = this.event.currentTarget.classList.item(1)
                  }
                  var thisImage = document.createElement('IMG')
                  var thisHeading = document.createElement('H2')
                  var thisPara = document.createElement('P')
                  //index place (class item 1) is to match correct date with using class item 1
                  var indexPlace;
                  if(pass2 == 1){
                    indexPlace = this.event.currentTarget.classList.item(1)
                  } else if(pass3 == 1){
                    indexPlace =  this.event.currentTarget.classList.item(2)
                  }

                  var position;

                    //add suffix to the day
                      if(indexPlace == 1){
                        position = 'st'
                      }
                      else if(indexPlace == 2) {
                        position = 'nd'
                      }
                      else if(indexPlace == 3) {
                        position = 'rd'
                      }
                      else {
                        position = 'th'
                      }

                  thisImage.setAttribute('src', events[index].image)

                  //set these classes for easier removing later, when "back" button is clicked
                  thisImage.classList.add('newNodes')
                  thisHeading.classList.add('newNodes')
                  thisPara.classList.add('newNodes')

                  detailsDiv[0].appendChild(thisHeading)
                  detailsDiv[0].appendChild(thisPara)
                  detailsDiv[0].appendChild(thisImage)

                  detailsDiv[0].getElementsByTagName('H2')[0].innerHTML = events[index].name
                  if(m >= 0) {
                    detailsDiv[0].getElementsByTagName('P')[0].innerHTML = ` ${days[index]} ${months[d.getMonth() + (m)].slice(0, 3)} ${indexPlace + position} ${events[index].time} `
                  }
                  else if (m < 0) {
                    detailsDiv[0].getElementsByTagName('P')[0].innerHTML = ` ${days[index]} ${months[d.getMonth() + (m) + 1].slice(0, 3)} ${indexPlace + position} ${events[index].time} `
                  }
                }thisIndex()
            }

            var position;
              //add suffix to the day
                if(k+1 == 1){
                  position = 'st'
                }
                else if(k+1 == 2) {
                  position = 'nd'
                }
                else if(k+1 == 3) {
                  position = 'rd'
                }
                else {
                  position = 'th'
                }

          parentDiv[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('p')[0].innerHTML = eventsNames[j]
          //in case arrow show month from past year, use "m" to check that
          if(m < 0){
               if(m == -1){
                 d.setFullYear(2019)
                 d.setMonth(11)
                 parentDiv[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('p')[1].innerHTML =
                 days[j].slice(0, 3) + ' ' + months[d.getMonth() + (m) + 1].slice(0, 3) + ' ' + parseInt(k+1) + position + ' ' + eventsTimes[j]
               }
               else if (m == -2){
                 // d.setFullYear(2019)
                 // d.setMonth(10)
                 parentDiv[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('p')[1].innerHTML =
                 days[j].slice(0, 3) + ' ' + months[d.getMonth() + (m) + 1].slice(0, 3) + ' ' + parseInt(k+1) + position + ' ' + eventsTimes[j]
               }
          }
          else if (m >= 0) {
            parentDiv[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('p')[1].innerHTML =
            days[j].slice(0, 3) + ' ' + months[d.getMonth() + (m)].slice(0, 3) + ' ' + parseInt(k+1) + position + ' ' + eventsTimes[j]
          }

          // cl(d.getFullYear())
          // cl(m)
          parentDiv[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('img')[0].setAttribute('src', eventsImages[j])
           //add class for each element (0 - 6) and use that class as index to get data for details page

           parentDiv[0].getElementsByClassName('dayDiv')[k].classList.add(j)

           if(pass2 == 1){
           parentDiv[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('p')[1].parentElement.parentElement.classList.add(j)
          }

          if(pass3 == 1){
            kArr.push(k + 1)
          }

          j++
          g++

             if (j == eventsTimes.length && g == days.length) {
               j = 0;
               g = 0;
             }
               else if(eventsTimes[j] == undefined && eventsNames[j] == undefined){
                  parentDiv[0].getElementsByClassName('coverDiv')[k].style.display = 'none'
                  parentDiv[0].getElementsByClassName('coverDiv')[k].style.display = 'none'
               }
                 else if (days[g-1] == "Wednesday" || days[g-1] == "Thursday" || days[g-1] == "Friday" ) {
                   parentDiv[0].getElementsByClassName('coverDiv')[k].style.display = 'none'
                   parentDiv[0].getElementsByClassName('coverDiv')[k].style.display = 'none'
              }
                else if(k > daysInMonth) {
                  parentDiv[0].getElementsByClassName('coverDiv')[k].style.display = 'none'
                  parentDiv[0].getElementsByClassName('coverDiv')[k].style.display = 'none'
                }
            }
    }

          pushToPinArr()

    //on "back" button click return user to the calendar view
    var backBtn = document.getElementById('back-btn')

        backBtn.onclick = () => {
          var mainDiv;
            if(document.getElementsByClassName('calendar')[0] == undefined || document.getElementsByClassName('calendar')[0].getElementsByClassName('coverDiv')[0] == undefined){
              mainDiv = parentDiv
            }
              else if(document.getElementsByClassName('calendar')[0].getElementsByClassName('coverDiv')[0] != undefined){
                mainDiv = document.getElementsByClassName('calendar')
              }
          var detailsDiv = document.getElementsByClassName('details-div')
          var gif = document.getElementsByClassName('gif')
          let dayMonth = document.getElementsByClassName('day-month')
          let daysInWeek = document.getElementsByClassName('daysInWeek')
          let options = document.getElementsByClassName('options')

          //run css and animations - begin
          gif[0].style.display = 'none'
          gif[0].style.animationPlayState = 'paused'

          detailsDiv[0].style.animationPlayState = '1'
          detailsDiv[0].style.animationPlayState = 'running'
          detailsDiv[0].style.opacity = '0'
          detailsDiv[0].style.animationPlayState = 'running'
          detailsDiv[0].style.display = 'none'

          mainDiv[0].style.transition = '.5s opacity'
          mainDiv[0].classList.remove('hs')
          options[0].classList.remove('hs')
          leftArrow[0].classList.remove('hs')
          rightArrow[0].classList.remove('hs')
          dayMonth[0].classList.remove('hs')
          daysInWeek[0].classList.remove('hs')

        function exe1(){
          mainDiv[0].style.opacity = '1'
          dayMonth[0].style.opacity = '1'
          daysInWeek[0].style.opacity = '1'
          options[0].style.opacity = '1'
          leftArrow[0].style.opacity = '1'
          rightArrow[0].style.opacity = '1'
        }

        setTimeout(exe1, 600)
        //run css animations - end

        var newNodes = detailsDiv[0].getElementsByClassName('newNodes')

             for(let i = 0; i < newNodes.length; i++){
               detailsDiv[0].removeChild(newNodes[i])
               detailsDiv[0].removeChild(newNodes[0])
                 if(i == newNodes.length ) {
                   i = 0;
                 }
                   else {
                     detailsDiv[0].removeChild(newNodes[i])
                   }
               }
          }

    //get this date and mark that box (div) in calendar
      // function markCurrentDate() {
      // var divs = document.getElementsByClassName('coverDiv')
      // var currentDate = d.getDate()
      //   for(var p = 0; p < divs.length; p++) {
      //     if(p == currentDate) {
      //       divs[p-1].style.background = 'rgb(253, 102, 102)'
      //     }
      //   }
      // }markCurrentDate()
  }
