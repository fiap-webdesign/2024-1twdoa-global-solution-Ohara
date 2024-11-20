package br.com.monitoramento.model;

public class DadosEnergia {
    
    private String horario;
    private double consumo;
    private String recomendacao;

    public DadosEnergia(String horario, double consumo, String recomendacao) {
        this.horario = horario;
        this.consumo = consumo;
        this.recomendacao = recomendacao;
    }

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }

    public double getConsumo() {
        return consumo;
    }

    public void setConsumo(double consumo) {
        this.consumo = consumo;
    }

    public String getRecomendacao() {
        return recomendacao;
    }

    public void setRecomendacao(String recomendacao) {
        this.recomendacao = recomendacao;
    }
}
