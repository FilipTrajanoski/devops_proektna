package mk.ukim.finki.lab_grupa_b.service;

import mk.ukim.finki.lab_grupa_b.model.Country;
import mk.ukim.finki.lab_grupa_b.model.dto.CountryDto;

import java.util.List;
import java.util.Optional;

public interface CountryService {
    Optional<Country> findById(Long id);
    List<Country> findAll();
    Optional<Country> save(String name, String continent);
    Optional<Country> edit(Long id, String name, String continent);
    void deleteById(Long id);
    Optional<Country> save(CountryDto countryDto);
    Optional<Country> edit(Long id, CountryDto countryDto);
}
