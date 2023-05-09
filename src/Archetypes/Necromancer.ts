import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private static _createdInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer._createdInstances += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return this._createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
