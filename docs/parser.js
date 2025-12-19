const fs = require('fs');
const path = require('path');

class Parser {
  constructor(file) {
    this.file = file;
  }

  async read() {
    try {
      const contents = await fs.promises.readFile(this.file, 'utf8');
      return contents;
    } catch (error) {
      if (error.code === 'ENOENT') {
        throw new Error(`File not found: ${this.file}`);
      } else {
        throw error;
      }
    }
  }

  parse(contents) {
    try {
      const data = JSON.parse(contents);
      return data;
    } catch (error) {
      throw new Error('Invalid JSON format');
    }
  }
}

module.exports = Parser;