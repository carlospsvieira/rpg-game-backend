import Race from './Race';

export default class Elf extends Race {
  private static _createdInstances = 0;
  private _maxInstances = 5;
  private _maxLifePoints = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    if (Elf._createdInstances >= this._maxInstances) {
      throw new Error('Maximum number of Elf instances reached');
    }
    Elf._createdInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
