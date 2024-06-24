package mk.ukim.finki.lab_grupa_b.model.exceptions;

public class AccommodationNotFoundException extends RuntimeException{

    public AccommodationNotFoundException(Long id) {
        super(String.format("Accommodation with id: %d not found", id));
    }
}
