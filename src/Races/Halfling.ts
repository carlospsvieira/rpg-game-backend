import Race from './Race';

export default class Halfling extends Race {
  private static _createdInstances = 0;
  private _maxInstances = 5;
  private _maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    if (Halfling._createdInstances >= this._maxInstances) {
      throw new Error('Maximum number of Halfling instances reached');
    }
    Halfling._createdInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
