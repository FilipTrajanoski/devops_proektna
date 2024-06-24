package mk.ukim.finki.lab_grupa_b.service.impl;

import mk.ukim.finki.lab_grupa_b.model.Country;
import mk.ukim.finki.lab_grupa_b.model.Host;
import mk.ukim.finki.lab_grupa_b.model.dto.HostDto;
import mk.ukim.finki.lab_grupa_b.model.exceptions.CountryNotFoundException;
import mk.ukim.finki.lab_grupa_b.model.exceptions.HostNotFoundException;
import mk.ukim.finki.lab_grupa_b.repository.CountryRepository;
import mk.ukim.finki.lab_grupa_b.repository.HostRepository;
import mk.ukim.finki.lab_grupa_b.service.HostService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HostServiceImpl implements HostService {

    private final HostRepository hostRepository;
    private final CountryRepository countryRepository;

    public HostServiceImpl(HostRepository hostRepository, CountryRepository countryRepository) {
        this.hostRepository = hostRepository;
        this.countryRepository = countryRepository;
    }

    @Override
    public Optional<Host> findById(Long id) {
        return this.hostRepository.findById(id);
    }

    @Override
    public List<Host> findAll() {
        return this.hostRepository.findAll();
    }

    @Override
    public Optional<Host> save(String name, String surname, Long countryId) {
        Country country = this.countryRepository.findById(countryId)
                .orElseThrow(() -> new CountryNotFoundException(countryId));
        return Optional.of(this.hostRepository.save(new Host(name, surname, country)));
    }

    @Override
    public Optional<Host> save(HostDto hostDto) {
        Country country = this.countryRepository.findById(hostDto.getCountry())
                .orElseThrow(() -> new CountryNotFoundException(hostDto.getCountry()));
        return Optional.of(this.hostRepository.save(new Host(hostDto.getName(), hostDto.getSurname(), country)));
    }

    @Override
    public Optional<Host> edit(Long id, String name, String surname, Long countryId) {
        Host host = this.findById(id).orElseThrow(() -> new HostNotFoundException(id));
        Country country = this.countryRepository.findById(countryId)
                .orElseThrow(() -> new CountryNotFoundException(countryId));
        host.setName(name);
        host.setSurname(surname);
        host.setCountry(country);
        return Optional.of(this.hostRepository.save(host));
    }

    @Override
    public Optional<Host> edit(Long id, HostDto hostDto) {
        Host host = this.findById(id).orElseThrow(() -> new HostNotFoundException(id));
        Country country = this.countryRepository.findById(hostDto.getCountry())
                .orElseThrow(() -> new CountryNotFoundException(hostDto.getCountry()));
        host.setName(hostDto.getName());
        host.setSurname(hostDto.getSurname());
        host.setCountry(country);
        return Optional.of(this.hostRepository.save(host));
    }

    @Override
    public void deleteById(Long id) {
        this.findById(id).orElseThrow(() -> new HostNotFoundException(id));
        this.hostRepository.deleteById(id);
    }
}
