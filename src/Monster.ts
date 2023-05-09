import SimpleFighter from './Fighter/SimpleFighter';

export default class Monster implements SimpleFighter {
  private attributes: {
    lifePoints: number;
    strength: number;
  };

  constructor() {
    this.attributes = {
      lifePoints: 85,
      strength: 63,
    };
  }

  get lifePoints(): number {
    return this.attributes.lifePoints;
  }

  get strength(): number {
    return this.attributes.strength;
  }

  receiveDamage(attackPoints: number): number {
    this.attributes.lifePoints -= attackPoints;

    if (this.attributes.lifePoints <= 0) {
      this.attributes.lifePoints = -1;
    }

    return this.attributes.lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.attributes.strength);
  }
}
