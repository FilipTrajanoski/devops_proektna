package mk.ukim.finki.lab_grupa_b.model.exceptions;

public class HostNotFoundException extends RuntimeException{

    public HostNotFoundException(Long id) {
        super(String.format("Host with id: %d not found", id));
    }
}
