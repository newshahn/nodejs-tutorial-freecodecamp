const fs = require("fs");

// // create a file
// fs.writeFile("example.txt", "this is an example", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("success");
//     fs.readFile("example.txt", "utf8", (err, file) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(file);
//       }
//     });
//   }
// });

// fs.rename("example.txt", "example2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("success");
//   }
// });

// fs.appendFile("example2.txt", "some data being appended", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully appended data to the file");
//   }
// });

// fs.unlink("example2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully deleted file.");
//   }
// });

// fs.mkdir("tutorial", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.writeFile("./tutorial/example.txt", "some example text", (err) => {
//       if (err) console.log(err);
//       else {
//         console.log("file was successfully created.");
//       }
//     });
//   }
// });

// fs.unlink("./tutorial/example.txt", (err) => {
//   if (err) console.log(err);
//   else {
//     fs.rmdir("tutorial", (err) => {
//       if (err) console.log(err);
//       else console.log("successfully deleted directory.");
//     });
//   }
// });

fs.readdir("example", (err, files) => {
  if (err) console.log(err);
  else {
    console.log(files);
    for (let file of files) {
      fs.unlink("./example/" + file, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("successfully deleted folder with multiple files in it");
        }
      });
    }
  }
});
