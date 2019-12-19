var d = new Date();
var months =
  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var currentMonth = months[d.getMonth()]
var daysInMonth = new Date(d.getYear(), d.getMonth()+1, 0).getDate()
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var getDay = days[d.getDay()]

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
        image:''
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
      // />
      // {
      //   time: '5pm-2am',
      //   date:'',
      //   name:'Toca Tuesday - Scottsdatle',
      //   image:'https://d3flpus5evl89n.cloudfront.net/5ae7a89edf82fe0acf63df87/5dceed0fdf82fe0508292ee6/square_272x272.jpg'
      // },
      {
        time: '',
        date:'',
        name:'',
        image:''
      },
      {
        time: '11am-4pm',
        date:'',
        name:'Saturday Brunch - LA',
        image:'https://d3flpus5evl89n.cloudfront.net/5ae7a89edf82fe0acf63df87/5d31f9dedf82fe23aacf7185/square_272x272.jpg'
      }
  ]

    var calendar = document.getElementsByClassName('calendar')

      for(let i = 0; i < daysInMonth; i++) {
        var coverDiv = document.createElement('DIV')
        var dayEle = document.createElement('DIV')
        var p1 = document.createElement('P')
        var p2 = document.createElement('P')
        var span = document.createElement('SPAN')

        p2.classList.add('p2')
        coverDiv.classList.add('coverDiv')
        dayEle.classList.add('dayDiv')
        dayEle.appendChild(span)
        dayEle.appendChild(p1)
        dayEle.appendChild(p2)
        coverDiv.appendChild(dayEle)
        calendar[0].appendChild(coverDiv)
      }

        var borderHack = document.createElement('DIV')
        borderHack.classList.add('border-hack')
        calendar[0].appendChild(borderHack)

    function montly(){
      //show heading
      var h1 = document.getElementsByClassName('day-month')
      h1[0].innerHTML = currentMonth + ' ' + d.getFullYear()

      var eventsNames = [];
      var eventsTimes = [];

      var j = 0;
      var g = 0;
          for(let i = 0; i < events.length; i++) {
            eventsNames.push(events[i].name)
            eventsTimes.push(events[i].time)
          }
          console.log(eventsNames)
          for(var k = 0; k < daysInMonth; k++) {
            var p2 = document.getElementsByClassName('p2')

                p2[k].onclick = () => {
                  var calendar = document.getElementsByClassName('calendar')
                  var detailsDiv = document.getElementsByClassName('details-div')
                  var gif = document.getElementsByClassName('gif')
                  var thisIndex = calendar[0].getElementsByTagName('span')
                  calendar[0].style.opacity = '0'
                  gif[0].style.display = 'block';
                  gif[0].style.animationDelay = '.4s'
                  gif[0].style.animationPlayState = 'running'
                  detailsDiv[0].style.display = 'block'
                  detailsDiv[0].style.animationPlayState = 'running'
                    detailsDiv[0].innerHTML = thisIndex[0].textContent
                }
            calendar[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('span')[0].innerHTML = parseInt(k+1)
              calendar[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('p')[0].innerHTML = eventsTimes[j]
              calendar[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('p')[1].innerHTML = eventsNames[j]
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

          function markCurrentDate() {
          var divs = document.getElementsByClassName('coverDiv')
          var currentDate = d.getDate()
            for(var p = 0; p < divs.length; p++) {
              if(p == currentDate) {
                console.log('ovaj p je: ' + p)
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

      // var p2 = document.getElementsByClassName('p2')
      //
      //   for(let i=0; i < p2.length; i++) {
      //     p2[i].onclick = () => {
      //       var calendar = document.getElementsByClassName('calendar')
      //       var detailsDiv = document.getElementsByClassName('details-div')
      //       var gif = document.getElementsByClassName('gif')
      //
      //       calendar[0].style.opacity = '0'
      //       gif[0].style.display = 'block';
      //       gif[0].style.animationDelay = '.4s'
      //       gif[0].style.animationPlayState = 'running'
      //       detailsDiv[0].style.display = 'block'
      //       detailsDiv[0].style.animationPlayState = 'running'
      //         detailsDiv[0].innerHTML =
      //     }
      //   }
