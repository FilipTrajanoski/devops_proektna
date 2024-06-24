package mk.ukim.finki.lab_grupa_b.service;

import mk.ukim.finki.lab_grupa_b.model.Host;
import mk.ukim.finki.lab_grupa_b.model.dto.HostDto;

import java.util.List;
import java.util.Optional;

public interface HostService {

    Optional<Host> findById(Long id);
    List<Host> findAll();
    Optional<Host> save(String name, String surname, Long country);
    Optional<Host> save(HostDto hostDto);
    Optional<Host> edit(Long id, String name, String surname, Long country);
    Optional<Host> edit(Long id, HostDto hostDto);
    void deleteById(Long id);
}
