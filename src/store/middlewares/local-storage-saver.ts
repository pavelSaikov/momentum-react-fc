export class LocalStorageSaver {
  private localStoragePrefix: string;

  constructor(localStorageKey: string) {
    this.localStoragePrefix = localStorageKey;
  }

  saveField(fieldName: string, value: any) {
    localStorage.setItem(`${this.localStoragePrefix}_${fieldName}`, value);
  }

  getField(fieldName: string): any {
    return localStorage.getItem(`${this.localStoragePrefix}_${fieldName}`);
  }
}
