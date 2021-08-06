/* Mockroblog client API stubs for prototyping */

let dict = {
  1: "ProfAvery",
  2: "KevinAWortman",
  3: "Beth_CSUF"
}

let tailwind_class = [
  "text-2xl",
  "text-left",
  "w-3/4",
  "p-6",
  "my-2",
  "font-mono",
  "whitespace-pre-line",
  "bg-indigo-600",
  "rounded-md",
  "overflow-auto"
]

let tailwind_class2 = [
  "text-2xl",
  "text-center",
  "w-auto",
  "p-4",
  "my-2",
  "font-mono",
  "whitespace-pre-line",
  "bg-indigo-600",
  "rounded-md"
]

let user_list = [
  'ProfAvery', 
  'KevinAWortman', 
  'Beth_CSUF'
]



export function createUser (username, email, password) {
  if (user_list.indexOf(username) < 0) {
    
    user_list.push(username);
    
    return {
      id: 4,
      username: username,
      email: email,
      password: password
    }
  }
}

export function authenticateUser (username, password) {
  if (username === 'ProfAvery' && password === 'password') {
    return {
      id: 1,
      username: 'ProfAvery',
      email: 'kavery@fullerton.edu',
      password: 'password'
    }
  } else if (username === 'KevinAWortman' && password === 'qwerty') {
    return {
      id: 2,
      username: 'KevinAWortman',
      email: 'kwortman@fullerton.edu',
      password: 'qwerty'
    }
  } else if (username === 'Beth_CSUF' && password === 'secret') {
    return {
      id: 3,
      username: 'Beth_CSUF',
      email: 'beth.harnick.shapiro@fullerton.edu',
      password: 'secret'
    }
  }

  return null
}

export function addFollower (userId, userIdToFollow) {
  if (userId > 3) {
    return {
      id: 6,
      follower_id: userId,
      following_id: userIdToFollow
    }
  }
}

export function removeFollower (userId, userIdToStopFollowing) {
  if (userId <= 3) {
    return {
      message: null
    }
  }
}

export function getUserTimeline (username) {
  switch (username) {
    case 'ProfAvery':
      return [
        {
          id: 2,
          user_id: 1,
          text: 'FYI: https://www.levels.fyi/still-hiring/',
          timestamp: '2021-07-24 05:11:12'
        },
        {
          id: 3,
          user_id: 1,
          text: 'Yes, the header file ends in .h. C++ is for masochists.',
          timestamp: '2021-07-24 05:09:12'
        },
        {
          id: 1,
          user_id: 1,
          text: 'Meanwhile, at the R1 institution down the street... https://uci.edu/coronavirus/messages/200710-sanitizer-recall.php',
          timestamp: '2021-07-24 05:06:12'
        }
      ]
    case 'KevinAWortman':
      return [
        {
          id: 5,
          user_id: 2,
          text: "I keep seeing video from before COVID, of people not needing to mask or distance, and doing something like waiting in line at Burger King. YOU'RE WASTING IT!",
          timestamp: '2021-07-24 05:10:12'
        },
        {
          id: 4,
          user_id: 2,
          text: 'If academia were a video game, then a 2.5 hour administrative meeting that votes to extend time 15 minutes is a fatality. FINISH HIM',
          timestamp: '2021-07-24 05:08:12'
        }
      ]
    case 'Beth_CSUF':
      return [
        {
          id: 6,
          user_id: 3,
          text: '#cpsc315 #engr190w NeurIPS is $25 for students and $100 for non-students this year! https://medium.com/@NeurIPSConf/neurips-registration-opens-soon-67111581de99',
          timestamp: '2021-07-24 05:07:12'
        }
      ]
    default:
      return []
  }
}

