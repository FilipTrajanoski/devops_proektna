package mk.ukim.finki.lab_grupa_b.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import mk.ukim.finki.lab_grupa_b.model.enumerations.CategoryType;

@Data
@Entity
@NoArgsConstructor
public class Accommodation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Enumerated(EnumType.STRING)
    private CategoryType category;

    @ManyToOne
    private Host host;

    private Integer numRooms;

    private Boolean isRented;

    public Accommodation(String name, CategoryType category, Host host, Integer numRooms) {
        this.name = name;
        this.category = category;
        this.host = host;
        this.numRooms = numRooms;
        isRented = false;
    }
}
