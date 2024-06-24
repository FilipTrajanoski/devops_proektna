package mk.ukim.finki.lab_grupa_b.model.exceptions;

public class CountryNotFoundException extends RuntimeException{

    public CountryNotFoundException(Long id) {
        super(String.format("Country with id: %d not found", id));
    }
}
