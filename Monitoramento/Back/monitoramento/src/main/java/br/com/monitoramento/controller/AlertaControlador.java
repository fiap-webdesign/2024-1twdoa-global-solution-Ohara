package br.com.monitoramento.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import br.com.monitoramento.model.Alerta;
import br.com.monitoramento.service.AlertaServico;

import java.util.List;

@RestController
@RequestMapping("/api/alertas")
@CrossOrigin(origins = "*")
public class AlertaControlador {

    @Autowired
    private AlertaServico servico;

    @GetMapping
    public List<Alerta> listarAlertas() {
        return servico.obterTodosAlertas();
    }
}

