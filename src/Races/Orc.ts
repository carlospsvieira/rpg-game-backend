import Race from './Race';

export default class Orc extends Race {
  private static _createdInstances = 0;
  private _maxInstances = 5;
  private _maxLifePoints = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    if (Orc._createdInstances >= this._maxInstances) {
      throw new Error('Maximum number of Orc instances reached');
    }
    Orc._createdInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
