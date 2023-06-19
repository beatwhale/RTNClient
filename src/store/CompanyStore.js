import { makeAutoObservable } from "mobx";

export default class CompanyStore {
  constructor() {
    this._companies = [];
    this._categorized_objects_transport = [];
    makeAutoObservable(this);
  }

  setCompanies(companies) {
    this._companies = companies;
  }
  setCategorized_objects_transport(categorized_objects_transport) {
    this._categorized_objects_transport = categorized_objects_transport;
  }

  get companies() {
    return this._companies;
  }
  get categorized_objects_transport() {
    return this._categorized_objects_transport;
  }
}
