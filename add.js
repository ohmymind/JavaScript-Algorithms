const fs = require('fs');
console.log(process.argv[2]);
const argv = process.argv;
const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
<script>

</script>
</html>
`
let filePath = '';
if(argv.length === 3) {
  filePath = `./${argv[2]}.html`
} else if(argv.length === 4) {
  filePath = `./${argv[2]}/${argv[3]}.html`;
} else {
  console.error('缺少参数');
  return;
}
fs.stat(filePath, (error, stats) => {
  // if(error) {
  //   console.log('stat-error:',error, stats);
  //   return;
  // };
  if(!stats) {
    fs.writeFile(filePath, template, (error) => {
      if(error) {
        console.log('writeFile-error:',error)
      } else {
        console.log('创建成功：', filePath);
      }
    });
  } else {
    console.log(`${filePath}已存在！`);
  }
})