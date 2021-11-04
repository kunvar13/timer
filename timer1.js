const arg = process.argv.splice(2);
//console.log(arg);

const alarm = function(i) {
  setTimeout(()=> {
    process.stdout.write('.');
    //console.log('\u0007');
  },i);
};

const timer = function(arg) {
  for (let i = 0; i < arg.length; i++) {
    if (arg[i] > 0 && arg[i] !== String) {
      alarm((arg[i] * 1000));
    } else {
      continue;
    }

    
  }
};
timer(arg);