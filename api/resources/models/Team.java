package models;

import org.springframework.context.annotation.Lazy;

import javax.persistence.*;
import java.util.Collection;

/**
 * Created by brundel on 2/9/16.
 */
@Entity
@Table(name = "team")
public class Team extends BaseEntity{

    @OneToMany
    @Lazy(value = true)
    @Column(name = "user_id",table = "team")
    private Users teamLead;

    @Lazy
    @Column(name = "user_id",table = "team")
    private Collection<Users> members;

    public void setMembers(Collection<Users> members) {
        this.members = members;
    }

    public void setTeamLead(Users teamLead) {
        this.teamLead = teamLead;
    }

    public Users getTeamLead() {
        return teamLead;
    }

    public Collection<Users> getMembers() {
        return members;
    }
}
