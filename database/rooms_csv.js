const fs = require('fs');

const writeRooms = fs.createWriteStream('rooms.csv');
writeRooms.write('id\n', 'utf8');

function writeTenMillionRooms(writer, encoding, callback) {
    let i = 10000000;
    let id = 0;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        const data = `${id}\n`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
  // see if we should continue, or wait
  // don't pass the callback, because we're not done yet.
          ok = writer.write(data, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
  // had to stop early!
  // write some more once it drains
        writer.once('drain', write);
      }
    }
  write()
}

writeTenMillionRooms(writeRooms, 'utf-8', () => {
    writeRooms.end();
});