var d = new Date();
//using month array to get name of the month not his number in the year
var months =
  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
        image:'https://d3flpus5evl89n.cloudfront.net/5ae7a89edf82fe0acf63df87/5d31f5bfdf82fe23aacf5967/square_272x272.jpg'
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

    var calendar = document.getElementsByClassName('calendar')

      for(let i = 0; i < daysInMonth; i++) {
        //add html elements to calendar (div);
        //number of elements (coverDiv, dayEle) will depend on number of days in current month
        var coverDiv = document.createElement('DIV')
        var dayEle = document.createElement('DIV')
        var p1 = document.createElement('P')
        var p2 = document.createElement('P')
        var span = document.createElement('SPAN')

        p2.classList.add('p2')
        coverDiv.classList.add('coverDiv')
        dayEle.classList.add('dayDiv', i + 1)
        dayEle.appendChild(span)
        dayEle.appendChild(p1)
        dayEle.appendChild(p2)
        coverDiv.appendChild(dayEle)
        calendar[0].appendChild(coverDiv)
      }

        //borderHack - for solving css problem
        var borderHack = document.createElement('DIV')
        borderHack.classList.add('border-hack')
        calendar[0].appendChild(borderHack)

  //montly function shows events in calendar view
    function montly(){
      //show heading
      var h1 = document.getElementsByClassName('day-month')
      h1[0].innerHTML = currentMonth + ' ' + d.getFullYear()

      var eventsNames = [];
      var eventsTimes = [];

      var j = 0;
      var g = 0;

      //from events array(object) push specified props to new arrays
          for(let i = 0; i < events.length; i++) {
            eventsNames.push(events[i].name)
            eventsTimes.push(events[i].time)
          }

        //add values to days which has event, for other days add nothing
          for(var k = 0; k < daysInMonth; k++) {
            var p2 = document.getElementsByClassName('p2')

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

                  dayMonth[0].style.opacity = '0'
                  daysInWeek[0].style.opacity = '0'
                  options[0].style.opacity = '0'


                  calendar[0].classList.add('hs')

                  gif[0].style.animationDelay = '.4s'
                  gif[0].style.animationIterationCount = '1'
                  gif[0].style.animationPlayState = 'running'

                function exe1(){
                  options[0].classList.add('hs')
                  dayMonth[0].classList.add('hs')
                  daysInWeek[0].classList.add('hs')
                }
                setTimeout(exe1, 600)

                  detailsDiv[0].style.display = 'block'
                  detailsDiv[0].style.animationPlayState = 'running'

                  //get target class name(number) and use that as index to show data
                   function thisIndex(){
                    var index = this.event.target.classList.item(1)
                    var thisImage = document.createElement('IMG')
                    var thisHeading = document.createElement('H2')
                    var thisPara = document.createElement('P')
                    var targetParrent = this.event.target.parentElement.classList.item(1)
                    var position;

                      //add suffix to the day
                        if(targetParrent == 1){
                          position = 'st'
                        }
                        else if(targetParrent == 2) {
                          position = 'nd'
                        }
                        else if(targetParrent == 3) {
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
                    detailsDiv[0].getElementsByTagName('P')[0].innerHTML = ` ${days[index]} ${currentMonth.slice(0, 3)} ${targetParrent + position} ${events[index].time}  `
                  }
                  thisIndex()

                }

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

        //get this date and mark that box (div) in calendar
          function markCurrentDate() {
          var divs = document.getElementsByClassName('coverDiv')
          var currentDate = d.getDate()
            for(var p = 0; p < divs.length; p++) {
              if(p == currentDate) {
                divs[p-1].style.background = 'rgb(253, 102, 102)'
                divs[p-1].getElementsByClassName('dayDiv')[0].style.height = '98%'
                divs[p-1].getElementsByClassName('dayDiv')[0].style.width = '98.2%'
                divs[p-1].getElementsByClassName('dayDiv')[0].getElementsByTagName('span')[0].style.color = 'rgb(253, 102, 102)'
              }
            }
          }
          markCurrentDate()
      }

      montly()

  //on "back" button click return user to the calednar view
  var backBtn = document.getElementById('back-btn')

    backBtn.onclick = () => {
      var calendar = document.getElementsByClassName('calendar')
      var detailsDiv = document.getElementsByClassName('details-div')
      var gif = document.getElementsByClassName('gif')
      let dayMonth = document.getElementsByClassName('day-month')
      let daysInWeek = document.getElementsByClassName('daysInWeek')
      let options = document.getElementsByClassName('options')

      //run css and animations
      gif[0].style.display = 'none'
      gif[0].style.animationPlayState = 'paused'

      detailsDiv[0].style.animationPlayState = '1'
      detailsDiv[0].style.animationPlayState = 'running'
      detailsDiv[0].style.opacity = '0'
      detailsDiv[0].style.animationPlayState = 'running'
      detailsDiv[0].style.display = 'none'

      calendar[0].style.transition = '.5s opacity'
      calendar[0].classList.remove('hs')
      options[0].classList.remove('hs')
      dayMonth[0].classList.remove('hs')
      daysInWeek[0].classList.remove('hs')

    function exe1(){
      calendar[0].style.opacity = '1'
      dayMonth[0].style.opacity = '1'
      daysInWeek[0].style.opacity = '1'
      options[0].style.opacity = '1'
    }

    setTimeout(exe1, 600)

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
