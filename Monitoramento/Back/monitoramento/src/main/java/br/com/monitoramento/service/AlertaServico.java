package br.com.monitoramento.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.monitoramento.model.Alerta;
import br.com.monitoramento.repository.AlertaRepository;

import java.util.List;

@Service
public class AlertaServico {

    @Autowired
    private AlertaRepository repositorio;

    public List<Alerta> obterTodosAlertas() {
        return repositorio.findAll();
    }
}
