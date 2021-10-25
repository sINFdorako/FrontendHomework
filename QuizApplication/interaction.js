var readline = import('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Type your Answer, either A, B, C or D: ", function (answer) {
    console.log(`Your answer is logged: ${answer}`);
    rl.close();
});