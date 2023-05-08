// src/Races/Dwarf.ts
import Race from './Race';

export default class Dwarf extends Race {
  private static _createdInstances = 0;
  private _maxInstances = 3;
  private _maxLifePoints = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    if (Dwarf._createdInstances > this._maxInstances) {
      throw new Error('Maximum number of Dwarf instances reached');
    }
    Dwarf._createdInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
