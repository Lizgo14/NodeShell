  process.stdout.write('\nprompt > ')


let pwd = require('./pwd')
let ls = require('./ls')
  process.stdin.on('data', (data) => {
    
    const cmd = data.toString().trim()
    
    if (cmd === 'pwd'){

      process.stdout.write(pwd())
      process.stdout.write('\nprompt > ')

    } else if (cmd === 'ls') {
       ls()
    }else {
    process.stdout.write(`You typed: ${cmd}`)
    process.stdout.write('\nprompt > ')
    }
    
  })

  