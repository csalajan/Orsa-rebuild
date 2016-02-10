package models;

import org.springframework.context.annotation.Lazy;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import java.util.Date;
import java.util.Objects;

/**
 * Created by brundel on 2/9/16.
 */
@Entity
@Table(name = "users")
public class Users extends BaseEntity{



    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @Column(name = "username", unique = true, nullable = false)
    private String userName;

    @Column(name = "summoner")
    private String summoner;

    @Column(name = "isAdmin")
    private boolean isAdmin;

    @Column(name = "gender")
    private char gender;

    @Column(name = "dob")
    private Date birthday;

    @Column(name = "occupation")
    private String occupation;

    @Column(name = "website")
    private String website;

    @Column(name = "facebook")
    private String facebook;

    @Column(name = "about")
    private String about;

    @Column(name = "twitter")
    private String twitter;

    @Column(name = "facebook")
    private String skype;

    @Column(name = "google_plus")
    private String googlePlus;

    @Lazy
    @Column(name = "hardware_id")
    private Hardware hardware;

    @Lazy
    @Column(name = "team_id")
    private Team team;

    public void setEmail(final String email) {
        this.email = email;
    }

    public void setUserName(final String userName) {
        this.userName = userName;
    }

    public void setSummoner(final String summoner) {
        this.summoner = summoner;
    }

    public void setAdmin(final boolean admin) {
        isAdmin = admin;
    }

    public void setGender(final char gender) {
        this.gender = gender;
    }

    public void setBirthday(final Date birthday) {
        this.birthday = birthday;
    }

    public void setOccupation(final String occupation) {
        this.occupation = occupation;
    }

    public void setWebsite(final String website) {
        this.website = website;
    }

    public void setFacebook(final String facebook) {
        this.facebook = facebook;
    }

    public void setAbout(final String about) {
        this.about = about;
    }

    public void setTwitter(final String twitter) {
        this.twitter = twitter;
    }

    public void setSkype(final String skype) {
        this.skype = skype;
    }

    public void setGooglePlus(final String googlePlus) {
        this.googlePlus = googlePlus;
    }

    public void setHardware(final Hardware hardware) {
        this.hardware = hardware;
    }

    public void setTeam(final Team team) {
        this.team = team;
    }

    public String getUserName() {
        return userName;
    }

    public String getEmail() {
        return email;
    }

    public String getSummoner() {
        return summoner;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public char getGender() {
        return gender;
    }

    public Date getBirthday() {
        return birthday;
    }

    public String getOccupation() {
        return occupation;
    }

    public String getWebsite() {
        return website;
    }

    public String getFacebook() {
        return facebook;
    }

    public String getAbout() {
        return about;
    }

    public String getTwitter() {
        return twitter;
    }

    public String getSkype() {
        return skype;
    }

    public String getGooglePlus() {
        return googlePlus;
    }

    public Hardware getHardware() {
        return hardware;
    }

    public Team getTeam() {
        return team;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Users)) return false;
        Users users = (Users) o;
        return Objects.equals(this.getId(), users.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.getId());
    }

    @Override
    public String toString() {
        return "Users{" +
                "id='" + getId() + '\'' +
                "name='" + getName() + '\'' +
                "email='" + email + '\'' +
                ", userName='" + userName + '\'' +
                ", summoner='" + summoner + '\'' +
                ", isAdmin=" + isAdmin +
                ", gender=" + gender +
                ", birthday=" + birthday +
                ", occupation='" + occupation + '\'' +
                ", website='" + website + '\'' +
                ", facebook='" + facebook + '\'' +
                ", about='" + about + '\'' +
                ", twitter='" + twitter + '\'' +
                ", skype='" + skype + '\'' +
                ", googlePlus='" + googlePlus + '\'' +
                ", hardware=" + hardware +
                ", team=" + team +
                '}';
    }
}
