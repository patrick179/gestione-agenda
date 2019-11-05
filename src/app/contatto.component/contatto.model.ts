export class Contatto {
  nome: string;
  cognome: string;
  mail: string;
  cell: string;
  nrStelle: number;

  constructor (nome: string, cognome: string, mail: string, cell: string, nrStelle: number) {
    this.nome = nome;
    this.cognome = cognome;
    this.mail = mail;
    this.cell = cell;
    this.nrStelle = nrStelle;
  }

  getNomeCompleto(): string {
    return this.nome + " " + this.cognome;
  }

  getNome(): string {
    return this.nome;
  }

  getCognome(): string {
    return this.cognome;
  }

  getMail(): string {
    return this.mail;
  }

  getCell(): string {
    return this.cell;
  }

  getNrStelle(): number {
    return this.nrStelle;
  }
}