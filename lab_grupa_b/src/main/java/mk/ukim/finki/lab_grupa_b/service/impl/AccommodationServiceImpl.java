package mk.ukim.finki.lab_grupa_b.service.impl;

import mk.ukim.finki.lab_grupa_b.model.Accommodation;
import mk.ukim.finki.lab_grupa_b.model.Host;
import mk.ukim.finki.lab_grupa_b.model.dto.AccommodationDto;
import mk.ukim.finki.lab_grupa_b.model.enumerations.CategoryType;
import mk.ukim.finki.lab_grupa_b.model.exceptions.AccommodationAlreadyRentedException;
import mk.ukim.finki.lab_grupa_b.model.exceptions.AccommodationNotFoundException;
import mk.ukim.finki.lab_grupa_b.model.exceptions.HostNotFoundException;
import mk.ukim.finki.lab_grupa_b.repository.AccommodationRepository;
import mk.ukim.finki.lab_grupa_b.repository.HostRepository;
import mk.ukim.finki.lab_grupa_b.service.AccommodationService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccommodationServiceImpl implements AccommodationService {

    private final AccommodationRepository accommodationRepository;
    private final HostRepository hostRepository;

    public AccommodationServiceImpl(AccommodationRepository accommodationRepository, HostRepository hostRepository) {
        this.accommodationRepository = accommodationRepository;
        this.hostRepository = hostRepository;
    }

    @Override
    public Optional<Accommodation> findById(Long id) {
        return this.accommodationRepository.findById(id);
    }

    @Override
    public List<Accommodation> findAll() {
        return this.accommodationRepository.findAll();
    }

    @Override
    public Optional<Accommodation> save(String name, CategoryType categoryType, Long hostId, Integer numRooms) {
        Host host = this.hostRepository.findById(hostId)
                .orElseThrow(() -> new HostNotFoundException(hostId));

        return Optional.of(this.accommodationRepository.save(new Accommodation(name, categoryType, host, numRooms)));
    }

    @Override
    public Optional<Accommodation> save(AccommodationDto accommodationDto) {
        Host host = this.hostRepository.findById(accommodationDto.getHost())
                .orElseThrow(() -> new HostNotFoundException(accommodationDto.getHost()));

        return Optional.of(this.accommodationRepository.save(new Accommodation(accommodationDto.getName(), accommodationDto.getCategory(), host, accommodationDto.getNumRooms())));
    }

    @Override
    public Optional<Accommodation> edit(Long id, String name, CategoryType categoryType, Long hostId, Integer numRooms) {
        Accommodation accommodation = this.findById(id).orElseThrow(() -> new AccommodationNotFoundException(id));
        Host host = this.hostRepository.findById(hostId)
                .orElseThrow(() -> new HostNotFoundException(hostId));

        accommodation.setName(name);
        accommodation.setCategory(categoryType);
        accommodation.setHost(host);
        accommodation.setNumRooms(numRooms);

        return Optional.of(this.accommodationRepository.save(accommodation));
    }

    @Override
    public Optional<Accommodation> edit(Long id, AccommodationDto accommodationDto) {
        Accommodation accommodation = this.findById(id).orElseThrow(() -> new AccommodationNotFoundException(id));
        Host host = this.hostRepository.findById(accommodationDto.getHost())
                .orElseThrow(() -> new HostNotFoundException(accommodationDto.getHost()));

        accommodation.setName(accommodationDto.getName());
        accommodation.setCategory(accommodationDto.getCategory());
        accommodation.setHost(host);
        accommodation.setNumRooms(accommodationDto.getNumRooms());
        return Optional.of(this.accommodationRepository.save(accommodation));
    }

    @Override
    public void deleteById(Long id) {
        this.findById(id).orElseThrow(() -> new AccommodationNotFoundException(id));
        this.accommodationRepository.deleteById(id);
    }

    @Override
    public Optional<Accommodation> rent(Long id) {
        Accommodation accommodation = this.findById(id).orElseThrow(() -> new AccommodationNotFoundException(id));
        if(!accommodation.getIsRented())
            accommodation.setIsRented(true);
        else
            throw new AccommodationAlreadyRentedException(id);
        return Optional.of(this.accommodationRepository.save(accommodation));
    }
}
