package br.com.monitoramento.service;

import org.springframework.stereotype.Service;

import br.com.monitoramento.model.DadosEnergia;

import java.util.ArrayList;
import java.util.List;

@Service
public class EnergiaServico {
    public List<DadosEnergia> obterDadosEmTempoReal() {
        List<DadosEnergia> dados = new ArrayList<>();
        dados.add(new DadosEnergia("2024-11-13T10:00:00", 250.5, "Desligue os aparelhos que não estão sendo usados."));
        dados.add(new DadosEnergia("2024-11-13T11:00:00", 300.8, "Consumo elevado detectado. Reduza o uso do ar-condicionado."));
        return dados;
    }
}

