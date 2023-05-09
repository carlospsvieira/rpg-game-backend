import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Fighter from './Fighter';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _defense: number;
  private _strength: number;
  private _energy: Energy;
  private _dexterity: number;
  private _lifePoints: number;
  private _maxLifePoints: number;

  constructor(name: string, race?: Race, archetype?: Archetype) {
    const randomInt = getRandomInt(1, 10);

    this._dexterity = randomInt;
    this._strength = randomInt;
    this._defense = randomInt;
    this._archetype = archetype || new Mage(name);
    this._race = race || new Elf(name, this._dexterity);
    this._maxLifePoints = Math.floor(this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._energy = {
      type_: this._archetype.energyType,
      amount: randomInt,
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get strength(): number {
    return this._strength;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get defense(): number {
    return this._defense;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  special(enemy: Fighter): void {
    enemy.receiveDamage(this._strength * 2); // crit
  }

  receiveDamage(attackPoints: number): number {
    const damaging = Math.max(attackPoints - this._defense, 1);
    this._lifePoints = Math.max(this._lifePoints - damaging, -1);
    return this._lifePoints;
  }

  levelUp(): void {
    const randomInt = getRandomInt(1, 10);

    this._energy.amount = 10;
    this._defense += randomInt;
    this._strength += randomInt;
    this._dexterity += randomInt;
    this._maxLifePoints += randomInt;
    this._maxLifePoints = Math.min(
      this._maxLifePoints,
      this._race.maxLifePoints,
    );
    this._lifePoints = this._maxLifePoints;
  }
}
