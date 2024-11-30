package br.com.monitoramento.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import br.com.monitoramento.model.Alerta;

public interface AlertaRepository extends JpaRepository<Alerta, Long> {
    
}

