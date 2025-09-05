function sym(...args) {
  
  if(args.length > 2){
    return sym(sym(args[0],args[1]), ...args.slice(2))
  }
  

  if(args.length == 2){
    let firstArg = [...new Set([...args[0]])];
    let secondArg =[...new Set([...args[1]])];
    let totalArgs = firstArg.concat(secondArg).sort();
    console.log("Totlal:",totalArgs)
    let symDiff = totalArgs.filter(item => totalArgs.indexOf(item) == totalArgs.lastIndexOf(item));
    return symDiff;
  }

  if (args.length == 1){
    return args
  }
}

