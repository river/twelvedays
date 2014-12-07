// On the nth day of christmas you will have accumulated n*(n+1)*(n+2)/6 gifts

console.log('day\tpresents');

for (var days=0;days<100;days++) {

  var presents = 0;
  for (var i=1;i<=days;i++) {
    // console.log(i+'*'+(days+1-i));
    presents += (days+1-i)*i;
  };

  console.log(days+'\t'+presents);

};
