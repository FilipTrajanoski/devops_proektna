package mk.ukim.finki.lab_grupa_b.repository;

import mk.ukim.finki.lab_grupa_b.model.Host;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HostRepository extends JpaRepository<Host, Long> {
}