export function getPublicTimeline () {
  return [
    {
      id: 2,
      user_id: 1,
      text: 'FYI: https://www.levels.fyi/still-hiring/',
      timestamp: '2021-07-24 05:11:12'
    },
    {
      id: 5,
      user_id: 2,
      text: "I keep seeing video from before COVID, of people not needing to mask or distance, and doing something like waiting in line at Burger King. YOU'RE WASTING IT!",
      timestamp: '2021-07-24 05:10:12'
    },
    {
      id: 3,
      user_id: 1,
      text: 'Yes, the header file ends in .h. C++ is for masochists.',
      timestamp: '2021-07-24 05:09:12'
    },
    {
      id: 4,
      user_id: 2,
      text: 'If academia were a video game, then a 2.5 hour administrative meeting that votes to extend time 15 minutes is a fatality. FINISH HIM',
      timestamp: '2021-07-24 05:08:12'
    },
    {
      id: 6,
      user_id: 3,
      text: '#cpsc315 #engr190w NeurIPS is $25 for students and $100 for non-students this year! https://medium.com/@NeurIPSConf/neurips-registration-opens-soon-67111581de99',
      timestamp: '2021-07-24 05:07:12'
    },
    {
      id: 1,
      user_id: 1,
      text: 'Meanwhile, at the R1 institution down the street... https://uci.edu/coronavirus/messages/200710-sanitizer-recall.php',
      timestamp: '2021-07-24 05:06:12'
    }
  ]
}

export function getHomeTimeline (username) {
  switch (username) {
    case 'ProfAvery':
      return [
        {
          id: 5,
          user_id: 2,
          text: "I keep seeing video from before COVID, of people not needing to mask or distance, and doing something like waiting in line at Burger King. YOU'RE WASTING IT!",
          timestamp: '2021-07-24 05:10:12'
        },
        {
          id: 4,
          user_id: 2,
          text: 'If academia were a video game, then a 2.5 hour administrative meeting that votes to extend time 15 minutes is a fatality. FINISH HIM',
          timestamp: '2021-07-24 05:08:12'
        },
        {
          id: 6,
          user_id: 3,
          text: '#cpsc315 #engr190w NeurIPS is $25 for students and $100 for non-students this year! https://medium.com/@NeurIPSConf/neurips-registration-opens-soon-67111581de99',
          timestamp: '2021-07-24 05:07:12'
        }
      ]
    case 'KevinAWortman':
      return [
        {
          id: 2,
          user_id: 1,
          text: 'FYI: https://www.levels.fyi/still-hiring/',
          timestamp: '2021-07-24 05:11:12'
        },
        {
          id: 3,
          user_id: 1,
          text: 'Yes, the header file ends in .h. C++ is for masochists.',
          timestamp: '2021-07-24 05:09:12'
        },
        {
          id: 6,
          user_id: 3,
          text: '#cpsc315 #engr190w NeurIPS is $25 for students and $100 for non-students this year! https://medium.com/@NeurIPSConf/neurips-registration-opens-soon-67111581de99',
          timestamp: '2021-07-24 05:07:12'
        },
        {
          id: 1,
          user_id: 1,
          text: 'Meanwhile, at the R1 institution down the street... https://uci.edu/coronavirus/messages/200710-sanitizer-recall.php',
          timestamp: '2021-07-24 05:06:12'
        }
      ]
    case 'Beth_CSUF':
      return getUserTimeline('KevinAWortman')
    default:
      return []
  }
}

export function postMessage (userId, text) {
  if (userId > 3) {
    const now = new Date()
    const timestamp =
      now.getUTCFullYear() + '-' +
      String(now.getUTCMonth() + 1).padStart(2, '0') + '-' +
      String(now.getUTCDate()).padStart(2, '0') + ' ' +
      String(now.getUTCHours()).padStart(2, '0') + ':' +
      String(now.getUTCMinutes()).padStart(2, '0') + ':' +
      String(now.getUTCSeconds()).padStart(2, '0')

    return {
      id: 7,
      user_id: userId,
      text: text,
      timestamp: timestamp
    }
  }
}

export function getUserName(userId){
  return dict[userId]
}

export function tailwind_css(){
  return tailwind_class
}

export function tailwind_css2(){
  return tailwind_class2
}

export function return_Users(){
  return user_list
}
