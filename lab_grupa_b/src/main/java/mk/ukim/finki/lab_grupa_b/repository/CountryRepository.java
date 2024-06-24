package mk.ukim.finki.lab_grupa_b.repository;

import mk.ukim.finki.lab_grupa_b.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepository extends JpaRepository<Country, Long> {
}
