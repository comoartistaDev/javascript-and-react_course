const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]



let tbody = document.querySelector('table')['children'][0];
 
function makeTable(arr) {
    for (let i = 0; i < arr.length; i++) {
        let tr = document.createElement('tr');
 
        let awayScore = arr[i]['awayTeam']['points'];
        let homeScore = arr[i]['homeTeam']['points'];
 
        awayScore > homeScore ? (awayScore = `<b>${awayScore}</b>`) : (homeScore = `<b>${homeScore}</b>`);
 
        tr.innerHTML = `
            <td>${i + 1}</td>
            <td>${arr[i]['homeTeam']['team'] === 'Golden State' ? '' : '@'} Houston</td>
            <td>${awayScore} - ${homeScore}</td>
        `;
 
        if (arr[i]['awayTeam']['team'] === 'Golden State') {
            arr[i]['awayTeam']['isWinner'] === true ? tr.classList.add('won') : tr.classList.add('lost');
        } else {
            arr[i]['homeTeam']['isWinner'] === true ? tr.classList.add('won') : tr.classList.add('lost');
        }
 
        tbody.appendChild(tr);
    }
}
 
makeTable(warriorsGames);

// const ulParent = document.createElement('ul');
// for(let game of warriorsGames) {
//   const {homeTeam, awayTeam} = game;

//   const gameLi = document.createElement('li');
  
//   const {team:hTeam, points:hPoints} = homeTeam;
//   const {team:aTeam, points:aPoints} = awayTeam;

//   const teamNames = `${aTeam} @ ${hTeam}`;

//   let scoreLine;
//   if (aPoints > hPoints) {
//     scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
//     // gameLi.classList.add('win');

//   } else {
//     scoreLine = `${aPoints} - <b>${hPoints}</b>`;
//     // gameLi.classList.add('loss');
//   }  

//   if (hTeam === 'Golden State') {
//     awayTeam
//     gameLi.classList.add('loss')
//   } else {
//     homeTeam
//     gameLi.classList.add('win')
//   }

//   // const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
//   // gameLi.classList.add(warriors.isWinner ? 'win' : 'loss');
//   // console.log(warriors)

//   gameLi.innerHTML = `${teamNames} ${scoreLine}`
//   ulParent.append(gameLi);

// }

// document.body.prepend(ulParent);
