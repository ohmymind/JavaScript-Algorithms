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
fs.writeFile(`./${argv[2]}/${argv[3]}.html`, template, (error) => {
  if(error) {
    console.log(error)
  }
  console.log('创建成功，路径：', `./${argv[2]}/${argv[3]}.html`);
});