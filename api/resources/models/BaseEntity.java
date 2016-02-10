package models;

import com.sun.istack.internal.NotNull;
import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;
import org.springframework.data.annotation.Id;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

/**
 * Created by brundel on 2/9/16.
 */

public abstract class BaseEntity {

    @Id
    @NotNull
    @Generated(value = GenerationTime.ALWAYS)
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;

    @NotNull
    @Column(name = "name")
    private String name;

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
