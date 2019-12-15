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
      {
        time: '5pm-2am',
        date:'',
        name:'Toca Tuesday - Scottsdatle',
        image:'https://d3flpus5evl89n.cloudfront.net/5ae7a89edf82fe0acf63df87/5dceed0fdf82fe0508292ee6/square_272x272.jpg'
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

        dayEle.classList.add('dayDiv')
        dayEle.appendChild(p1)
        dayEle.appendChild(p2)
        coverDiv.appendChild(dayEle)
        calendar[0].appendChild(coverDiv)
      }

    function montly(){
      var eventsNames = [];
      var eventsTimes = [];

      var j = 0;
      var g = 0;
          for(let i = 0; i < events.length; i++) {
            eventsNames.push(events[i].name)
            eventsTimes.push(events[i].time)
          }
          for(var k = 0; k < daysInMonth; k++) {
              calendar[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('p')[0].innerHTML = eventsTimes[j]
               calendar[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('p')[1].innerHTML = eventsNames[j]
               if (j == eventsNames.length && g == days.length) {
                 console.log(j)
                 
                 j = 0;
                 g = 0;

               }
               else if(eventsNames[j] == undefined){
                 console.log(j)

                 calendar[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('p')[0].innerHTML = ''
                  calendar[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('p')[1].innerHTML = ''
               }
               else if (days[g] == "Wednesday" || days[g] == "Thursday" || days[g] == "Friday" ) {
                 calendar[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('p')[0].style.display = 'none'
                  calendar[0].getElementsByClassName('dayDiv')[k].getElementsByTagName('p')[1].style.display = 'none'
                }
              j++
              g++
        }
      }

      montly()
