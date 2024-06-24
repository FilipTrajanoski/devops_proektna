package mk.ukim.finki.lab_grupa_b.service;

import mk.ukim.finki.lab_grupa_b.model.Accommodation;
import mk.ukim.finki.lab_grupa_b.model.dto.AccommodationDto;
import mk.ukim.finki.lab_grupa_b.model.enumerations.CategoryType;

import java.util.List;
import java.util.Optional;

public interface AccommodationService {

    Optional<Accommodation> findById(Long id);
    List<Accommodation> findAll();
    Optional<Accommodation> save(String name, CategoryType categoryType, Long host, Integer numRooms);
    Optional<Accommodation> save(AccommodationDto accommodationDto);
    Optional<Accommodation> edit(Long id, String name, CategoryType categoryType, Long host, Integer numRooms);
    Optional<Accommodation> edit(Long id, AccommodationDto accommodationDto);
    void deleteById(Long id);
    Optional<Accommodation> rent(Long id);
}
