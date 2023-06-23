export class Viajem {

  public Id: number;
  public Destino: string;
  public Tipo: string;
  public DataChegada: string;
  public DataSaida: string;
  public Orcamento: number;
  public QuantidadePessoas: number;

  constructor(id: number, destino: string, tipo: string, dataChegada: string, dataSaida: string, orcamento: number, quantidadePessoas: number) {

    this.Id = id;
    this.Destino = destino;
    this.Tipo = tipo;
    this.DataChegada = dataChegada;
    this.DataSaida = dataSaida;
    this.Orcamento = orcamento;
    this.QuantidadePessoas = quantidadePessoas;
  }

}
