package br.com.monitoramento.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import br.com.monitoramento.model.DadosEnergia;
import br.com.monitoramento.service.EnergiaServico;

import java.util.List;

@RestController
@RequestMapping("/api/energia")
@CrossOrigin(origins = "*") // Permitir requisições do front-end
public class EnergiaControlador {

    @Autowired
    private EnergiaServico energiaServico;

    @GetMapping("/tempo-real")
    public List<DadosEnergia> obterDadosEmTempoReal() {
        return energiaServico.obterDadosEmTempoReal();
    }
}

