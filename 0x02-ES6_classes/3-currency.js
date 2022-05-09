/* eslint-disable */
export default class Currency {
  constructor(code, name) {
    this._name = name;
    this.code = code;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }

  set name(newName) {
    this._name = newName;
  }

  set code(newCode) {
    this._code = newCode;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }
}
