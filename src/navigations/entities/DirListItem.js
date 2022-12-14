export class DirListItem {
  constructor (file) {
    this.Name = file.name;
    this.Type = this.getType(file);
  }

  getType (item) {
    if (item.isDirectory()) {
      return 'directory';
    }
    
    if (item.isFile()) {
      return 'file';
    }

    if (item.isSocket()) {
      return 'socket';
    }

    if (item.isSymbolicLink()) {
      return 'symbolicLink';
    }

    return 'unknown';
  }

  get weight () {
    const TYPES_WEIGHT = {
      directory: 1,
      file: 2,
      socket: 3,
      symbolicLink: 4,
      unknown: 5,
    };

    return TYPES_WEIGHT[this.Type];
  }

  static create (item) {
    return new DirListItem(item);
  }
};