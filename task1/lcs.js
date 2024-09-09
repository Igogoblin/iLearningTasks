const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("");
} else if (args.length === 1) {
  console.log(args[0]);
} else {
  let a = [];
  for (let i = 0; i < args[0].length; i++) {
    for (let j = i + 1; j <= args[0].length; j++) {
      const s = args[0].slice(i, j);
      if (args.every((item) => item.includes(s))) {
        a.push(s);
      }
    }
  }
  let len = 0;
  a.forEach((s) => {
    if (s.length > len) {
      len = s.length;
    }
  });
  const l = a.find((s) => s.length === len);
  console.log(a.length > 0 ? l : "");
}
