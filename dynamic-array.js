class DynamicArray {
  constructor(defaultSize = 4) {
    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if (this.length === this.capacity) {
      this.resize();
    }
    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    const lasEl = this.data[this.length - 1];

    this.data[this.length - 1] = undefined;

    if (this.length > 0) this.length--;
    return lasEl;
  }

  shift() {
    const newArr = new Array(this.capacity);
    const firstElement = this.data[0];
    for (let i = 1; i < this.length; i++) {
      newArr[i - 1] = this.data[i];
    }
    this.data = newArr;
    if (this.length > 0) {
      this.length--;
    }
    return firstElement;
  }

  unshift(val) {
    if (this.length === this.capacity) {
      this.resize();
    }
    const newArr = new Array(this.capacity);
    newArr[0] = val;

    for (let i = 0; i < this.length; i++) {
      newArr[i + 1] = this.data[i];
    }

    this.data = newArr;
    this.length++;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      let dataCurrentVal = this.data[i];
      if (dataCurrentVal === val) {
        return i;
      }
    }
    return -1;
  }

  resize() {
    this.capacity = this.capacity * 2;
    const newArr = new Array(this.capacity);

    for (let i = 0; i < this.length; i++) {
      newArr[i] = this.data[i];
    }
    this.data = newArr;
  }
}

module.exports = DynamicArray;
